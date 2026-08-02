import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Send, Globe } from "lucide-react";
import { useLenis } from "lenis/react";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "../../data/translations";

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const lenis = useLenis();
  const t = TRANSLATIONS[language].nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { name: t.home, href: "#hero" },
    { name: t.about, href: "#about" },
    { name: t.skills, href: "#skills" },
    { name: t.projects, href: "#projects" },
    { name: t.education, href: "#education" },
    { name: t.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      if (lenis) {
        lenis.scrollTo(targetEl, { offset: -72 });
      } else {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className="navbar-fixed-header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "72px",
        zIndex: 1000,
        transform: "translate3d(0, 0, 0)",
        WebkitTransform: "translate3d(0, 0, 0)",
        backgroundColor:
          isScrolled || mobileMenuOpen ? "var(--nav-bg)" : "transparent",
        backdropFilter: isScrolled || mobileMenuOpen ? "blur(12px)" : "none",
        WebkitBackdropFilter:
          isScrolled || mobileMenuOpen ? "blur(12px)" : "none",
        borderBottom:
          isScrolled || mobileMenuOpen
            ? "1px solid var(--border-subtle)"
            : "1px solid transparent",
        transition:
          "background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "var(--text-main)",
            fontWeight: 600,
            fontSize: "1.2rem",
            fontFamily: "var(--font-heading)",
          }}
        >
          <span
            style={{
              fontSize: "1.4rem",
              fontWeight: 700,
              fontFamily: "var(--font-heading)",
              letterSpacing: "-0.02em",
            }}
          >
            <span className="text-gradient-blue">Ilham</span>
            <span style={{ color: "var(--color-garnet)", marginLeft: "2px" }}>
              .
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
          className="desktop-nav"
        >
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              listStyle: "none",
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`nav-link-hover${isActive ? " active" : ""}`}
                    style={{
                      textDecoration: "none",
                      fontSize: "0.92rem",
                      fontWeight: isActive ? 600 : 400,
                      color: isActive
                        ? "var(--color-blue)"
                        : "var(--text-muted)",
                      transition: "color 0.2s ease",
                      padding: "6px 0",
                      display: "inline-block",
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Quick Hire Me CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="btn btn-primary"
            style={{ padding: "8px 18px", fontSize: "0.85rem" }}
          >
            <Send size={14} /> {t.hireMe}
          </a>

          {/* Language EN/ID Toggle Pill */}
          <button
            onClick={toggleLanguage}
            className="btn-icon"
            title={`Switch to ${language === "id" ? "English" : "Bahasa Indonesia"}`}
            aria-label="Toggle Language"
            style={{
              fontWeight: 700,
              fontSize: "0.8rem",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              padding: "0 10px",
              width: "auto",
            }}
          >
            <Globe size={15} style={{ color: "var(--color-blue)" }} />
            <span>{language.toUpperCase()}</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="btn-icon"
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun size={19} style={{ color: "#fbbf24" }} />
            ) : (
              <Moon size={19} style={{ color: "var(--color-blue)" }} />
            )}
          </button>
        </nav>

        {/* Mobile Hamburger Button & Controls */}
        <div style={{ display: "none" }} className="mobile-nav-toggle">
          {/* Mobile Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="btn-icon"
            style={{
              marginRight: "6px",
              fontWeight: 700,
              fontSize: "0.78rem",
              width: "auto",
              padding: "0 8px",
            }}
            aria-label="Toggle Language"
          >
            <Globe
              size={14}
              style={{ color: "var(--color-blue)", marginRight: "2px" }}
            />
            {language.toUpperCase()}
          </button>
          <button
            onClick={toggleTheme}
            className="btn-icon"
            style={{ marginRight: "8px" }}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun size={18} style={{ color: "#fbbf24" }} />
            ) : (
              <Moon size={18} style={{ color: "var(--color-blue)" }} />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-icon"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "var(--nav-bg)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderBottom: "1px solid var(--border-subtle)",
            padding: "1.25rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            animation: "fadeIn 0.2s ease",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                textDecoration: "none",
                color:
                  activeSection === link.href.substring(1)
                    ? "var(--color-blue)"
                    : "var(--text-main)",
                fontWeight: 500,
                fontSize: "1rem",
                padding: "8px 0",
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="btn btn-primary"
            style={{ width: "100%", marginTop: "0.5rem" }}
          >
            <Send size={15} /> Hire Me
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
            align-items: center;
          }
        }
      `}</style>
    </header>
  );
};
