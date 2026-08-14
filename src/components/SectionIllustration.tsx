import { CSSProperties, SVGProps } from "react";

export type IllustrationType =
  | "hero"
  | "opportunity"
  | "audiences"
  | "services"
  | "approach"
  | "work"
  | "why"
  | "about";

type SectionIllustrationProps = {
  type: IllustrationType;
  className?: string;
};

type DelayedProps<T> = SVGProps<T> & { delay?: number };

const drawStyle = (delay = 0) => ({ "--draw-delay": `${delay}ms` }) as CSSProperties;

const InkPath = ({ delay, ...props }: DelayedProps<SVGPathElement>) => (
  <path
    {...props}
    data-draw=""
    pathLength={1}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    vectorEffect="non-scaling-stroke"
    style={drawStyle(delay)}
  />
);

const InkLine = ({ delay, ...props }: DelayedProps<SVGLineElement>) => (
  <line
    {...props}
    data-draw=""
    pathLength={1}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    vectorEffect="non-scaling-stroke"
    style={drawStyle(delay)}
  />
);

const InkPolyline = ({ delay, ...props }: DelayedProps<SVGPolylineElement>) => (
  <polyline
    {...props}
    data-draw=""
    pathLength={1}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    vectorEffect="non-scaling-stroke"
    style={drawStyle(delay)}
  />
);

const InkRect = ({ delay, ...props }: DelayedProps<SVGRectElement>) => (
  <rect
    {...props}
    data-draw=""
    pathLength={1}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    vectorEffect="non-scaling-stroke"
    style={drawStyle(delay)}
  />
);

const InkCircle = ({ delay, ...props }: DelayedProps<SVGCircleElement>) => (
  <circle
    {...props}
    data-draw=""
    pathLength={1}
    fill="none"
    stroke="currentColor"
    vectorEffect="non-scaling-stroke"
    style={drawStyle(delay)}
  />
);

const InkEllipse = ({ delay, ...props }: DelayedProps<SVGEllipseElement>) => (
  <ellipse
    {...props}
    data-draw=""
    pathLength={1}
    fill="none"
    stroke="currentColor"
    vectorEffect="non-scaling-stroke"
    style={drawStyle(delay)}
  />
);

const Protagonist = ({ x, y, scale = 1, facing = 1, delay = 0 }: { x: number; y: number; scale?: number; facing?: 1 | -1; delay?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${facing * scale} ${scale})`}>
    <InkCircle cx="0" cy="-36" r="6" delay={delay} />
    <InkPath d="M-4-28c-5 8-7 20-6 34l-3 25M4-28c6 9 8 22 7 34l3 25M-8-14c6 5 12 8 20 9M-3-25l11 24M-10 31h8M7 31h8" delay={delay + 100} />
  </g>
);

const HeroIllustration = () => (
  <>
    <InkPolyline points="12,139 48,125 81,132 112,105 151,113 178,89 217,101 251,78 286,87 323,61 353,73 386,48 421,63 468,42" delay={0} />
    <InkPolyline points="11,166 53,154 91,160 126,139 164,148 199,125 236,136 272,111 309,123 345,96 386,109 431,81 469,91" delay={120} />
    <InkPath d="M14 197C86 196 113 176 163 175c66-1 82 33 143 24 56-8 76-56 161-62" delay={250} />
    <InkLine x1="13" y1="202" x2="468" y2="202" delay={360} />
    <InkLine x1="31" y1="215" x2="451" y2="215" delay={420} />
    <InkLine x1="48" y1="202" x2="48" y2="232" delay={480} />
    <InkLine x1="430" y1="202" x2="430" y2="232" delay={520} />
    <InkLine x1="86" y1="167" x2="86" y2="202" delay={560} />
    <InkLine x1="136" y1="160" x2="136" y2="202" delay={600} />
    <InkLine x1="356" y1="137" x2="356" y2="202" delay={640} />
    <Protagonist x={300} y={199} scale={0.86} facing={1} delay={430} />
    <InkCircle cx="163" cy="175" r="3.5" delay={700} />
    <InkCircle cx="306" cy="199" r="3.5" delay={760} />
    <InkCircle cx="416" cy="148" r="3.5" delay={820} />
  </>
);

const OpportunityIllustration = () => (
  <>
    <InkPath d="M18 28h153l31 44v143H18zM18 58l153-3M42 83h86M42 108h104M42 133h72M42 158h96" delay={0} />
    <InkPath d="M462 28H309l-31 44v143h184zM462 58l-153-3M438 83h-86M438 108h-104M438 133h-72M438 158h-96" delay={120} />
    <InkLine x1="202" y1="72" x2="278" y2="72" delay={200} />
    <InkLine x1="202" y1="215" x2="278" y2="215" delay={240} />
    <InkPath d="M18 231C117 213 164 222 222 205c47-14 70-45 102-66 37-25 76-30 138-27" delay={330} />
    <InkLine x1="67" y1="28" x2="67" y2="14" delay={440} />
    <InkLine x1="414" y1="28" x2="414" y2="14" delay={480} />
    <Protagonist x={157} y={218} scale={0.82} facing={1} delay={500} />
    <InkCircle cx="222" cy="205" r="3.5" delay={680} />
  </>
);

const AudiencesIllustration = () => (
  <>
    <InkEllipse cx="240" cy="166" rx="128" ry="48" delay={0} />
    <InkLine x1="126" y1="166" x2="126" y2="213" delay={100} />
    <InkLine x1="354" y1="166" x2="354" y2="213" delay={140} />
    <InkRect x="196" y="135" width="88" height="50" rx="2" transform="rotate(-4 240 160)" delay={220} />
    <InkPath d="M207 156c15-7 27 7 42-1 10-5 17-12 26-8M216 170l18-8 16 8 22-11" delay={320} />
    <InkCircle cx="236" cy="74" r="7" delay={360} />
    <InkPath d="M224 86c-11 12-17 29-16 48M248 86c11 11 17 27 16 48M218 104l-20 29M254 104l21 28" delay={420} />
    <InkCircle cx="114" cy="112" r="7" delay={460} />
    <InkPath d="M104 124c-10 11-14 26-12 46M123 124c10 10 15 25 15 43M103 139l38 10M96 128l-12-13" delay={520} />
    <InkCircle cx="366" cy="112" r="7" delay={560} />
    <InkPath d="M356 124c-10 11-15 26-14 43M375 124c10 10 15 25 13 46M374 140l-36 10M381 128l13-14" delay={620} />
    <InkPath d="M28 221c44-10 85-9 123 2M329 223c39-11 80-12 123-2" delay={720} />
  </>
);

const ServicesIllustration = () => (
  <>
    <InkRect x="65" y="36" width="350" height="188" rx="3" delay={0} />
    <InkRect x="151" y="71" width="84" height="61" rx="2" transform="rotate(-6 193 102)" delay={120} />
    <InkRect x="248" y="74" width="82" height="55" rx="2" transform="rotate(5 289 101)" delay={180} />
    <InkRect x="184" y="146" width="111" height="44" rx="2" delay={240} />
    <InkPath d="M117 184C161 157 177 114 228 111c50-3 49 41 96 34 22-3 35-20 47-43" delay={320} />
    <InkCircle cx="117" cy="184" r="4" delay={420} />
    <InkCircle cx="228" cy="111" r="4" delay={470} />
    <InkCircle cx="324" cy="145" r="4" delay={520} />
    <InkCircle cx="371" cy="102" r="4" delay={570} />
    <InkPath d="M13 96c22 0 43 7 60 20l25 20c7 6 17 5 23-1 4-4 3-11-2-15L95 99M13 75l39 4 43 20" delay={250} />
    <InkPath d="M467 171c-20-3-41 1-61 11l-28 15c-8 4-18 1-22-6-3-5 0-11 6-14l28-16M467 149l-39-2-38 14" delay={360} />
    <InkPath d="M183 36l8-18c4-8 13-11 21-7l15 8M300 36l-7-18c-3-8-12-12-20-8l-14 8" delay={450} />
    <InkLine x1="171" y1="89" x2="216" y2="87" delay={620} />
    <InkLine x1="268" y1="92" x2="312" y2="96" delay={660} />
    <InkLine x1="203" y1="161" x2="276" y2="161" delay={700} />
    <InkLine x1="203" y1="174" x2="252" y2="174" delay={740} />
  </>
);

const ApproachIllustration = () => (
  <>
    <InkPolyline points="24,224 108,224 108,185 194,185 194,139 282,139 282,91 371,91 371,42 456,42" delay={0} />
    <InkPolyline points="24,239 123,239 123,200 209,200 209,154 297,154 297,106 386,106 386,57 456,57" delay={120} />
    <InkLine x1="108" y1="185" x2="123" y2="200" delay={220} />
    <InkLine x1="194" y1="139" x2="209" y2="154" delay={260} />
    <InkLine x1="282" y1="91" x2="297" y2="106" delay={300} />
    <InkLine x1="371" y1="42" x2="386" y2="57" delay={340} />
    <InkPath d="M41 219c43-25 76-12 106-29 30-16 20-43 58-48 38-6 46 17 83-5 40-24 43-56 88-64 25-5 44-1 68-19" delay={400} />
    <InkCircle cx="108" cy="202" r="5" delay={520} />
    <InkCircle cx="194" cy="160" r="5" delay={580} />
    <InkCircle cx="282" cy="125" r="5" delay={640} />
    <InkCircle cx="371" cy="76" r="5" delay={700} />
    <Protagonist x={54} y={218} scale={0.72} facing={1} delay={560} />
    <InkPath d="M318 68l18-24 13 13 19-30M402 31h42M402 22h28" delay={780} />
  </>
);

const WorkIllustration = () => (
  <>
    <InkPath d="M35 80h110l17 17h75v118H35z" delay={0} />
    <InkPath d="M172 46h104l17 16h71v133H172z" delay={100} />
    <InkPath d="M281 93h93l16 15h57v111H281z" delay={200} />
    <InkPath d="M35 103h202M172 70h192M281 116h166" delay={300} />
    <InkRect x="62" y="127" width="86" height="53" rx="2" transform="rotate(-4 105 154)" delay={380} />
    <InkRect x="206" y="94" width="84" height="58" rx="2" transform="rotate(4 248 123)" delay={440} />
    <InkRect x="322" y="142" width="78" height="45" rx="2" transform="rotate(-5 361 164)" delay={500} />
    <InkPath d="M54 203c42 18 68 13 92-4 31-23 48-35 80-24 34 11 44 39 82 30 34-8 51-40 92-38 19 1 33 8 48 18" delay={570} />
    <InkCircle cx="146" cy="199" r="4" delay={680} />
    <InkCircle cx="226" cy="175" r="4" delay={730} />
    <InkCircle cx="308" cy="205" r="4" delay={780} />
    <InkCircle cx="400" cy="167" r="4" delay={830} />
    <InkLine x1="74" y1="144" x2="134" y2="140" delay={620} />
    <InkLine x1="218" y1="113" x2="277" y2="116" delay={660} />
    <InkLine x1="335" y1="157" x2="388" y2="153" delay={700} />
  </>
);

const WhyIllustration = () => (
  <>
    <InkPolyline points="8,137 35,122 62,128 83,104 111,111 136,88 163,100 188,82" delay={0} />
    <InkPolyline points="292,82 318,100 344,88 369,111 397,104 418,128 445,122 472,137" delay={100} />
    <InkPath d="M31 199c77-7 118-38 157-71 30-25 74-25 104 0 39 33 80 64 157 71" delay={200} />
    <InkPath d="M31 211c76-6 122-32 164-61 27-18 63-18 90 0 42 29 88 55 164 61" delay={300} />
    <InkLine x1="92" y1="189" x2="92" y2="221" delay={380} />
    <InkLine x1="388" y1="189" x2="388" y2="221" delay={420} />
    <InkLine x1="152" y1="160" x2="152" y2="221" delay={460} />
    <InkLine x1="328" y1="160" x2="328" y2="221" delay={500} />
    <InkLine x1="31" y1="221" x2="449" y2="221" delay={540} />
    <Protagonist x={213} y={151} scale={0.65} facing={1} delay={560} />
    <Protagonist x={267} y={151} scale={0.65} facing={-1} delay={610} />
    <InkPath d="M12 151h48M420 151h48M12 163h66M402 163h66" delay={720} />
  </>
);

const AboutIllustration = () => (
  <>
    <InkEllipse cx="240" cy="158" rx="142" ry="59" delay={0} />
    <InkLine x1="119" y1="176" x2="109" y2="222" delay={100} />
    <InkLine x1="361" y1="176" x2="371" y2="222" delay={140} />
    <InkRect x="205" y="133" width="68" height="44" rx="2" transform="rotate(-3 239 155)" delay={220} />
    <InkLine x1="219" y1="147" x2="258" y2="145" delay={280} />
    <InkLine x1="219" y1="158" x2="250" y2="157" delay={320} />
    <InkCircle cx="173" cy="151" r="7" delay={360} />
    <InkCircle cx="309" cy="157" r="7" delay={400} />
    <InkCircle cx="140" cy="81" r="8" delay={440} />
    <InkPath d="M126 95c-12 12-17 31-14 54M153 95c12 12 17 31 15 53M125 112l-20 24M154 111l28 26" delay={500} />
    <InkCircle cx="240" cy="58" r="8" delay={540} />
    <InkPath d="M226 72c-12 12-17 29-16 51M254 72c12 12 17 29 16 51M224 90l-28 35M256 90l27 35" delay={600} />
    <InkCircle cx="340" cy="81" r="8" delay={640} />
    <InkPath d="M326 95c-12 12-17 31-14 53M353 95c12 12 17 31 15 54M327 111l-28 26M354 112l21 24" delay={700} />
    <InkCircle cx="240" cy="218" r="8" delay={740} />
    <InkPath d="M226 205c-12-10-17-23-16-39M254 205c12-10 17-23 16-39M225 190l-28-25M255 190l28-25" delay={800} />
    <InkCircle cx="190" cy="166" r="3" delay={840} />
    <InkCircle cx="290" cy="169" r="3" delay={880} />
    <InkPath d="M80 231c44 8 86 8 124 0M276 231c39 8 80 8 124 0" delay={920} />
  </>
);

const scenes: Record<IllustrationType, () => JSX.Element> = {
  hero: HeroIllustration,
  opportunity: OpportunityIllustration,
  audiences: AudiencesIllustration,
  services: ServicesIllustration,
  approach: ApproachIllustration,
  work: WorkIllustration,
  why: WhyIllustration,
  about: AboutIllustration,
};

const SectionIllustration = ({ type, className = "" }: SectionIllustrationProps) => {
  const Scene = scenes[type];

  return (
    <div className={`section-illustration section-illustration--${type} reveal ${className}`.trim()} aria-hidden="true">
      <svg className="section-illustration__svg" viewBox="0 0 480 260" aria-hidden="true" focusable="false">
        <Scene />
      </svg>
    </div>
  );
};

export default SectionIllustration;
