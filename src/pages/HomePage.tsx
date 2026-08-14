import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { content, Language } from "@/content/siteContent";

const ensureMeta = (selector: string, attributes: Record<string, string>) => {
  let node = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (!node) {
    node = document.createElement(selector.startsWith("link") ? "link" : "meta");
    document.head.appendChild(node);
  }
  Object.entries(attributes).forEach(([key, value]) => node!.setAttribute(key, value));
};

const HomePage = ({ language }: { language: Language }) => {
  const copy = content[language];
  const rootRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "", website: "" });

  useEffect(() => {
    document.documentElement.lang = copy.lang;
    document.title = copy.title;
    ensureMeta('meta[name="description"]', { name: "description", content: copy.description });
    ensureMeta('meta[property="og:title"]', { property: "og:title", content: copy.title });
    ensureMeta('meta[property="og:description"]', { property: "og:description", content: copy.description });
    ensureMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    ensureMeta('link[rel="canonical"]', { rel: "canonical", href: `https://curaetedchina.com${language === "zh" ? "/zh" : "/"}` });
    ensureMeta('link[hreflang="en"]', { rel: "alternate", hreflang: "en", href: "https://curaetedchina.com/" });
    ensureMeta('link[hreflang="zh-CN"]', { rel: "alternate", hreflang: "zh-CN", href: "https://curaetedchina.com/zh" });
    ensureMeta('link[hreflang="x-default"]', { rel: "alternate", hreflang: "x-default", href: "https://curaetedchina.com/" });

    const hash = window.location.hash.slice(1);
    if (hash) requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView());
  }, [copy, language]);

  useEffect(() => {
    const nodes = rootRef.current?.querySelectorAll(".reveal") ?? [];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [language]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (form.website) return;
    const subject = language === "en" ? `China outbound conversation — ${form.company || form.name}` : `出海增长交流 — ${form.company || form.name}`;
    const body = language === "en"
      ? `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n\n${form.message}`
      : `姓名：${form.name}\n公司：${form.company}\n邮箱：${form.email}\n\n${form.message}`;
    window.location.href = `mailto:info@curaetedchina.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div ref={rootRef} className={`site ${language === "zh" ? "is-zh" : ""}`}>
      <Navbar language={language} items={copy.nav} />
      <main>
        <section id="top" className="hero dark-section">
          <div className="route-canvas" aria-hidden="true"><span /><span /><span /></div>
          <div className="hero-inner">
            <p className="eyebrow reveal">{copy.hero.eyebrow}</p>
            <h1 className="reveal">{copy.hero.headline}</h1>
            <div className="hero-lower reveal">
              <p>{copy.hero.body}</p>
              <div className="hero-actions">
                <a href="#contact" className="button button-light">{copy.hero.primary}<ArrowUpRight /></a>
                <a href="#services" className="text-link">{copy.hero.secondary}<ArrowDown /></a>
              </div>
            </div>
          </div>
          <div className="hero-index" aria-hidden="true"><span>BEIJING</span><span>39.9042° N</span><span>116.4074° E</span></div>
        </section>

        <section id="opportunity" className="editorial-section opportunity-section">
          <div className="section-label reveal">{copy.opportunity.label}</div>
          <div className="opportunity-grid">
            <h2 className="reveal">{copy.opportunity.headline}</h2>
            <div className="body-column reveal"><p>{copy.opportunity.body}</p><strong>{copy.opportunity.close}</strong></div>
          </div>
          <div className="crossing-line" aria-hidden="true"><img src="/curaeted-mark.svg" alt="" /></div>
        </section>

        <section id="audiences" className="editorial-section warm-section">
          <div className="section-label reveal">{copy.audiences.label}</div>
          <h2 className="section-heading reveal">{copy.audiences.headline}</h2>
          <div className="three-column-list">
            {copy.audiences.items.map((item, index) => (
              <article className="reveal" key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>
            ))}
          </div>
        </section>

        <section id="services" className="services-section dark-section">
          <div className="section-label reveal">{copy.services.label}</div>
          <h2 className="section-heading reveal">{copy.services.headline}</h2>
          <div className="service-list">
            {copy.services.items.map((item, index) => (
              <article className="reveal" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.body}</p><ArrowUpRight aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section id="approach" className="editorial-section approach-section">
          <div className="section-label reveal">{copy.approach.label}</div>
          <div className="approach-intro"><h2 className="reveal">{copy.approach.headline}</h2><p className="reveal">{copy.approach.intro}</p></div>
          <div className="path-list">
            <div className="path-line" aria-hidden="true" />
            {copy.approach.items.map((item) => (
              <article className="reveal" key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></article>
            ))}
          </div>
        </section>

        <section id="work" className="editorial-section work-section warm-section">
          <div className="section-label reveal">{copy.work.label}</div>
          <h2 className="section-heading reveal">{copy.work.headline}</h2>
          <div className="case-list">
            {copy.work.items.map((item, index) => (
              <article className="reveal" key={item.title}><span>CASE {String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.body}</p></article>
            ))}
          </div>
          <p className="proof-note reveal">{copy.work.note}</p>
        </section>

        <section className="why-section dark-section">
          <div className="section-label reveal">{copy.why.label}</div>
          <h2 className="section-heading reveal">{copy.why.headline}</h2>
          <div className="why-grid">
            {copy.why.items.map((item, index) => (
              <article className="reveal" key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>
            ))}
          </div>
        </section>

        <section id="about" className="editorial-section about-section">
          <div className="section-label reveal">{copy.about.label}</div>
          <div className="about-grid">
            <div className="about-mark reveal"><img src="/curaeted-mark.svg" alt="" /></div>
            <div><h2 className="reveal">{copy.about.headline}</h2><p className="about-copy reveal">{copy.about.body}</p><p className="values reveal">{copy.about.values}</p></div>
          </div>
        </section>

        <section id="contact" className="contact-section dark-section">
          <div className="section-label reveal">{copy.contact.label}</div>
          <div className="contact-grid">
            <div><h2 className="reveal">{copy.contact.headline}</h2><p className="reveal">{copy.contact.body}</p><a className="email-link reveal" href="mailto:info@curaetedchina.com">info@curaetedchina.com<ArrowUpRight /></a></div>
            <form className="contact-form reveal" onSubmit={submit}>
              <label><span>{language === "en" ? "Name" : "姓名"}</span><input required autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
              <label><span>{language === "en" ? "Company" : "公司"}</span><input autoComplete="organization" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} /></label>
              <label><span>{language === "en" ? "Email" : "邮箱"}</span><input required type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
              <label><span>{language === "en" ? "What would you like to unlock?" : "您希望解决什么问题？"}</span><textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></label>
              <label className="honeypot" hidden aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} /></label>
              <button className="button button-light" type="submit">{copy.contact.cta}<ArrowUpRight /></button>
              <small>{copy.contact.privacy}</small>
            </form>
          </div>
          <footer>
            <a href="#top" className="footer-brand"><img src="/curaeted-mark.svg" alt="" /><span>{language === "en" ? "curæted paths" : "醇雅特路径"}</span></a>
            <p>{copy.footer}</p><p>{language === "en" ? "Beijing, China" : "中国 · 北京"}</p>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
