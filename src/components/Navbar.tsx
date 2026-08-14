import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

type Language = "en" | "zh";

type NavbarProps = {
  language: Language;
  items: { id: string; label: string }[];
};

const Navbar = ({ language, items }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const switchLanguage = () => {
    const section = items
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)
      .sort((a, b) => Math.abs(a!.getBoundingClientRect().top) - Math.abs(b!.getBoundingClientRect().top))[0];
    const target = language === "en" ? "/zh" : "/";
    window.location.assign(`${target}${section ? `#${section.id}` : ""}`);
  };

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className={`site-header ${scrolled || open ? "is-scrolled" : ""}`}>
      <a href={language === "en" ? "/" : "/zh"} className="brand-lockup" aria-label={language === "en" ? "curæted paths home" : "醇雅特路径首页"}>
        <img src="/curaeted-mark.svg" alt="" />
        <span>{language === "en" ? "curæted paths" : "醇雅特路径"}</span>
      </a>

      <nav className="desktop-nav" aria-label={language === "en" ? "Primary navigation" : "主导航"}>
        {items.map((item) => <button key={item.id} onClick={() => goTo(item.id)}>{item.label}</button>)}
      </nav>

      <div className="header-actions">
        <button className="language-switch" onClick={switchLanguage} aria-label={language === "en" ? "切换至中文" : "Switch to English"}>
          {language === "en" ? "中文" : "EN"}
        </button>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`}>
        <nav aria-label={language === "en" ? "Mobile navigation" : "移动端导航"}>
          {items.map((item, index) => (
            <button key={item.id} onClick={() => goTo(item.id)}>
              <span>{String(index + 1).padStart(2, "0")}</span>{item.label}
            </button>
          ))}
        </nav>
        <button className="mobile-language" onClick={switchLanguage}>{language === "en" ? "中文版本" : "English version"}</button>
      </div>
    </header>
  );
};

export default Navbar;
