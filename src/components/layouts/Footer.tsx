import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

export const Footer: React.FC = () => {
  const { name, github, linkedin, email } = PORTFOLIO_DATA.personalInfo;
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        backgroundColor: "var(--bg-primary)",
        padding: "2.5rem 0",
        transition: "var(--transition-theme)",
      }}
    >
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
      >
        <div
          className="footer-top-row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {/* Left Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                fontFamily: "var(--font-heading)",
              }}
            >
              {name}
            </span>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              {t.roleText}
            </span>
          </div>

          {/* Social Icons */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="btn-icon icon-bounce"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-icon icon-bounce"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={PORTFOLIO_DATA.personalInfo.facebook}
              target="_blank"
              rel="noreferrer"
              className="btn-icon icon-bounce"
              aria-label="Facebook"
            >
              <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>fb</span>
            </a>
            <a
              href={PORTFOLIO_DATA.personalInfo.twitter}
              target="_blank"
              rel="noreferrer"
              className="btn-icon icon-bounce"
              aria-label="X / Twitter"
            >
              <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>𝕏</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="btn-icon icon-bounce"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="btn-icon"
              title="Back to Top"
              style={{
                backgroundColor: "var(--color-blue)",
                color: "#ffffff",
                border: "none",
                marginLeft: "0.5rem",
              }}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="footer-bottom-row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "1.25rem",
            borderTop: "1px solid var(--border-subtle)",
            fontSize: "0.82rem",
            color: "var(--text-dim)",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <p>
            © {new Date().getFullYear()} {name}. {t.rights}
          </p>
          <p style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {t.builtWith}{" "}
            <Heart
              size={14}
              style={{ color: "var(--color-garnet)", flexShrink: 0 }}
            />
          </p>
        </div>
      </div>

      <style>{`
        /* Mobile: center-align footer top row */
        @media (max-width: 600px) {
          .footer-top-row {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center;
          }
          .footer-bottom-row {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center;
            gap: 0.375rem !important;
          }
          footer { padding: 2rem 0 !important; }
        }
        @media (max-width: 375px) {
          footer { padding: 1.75rem 0 !important; }
        }
      `}</style>
    </footer>
  );
};
