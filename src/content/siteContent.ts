export type Language = "en" | "zh";

type Item = { title: string; body: string };
type Stage = Item & { number: string };

export type SiteContent = {
  lang: string;
  title: string;
  description: string;
  nav: { id: string; label: string }[];
  hero: { eyebrow: string; headline: string; body: string; primary: string; secondary: string };
  opportunity: { label: string; headline: string; body: string; close: string };
  audiences: { label: string; headline: string; items: Item[] };
  services: { label: string; headline: string; items: Item[] };
  approach: { label: string; headline: string; intro: string; items: Stage[] };
  work: { label: string; headline: string; items: Item[]; note: string };
  why: { label: string; headline: string; items: Item[] };
  about: { label: string; headline: string; body: string; values: string };
  contact: { label: string; headline: string; body: string; cta: string; privacy: string };
  footer: string;
};

export const content: Record<Language, SiteContent> = {
  en: {
    lang: "en",
    title: "curæted paths | China Outbound Media & Adtech Growth",
    description: "Senior strategy, representation and commercial execution connecting global media, adtech and agencies with China outbound growth.",
    nav: [
      { id: "opportunity", label: "Opportunity" }, { id: "audiences", label: "Who we help" },
      { id: "services", label: "What we do" }, { id: "approach", label: "Our approach" },
      { id: "work", label: "Experience" }, { id: "about", label: "About" }, { id: "contact", label: "Contact" },
    ],
    hero: {
      eyebrow: "China outbound. Opened.",
      headline: "Where global media and technology find their path into China outbound growth.",
      body: "curæted paths helps international media owners, adtech platforms and agencies enter, navigate and grow within China’s outbound advertising ecosystem — with senior strategy, trusted local access and hands-on commercial execution.",
      primary: "Start a conversation", secondary: "Explore what we do",
    },
    opportunity: {
      label: "01 / The opportunity", headline: "China outbound is global. Access to it is still local.",
      body: "The opportunity extends across markets, channels and technologies. Reaching it, however, requires more than translated sales materials or occasional introductions. Global companies need a proposition that fits local buying realities, relationships with the right decision-makers, an operating model that works across borders and consistent commercial follow-through.",
      close: "We turn that complexity into a clear route to market.",
    },
    audiences: {
      label: "02 / Who we help", headline: "Built for companies with global capability and China outbound ambition.",
      items: [
        { title: "Global media owners", body: "Build relevance, demand and commercial momentum among Chinese brands and export agencies." },
        { title: "Adtech platforms", body: "Localise the value proposition, partnership model and operating approach needed to win outbound budgets." },
        { title: "Media agencies and specialist partners", body: "Enter the ecosystem with stronger local access, differentiated capabilities and a credible path to growth." },
      ],
    },
    services: {
      label: "03 / What we do", headline: "From market entry strategy to commercial traction.",
      items: [
        { title: "Market intelligence & GTM", body: "Define the opportunity, priority segments, competitive position, offer, pricing logic and route to market." },
        { title: "Commercial representation", body: "Act as a credible local interface, build the pipeline and lead senior conversations with brands, agencies and ecosystem partners." },
        { title: "Partnerships & operating model", body: "Identify the right partners, design responsibilities and workflows, and establish a model that can scale across borders." },
        { title: "Client acquisition & activation", body: "Move from introductions to qualified opportunities, proposals, conversion and coordinated execution." },
      ],
    },
    approach: {
      label: "04 / How we work", headline: "Every market entry needs its own path.",
      intro: "We do not apply a standard playbook and hope it travels. We build backwards from the commercial objective, the local buyer and the realities of delivery.",
      items: [
        { number: "01", title: "Understand", body: "Clarify the ambition, offer, market context, decision-makers and barriers to growth." },
        { number: "02", title: "Design", body: "Build the proposition, route to market, partnership structure and operating plan." },
        { number: "03", title: "Activate", body: "Open relationships, create demand, develop opportunities and coordinate delivery." },
        { number: "04", title: "Scale", body: "Turn early traction into repeatable commercial growth and a durable market presence." },
      ],
    },
    work: {
      label: "05 / Representative work", headline: "Experience built where strategy meets execution.",
      items: [
        { title: "A global audio platform", body: "Defined its China outbound route to market, built senior agency relationships and opened priority advertiser opportunities through a locally relevant commercial proposition." },
        { title: "An international marketing technology company", body: "Designed the China go-to-market and partner operating model for global programmatic capabilities, connecting local business development with international delivery expertise." },
        { title: "Premium global media and growth partners", body: "Connected differentiated media, creator, programmatic and digital growth capabilities with Chinese export agencies and brands, coordinating local commercial access with cross-market execution." },
      ],
      note: "Client and partner identities are intentionally withheld. Relevant examples can be discussed privately.",
    },
    why: {
      label: "06 / Why curæted paths", headline: "Local context. Global fluency. Senior accountability.",
      items: [
        { title: "Local depth", body: "Deep relationships across China’s leading outbound brands, agencies and technology ecosystem." },
        { title: "Global fluency", body: "Experience translating international capabilities into propositions, partnerships and delivery models that work locally." },
        { title: "Senior by design", body: "Experienced leaders stay close to the work — from strategy and relationship building through execution." },
        { title: "Accountable execution", body: "We take ownership of progress, adapt quickly and remain focused on commercial outcomes rather than activity." },
      ],
    },
    about: {
      label: "07 / About", headline: "A small team, deliberately senior.",
      body: "curæted paths brings together Chinese and international executives with leadership experience spanning more than two decades in China, global media and marketing technology. Our network reaches across the institutions shaping China outbound growth, while our boutique model keeps the work direct, flexible and accountable.",
      values: "Trust first. Customer-led. Accountable. Always adapting.",
    },
    contact: {
      label: "08 / Contact", headline: "Let’s open your path to China outbound growth.",
      body: "Tell us where you want to grow, what you bring to the market and where the path currently breaks. We will start with an honest conversation about what it will take to move forward.",
      cta: "Start a conversation", privacy: "Your message opens in your email app. No personal data is stored by this website.",
    },
    footer: "Senior strategy and commercial execution for China outbound growth.",
  },
  zh: {
    lang: "zh-CN",
    title: "醇雅特路径 | 中国品牌出海媒体与增长伙伴",
    description: "连接中国出海品牌与代理商和全球优质媒体、广告技术、创作者及本地市场能力，提供策略、资源与跨市场执行支持。",
    nav: [
      { id: "opportunity", label: "出海机遇" }, { id: "audiences", label: "服务对象" },
      { id: "services", label: "核心能力" }, { id: "approach", label: "合作方式" },
      { id: "work", label: "项目经验" }, { id: "about", label: "关于我们" }, { id: "contact", label: "联系我们" },
    ],
    hero: {
      eyebrow: "连接全球，增长有径", headline: "让全球优质资源，成为中国品牌出海的增长路径。",
      body: "醇雅特路径连接中国出海品牌与代理商和全球优质媒体、广告技术、创作者及本地市场专家，以中国本地服务和全球执行能力，帮助品牌更清晰、更高效地走向世界。",
      primary: "与我们交流", secondary: "了解我们的能力",
    },
    opportunity: {
      label: "01 / 出海机遇", headline: "出海不只是购买流量，更是建立全球增长能力。",
      body: "不同市场拥有不同的消费者、媒体环境和增长逻辑。真正有效的出海，需要优质而差异化的媒体资源，需要了解当地市场的合作伙伴，也需要能够跨市场协调策略、技术与执行的团队。",
      close: "我们帮助您把分散的全球资源，整合成一条清晰、可执行的增长路径。",
    },
    audiences: {
      label: "02 / 服务对象", headline: "为正在走向全球的品牌与代理商而设。",
      items: [
        { title: "中国出海品牌", body: "寻找主流平台之外更具差异化的全球媒体、创作者、广告技术和本地增长伙伴。" },
        { title: "中国出海代理商", body: "希望拓展全球媒体资源、提升跨市场方案能力，并为客户提供更稳定的国际执行。" },
        { title: "出海生态合作伙伴", body: "需要连接全球专业能力、建立合作模式并共同服务中国出海客户。" },
      ],
    },
    services: {
      label: "03 / 核心能力", headline: "从全球资源连接，到跨市场策略与执行。",
      items: [
        { title: "全球优质媒体与创作者资源", body: "连接音频、视频、CTV、内容创作者、程序化及其他差异化国际媒体机会。" },
        { title: "出海策略与媒体规划", body: "基于目标市场、受众和增长任务，设计更符合当地实际的市场进入与媒体策略。" },
        { title: "全球投放与技术执行", body: "通过精选合作伙伴网络，提供包括全球程序化、视频投放及跨市场协调在内的专业执行能力。" },
        { title: "全球增长与 GEO", body: "按项目需要，通过精选合作伙伴网络连接海外市场营销、数字增长和生成式引擎优化（GEO）能力。" },
        { title: "中国本地服务", body: "以中文沟通、本地商务支持和清晰的跨境协作机制，降低国际合作的复杂度。" },
      ],
    },
    approach: {
      label: "04 / 合作方式", headline: "每一次出海，都需要一条适合自己的路径。",
      intro: "我们不复制标准答案。我们从业务目标、目标市场和消费者出发，组合真正适合项目的资源、伙伴与执行方式。",
      items: [
        { number: "01", title: "明确目标", body: "理解品牌、增长任务、目标市场、受众与现实挑战。" },
        { number: "02", title: "设计路径", body: "确定市场策略、媒体组合、合作伙伴与执行机制。" },
        { number: "03", title: "协同落地", body: "连接资源、推进方案、协调各市场团队并保障执行质量。" },
        { number: "04", title: "持续增长", body: "总结有效经验，优化投入，并将单次项目转化为可持续能力。" },
      ],
    },
    work: {
      label: "05 / 代表性项目经验", headline: "连接中国需求与全球能力的实际经验。",
      items: [
        { title: "全球头部音频平台", body: "建立面向中国出海市场的本地商业路径，与头部出海代理商建立高层合作关系，并推动重点广告主机会。" },
        { title: "国际营销科技公司", body: "围绕全球程序化能力设计中国市场进入策略、合作伙伴模式与跨境交付机制。" },
        { title: "全球优质媒体与增长伙伴", body: "将差异化媒体、创作者、程序化及数字增长能力连接至中国出海品牌和代理商，并协调本地商务与全球执行。" },
      ],
      note: "基于保密原则，客户及合作伙伴名称暂不公开。相关经验可在沟通中进一步介绍。",
    },
    why: {
      label: "06 / 为什么选择醇雅特路径", headline: "深耕本地，理解全球，对结果负责。",
      items: [
        { title: "深耕中国出海生态", body: "长期连接中国领先的出海品牌、代理商、媒体与营销科技伙伴。" },
        { title: "真正理解全球市场", body: "能够把国际资源转化为适合中国客户沟通、采购与落地的解决方案。" },
        { title: "资深团队直接参与", body: "从策略、合作关系到执行协调，始终由经验丰富的核心成员推进。" },
        { title: "灵活且对结果负责", body: "根据实际情况快速调整，以业务推进和长期价值为导向。" },
      ],
    },
    about: {
      label: "07 / 关于我们", headline: "小而资深，专注而灵活。",
      body: "醇雅特路径由深耕中国市场二十余年的中外资深媒体、营销与技术管理者共同组成。我们与中国出海生态中的品牌、代理商及全球合作伙伴保持深度联系，并以精品团队模式，为每一个项目提供直接、灵活和负责任的支持。",
      values: "信任为先。以客户为中心。对结果负责。持续创新。",
    },
    contact: {
      label: "08 / 联系我们", headline: "一起找到更清晰的出海增长路径。",
      body: "告诉我们您的目标市场、增长任务，以及目前最需要解决的问题。我们愿意从一次坦诚、务实的交流开始。",
      cta: "与我们交流", privacy: "点击后将在您的邮件应用中打开新邮件。本网站不会存储您的个人信息。",
    },
    footer: "连接中国需求与全球优质媒体、技术及增长能力。",
  },
};
