// Public MCP (Model Context Protocol) server for Curæted.
// Streamable HTTP transport, JSON-RPC 2.0.
// Exposes read-only, intentionally public information about the company.
// No private data (e.g. contact form submissions) is ever exposed here.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, mcp-session-id, mcp-protocol-version",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
};

const SERVER_INFO = {
  name: "curaeted-web",
  title: "Curæted",
  version: "0.1.0",
};

const INSTRUCTIONS =
  "Tools for Curæted, an importer of the finest Spanish Iberico products (100% acorn-fed Iberico pork and organic extra virgin olive oil) into China. " +
  "Use `get_company_info` for company identity and contact details, `list_products` for the product range, " +
  "`get_section_content` to read the marketing copy of a website section in English, Spanish or Chinese, and `where_to_find_us` for sales channels.";

const COMPANY = {
  name: "Curæted",
  name_zh: "醇雅特",
  tagline: "Bringing the finest Iberico products to China",
  website: "https://curaetedchina.com",
  email: "info@curaetedchina.com",
  address_en:
    "Room 214 Level 2, Building 1, 155 Fengxiang Rd, Baoshan, Shanghai, PRC",
  address_zh: "上海市宝山区丰翔路155号1幢2层214室",
  origin:
    "Rooted in Extremadura, Andalusia and Castile — traditional farming regions of Spain.",
  mission:
    "Reconnect people with the best farming and help artisanal farmers thrive by opening global markets to them.",
  advantages: [
    {
      title: "Fully traceable products",
      detail: "From breeding and farming through to the table.",
    },
    {
      title: "More value, more sustainable",
      detail:
        "Best products at competitive prices delivered directly from producers, so farmers earn more and keep producing in the best traditional way.",
    },
  ],
};

const PRODUCTS = [
  {
    id: "iberico-pork-cold-cuts",
    name: "Iberico pork — cold cuts",
    description:
      "100% Iberico, 100% acorn fed (bellota). Artisanally cured hams and cold cuts.",
  },
  {
    id: "iberico-pork-fresh",
    name: "Iberico pork — fresh meat",
    description:
      "100% Iberico, 100% acorn fed. Delivered refrigerated (never frozen) by airfreight.",
  },
  {
    id: "extra-virgin-olive-oil",
    name: "Extra virgin olive oil",
    description:
      "Artisan-made, ecologically produced organic extra virgin olive oil.",
  },
];

const CHANNELS = [
  {
    channel: "Red Note (Xiaohongshu / 小红书)",
    status: "live",
    note: "Scan the QR code on the website to follow us.",
  },
  {
    channel: "WeChat (微信)",
    status: "live",
    note: "Scan the QR code on the website to connect with us.",
  },
];

type Lang = "en" | "es" | "cn";

const SECTIONS: Record<string, Record<Lang, string>> = {
  home: {
    en: "Curæted — bringing the finest Iberico products to China.",
    es: "Curæted — llevando los mejores productos ibéricos a China.",
    cn: "醇雅特 — 将最优质的伊比利亚产品带到中国。",
  },
  whatWeDo: {
    en:
      "We focus on Iberico pork (cold cuts and fresh meat) and extra virgin olive oil. " +
      "A new young purveyor of the very finest Iberico products to China; we only work with the very finest: 100% acorn-fed Iberico pork and organic, artisan-made extra virgin olive oil; " +
      "we work only with exporters authorised to China; and we serve direct farm-to-table via Red Note and WeChat to discerning Chinese customers. " +
      "We offer full traceability for every product.",
    es:
      "Nos enfocamos en cerdo ibérico (embutidos y carne fresca) y aceite de oliva virgen extra. " +
      "Solo trabajamos con lo mejor: cerdo ibérico 100% de bellota y aceite de oliva virgen extra artesanal y ecológico, " +
      "únicamente con exportadores autorizados a China, sirviendo directamente del productor al consumidor a través de Red Note y WeChat. " +
      "Ofrecemos trazabilidad completa de cada producto.",
    cn:
      "我们专注于伊比利亚猪肉（冷切肉和新鲜肉）和特级初榨橄榄油。我们只选择最优质的产品：100%橡果喂养的伊比利亚猪肉和手工制作的有机特级初榨橄榄油，" +
      "只与获授权向中国出口的商家合作，并通过小红书和微信直接从农场到餐桌为中国消费者服务。我们为每一个产品提供完整的可追溯性。",
  },
  onlyTheFinest: {
    en: "100% Iberico, 100% acorn fed. Ecologically produced extra virgin olive oil.",
    es: "100% Ibérico, 100% alimentado con bellotas. Aceite de oliva virgen extra producido ecológicamente.",
    cn: "100%伊比利亚，100%橡果喂养。生态生产的特级初榨橄榄油。",
  },
  whyIberico: {
    en:
      "Exceptional taste is more than a promise — it is a heritage. Our Iberico offerings celebrate centuries of culinary artistry, " +
      "from meticulously cured pork to organic extra virgin olive oil, combining artisanal craftsmanship with sustainable practices.",
    es:
      "El sabor excepcional es más que una promesa: es nuestra razón de ser. Nuestros productos ibéricos celebran siglos de arte culinario, " +
      "desde el cerdo curado meticulosamente hasta el aceite de oliva virgen extra orgánico, uniendo artesanía y sostenibilidad.",
    cn:
      "卓越的口感不仅仅是一个承诺——它是一种传承。我们的伊比利亚产品庆祝几个世纪的烹饪艺术，从精心腌制的猪肉到有机特级初榨橄榄油，兼具手工艺与可持续实践。",
  },
  about: {
    en:
      "With roots in Extremadura, Andalusia and Castile, Curæted believes these farmers can thrive if it is easier for them to reach global markets. " +
      "China, with its growing appetite for safer, healthier, organic and premium food, is the ideal market. " +
      "Fully traceable products, from breeding and farming to the table. More value, more sustainable.",
    es:
      "Con raíces en Extremadura, Andalucía y Castilla, Curæted cree que estos agricultores pueden prosperar si les resulta más fácil acceder a los mercados globales. " +
      "China, con su creciente anhelo de alimentos más seguros, saludables, orgánicos y premium, es el mercado ideal. " +
      "Productos totalmente trazables, desde la cría y el cultivo hasta la mesa. Más valor, más sostenible.",
    cn:
      "醇雅特的根源在西班牙的传统农业区。我们相信，如果这些农民能够更容易地进入全球市场，他们就能蓬勃发展。中国对更安全、更健康、有机和优质食品日益增长的需求使其成为理想市场。" +
      "完全可追溯的产品，从养殖到餐桌。更多价值，更可持续。",
  },
  contact: {
    en: "Want to get in touch or partner with us? Email info@curaetedchina.com or use the contact form at https://curaetedchina.com.",
    es: "¿Quiere ponerse en contacto o asociarse con nosotros? Escriba a info@curaetedchina.com o use el formulario en https://curaetedchina.com.",
    cn: "想与我们联系或合作？请发送邮件至 info@curaetedchina.com，或使用 https://curaetedchina.com 上的联系表格。",
  },
};

const LANG_ENUM: Lang[] = ["en", "es", "cn"];

const TOOLS = [
  {
    name: "get_company_info",
    title: "Get company info",
    description:
      "Return Curæted's identity, mission, address, email and key advantages.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  },
  {
    name: "list_products",
    title: "List products",
    description: "List the product categories Curæted imports from Spain into China.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  },
  {
    name: "where_to_find_us",
    title: "Where to find us",
    description: "List the sales and social channels where Curæted products can be found.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  },
  {
    name: "get_section_content",
    title: "Get website section content",
    description:
      "Return the marketing copy of a website section in a given language.",
    inputSchema: {
      type: "object",
      properties: {
        section: {
          type: "string",
          enum: Object.keys(SECTIONS),
          description: "Website section id.",
        },
        language: {
          type: "string",
          enum: LANG_ENUM,
          description: "Language code: en (English), es (Spanish), cn (Chinese). Defaults to en.",
        },
      },
      required: ["section"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  },
];

function textResult(value: unknown, structured?: Record<string, unknown>) {
  return {
    content: [{ type: "text", text: JSON.stringify(value, null, 2) }],
    ...(structured ? { structuredContent: structured } : {}),
  };
}

function errorResult(message: string) {
  return { content: [{ type: "text", text: message }], isError: true };
}

function callTool(name: string, args: Record<string, unknown>) {
  switch (name) {
    case "get_company_info":
      return textResult(COMPANY, { company: COMPANY });
    case "list_products":
      return textResult(PRODUCTS, { products: PRODUCTS });
    case "where_to_find_us":
      return textResult(CHANNELS, { channels: CHANNELS });
    case "get_section_content": {
      const section = String(args?.section ?? "");
      const language = (String(args?.language ?? "en") as Lang);
      const entry = SECTIONS[section];
      if (!entry) {
        return errorResult(
          `Unknown section "${section}". Available: ${Object.keys(SECTIONS).join(", ")}`,
        );
      }
      if (!LANG_ENUM.includes(language)) {
        return errorResult(`Unknown language "${language}". Available: en, es, cn`);
      }
      const payload = { section, language, content: entry[language] };
      return textResult(payload, payload);
    }
    default:
      return errorResult(`Unknown tool: ${name}`);
  }
}

function rpcResult(id: unknown, result: unknown) {
  return { jsonrpc: "2.0", id, result };
}

function rpcError(id: unknown, code: number, message: string) {
  return { jsonrpc: "2.0", id, error: { code, message } };
}

function handleMessage(msg: any): unknown | null {
  const { id, method, params } = msg ?? {};

  // Notifications carry no id and expect no response.
  if (id === undefined || id === null) return null;

  switch (method) {
    case "initialize":
      return rpcResult(id, {
        protocolVersion: params?.protocolVersion ?? "2025-06-18",
        capabilities: { tools: { listChanged: false } },
        serverInfo: SERVER_INFO,
        instructions: INSTRUCTIONS,
      });
    case "ping":
      return rpcResult(id, {});
    case "tools/list":
      return rpcResult(id, { tools: TOOLS });
    case "tools/call": {
      const name = String(params?.name ?? "");
      if (!TOOLS.some((t) => t.name === name)) {
        return rpcError(id, -32602, `Unknown tool: ${name}`);
      }
      return rpcResult(id, callTool(name, params?.arguments ?? {}));
    }
    case "resources/list":
      return rpcResult(id, { resources: [] });
    case "prompts/list":
      return rpcResult(id, { prompts: [] });
    default:
      return rpcError(id, -32601, `Method not found: ${method}`);
  }
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method === "GET") {
    // No server-initiated streaming; advertise the server instead.
    return new Response(
      JSON.stringify({ ...SERVER_INFO, transport: "streamable-http", instructions: INSTRUCTIONS }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }

  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify(rpcError(null, -32700, "Parse error")), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const messages = Array.isArray(body) ? body : [body];
  const responses = messages
    .map((m) => handleMessage(m))
    .filter((r): r is Record<string, unknown> => r !== null);

  if (responses.length === 0) {
    return new Response(null, { status: 202, headers: corsHeaders });
  }

  const payload = Array.isArray(body) ? responses : responses[0];
  return new Response(JSON.stringify(payload), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});