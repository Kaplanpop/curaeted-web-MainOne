import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

type Language = "en" | "zh";

type NavbarProps = {
  language: Language;
  items: { id: string; label: string }[];
};

const Navbar = ({ language, items }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return () => document.body.classList.remove("menu-open");

    const focusable = Array.from(menuRef.current?.querySelectorAll<HTMLButtonElement>("button:not([disabled])") ?? []);
    const focusTimer = window.setTimeout(() => focusable[0]?.focus(), 100);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        requestAnimationFrame(() => toggleRef.current?.focus());
        return;
      }

      if (event.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  const switchLanguage = () => {
    const hashId = window.location.hash.slice(1);
    const hashSection = items.some(({ id }) => id === hashId) ? document.getElementById(hashId) : undefined;
    const section = hashSection ?? (window.scrollY < window.innerHeight * 0.65
      ? undefined
      : items
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean)
        .sort((a, b) => Math.abs(a!.getBoundingClientRect().top) - Math.abs(b!.getBoundingClientRect().top))[0]);
    const target = language === "en" ? "/zh" : "/";
    window.location.assign(`${target}${section ? `#${section.id}` : ""}`);
  };

  const goTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) window.scrollTo(0, target.getBoundingClientRect().top + window.scrollY);
    setOpen(false);
  };

  return (
    <header className={`site-header ${scrolled || open ? "is-scrolled" : ""}`}>
      <a href={language === "en" ? "/" : "/zh"} className="brand-lockup" aria-label={language === "en" ? "curæted paths home" : "醇雅特路径首页"}>
        <span className="brand-mark" aria-hidden="true">
          <img className="brand-mark-white" src="/curaeted-mark-white.png" alt="" />
          <img className="brand-mark-black" src="/curaeted-mark-black.png" alt="" />
        </span>
        <span>{language === "en" ? "curæted paths" : "醇雅特路径"}</span>
      </a>

      <nav className="desktop-nav" aria-label={language === "en" ? "Primary navigation" : "主导航"}>
        {items.map((item) => <button key={item.id} onClick={() => goTo(item.id)}>{item.label}</button>)}
      </nav>

      <div className="header-actions">
        <button className="language-switch" onClick={switchLanguage} aria-label={language === "en" ? "切换至中文" : "Switch to English"}>
          {language === "en" ? "中文" : "EN"}
        </button>
        <button
          ref={toggleRef}
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={language === "en" ? (open ? "Close menu" : "Open menu") : (open ? "关闭菜单" : "打开菜单")}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div ref={menuRef} id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
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
