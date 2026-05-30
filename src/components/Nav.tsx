"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [dark, setDark] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme") === "escuro";
    setDark(saved);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "sobre", "servicos", "projetos", "processo", "depoimentos", "contato"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "escuro");
      localStorage.setItem("theme", "escuro");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "claro");
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header ref={navRef} className={`nav ${scrolled ? "scrolled" : ""}`} id="nav">
        <a href="#hero" className="brand" aria-label="Letícia Moraes — Design de Interiores">
          <Image
            className="logo-submark"
            src="/assets/submark-com-fundo.png"
            alt="Letícia Moraes"
            width={58}
            height={58}
          />
        </a>
        <nav>
          <ul className="nav-links">
            {["sobre", "servicos", "projetos", "processo"].map((id) => (
              <li key={id}>
                <a href={`#${id}`} className={activeSection === id ? "active" : ""}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
            title={dark ? "Modo claro" : "Modo escuro"}
          >
            {dark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          <a href="#contato" className="nav-cta">Conversar</a>
        </div>
        <button
          className={`nav-burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </header>

      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        {["sobre", "servicos", "projetos", "processo", "depoimentos"].map((id) => (
          <a key={id} href={`#${id}`} onClick={closeMenu}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
        <a href="#contato" className="cta" onClick={closeMenu}>Conversar</a>
      </nav>
    </>
  );
}
