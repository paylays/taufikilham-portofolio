import React, { useState } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  FileCode,
  Layers,
  Send,
} from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "../SocialIcons";
import { MacbookFrame } from "../MacbookFrame";

// Stagger delay helper
const staggerStyle = (
  isVisible: boolean,
  animation: "slideUpFade" | "slideInLeft" | "slideInRight" | "scaleIn",
  delayMs: number,
  durationMs = 680,
): React.CSSProperties => ({
  opacity: isVisible ? undefined : 0,
  animation: isVisible
    ? `${animation} ${durationMs}ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms both`
    : "none",
});

import { useLanguage } from "../../context/LanguageContext";
import { TRANSLATIONS } from "../../data/translations";

export const HeroSection: React.FC = () => {
  const {
    name,
    github,
    linkedin,
    email,
    cvUrl,
    availableForWork,
    role,
    phone,
  } = PORTFOLIO_DATA.personalInfo;
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].hero;
  const [activeTab, setActiveTab] = useState<"profile" | "tech" | "contact">(
    "profile",
  );

  // Hero section content always visible on page load — use CSS animation directly
  const visible = true;

  return (
    <section
      id="hero"
      style={{
        paddingTop: "6.5rem",
        paddingBottom: "5rem",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Dual Aurora Orbs */}
      <div className="aurora-orb-blue" />
      <div className="aurora-orb-garnet" />

      <div
        className="container"
        style={{ width: "100%", position: "relative", zIndex: 2 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column - Staggered entrance per element */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {/* 1. Status Pill Badge — delay 0ms */}
            <div
              style={{
                display: "inline-flex",
                ...staggerStyle(visible, "slideUpFade", 80),
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  backgroundColor: "var(--color-blue-glow)",
                  color: "var(--color-blue)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: availableForWork ? "#22c55e" : "#eab308",
                    boxShadow: availableForWork
                      ? "0 0 6px #22c55e"
                      : "0 0 6px #eab308",
                    animation: "pulse 2s ease-in-out infinite",
                  }}
                />
                {availableForWork ? t.badgeReady : t.badgeFreelance}
              </span>
            </div>

            {/* 2. Headline — delay 180ms */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
                ...staggerStyle(visible, "slideUpFade", 180),
              }}
            >
              <h1
                style={{
                  fontSize: "clamp(2.3rem, 5vw, 3.5rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                {t.greeting} <span className="text-gradient-blue">{name}</span>
              </h1>
              <h2
                style={{
                  fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
                  fontWeight: 500,
                  color: "var(--color-garnet)",
                }}
              >
                {t.role}
              </h2>
            </div>

            {/* 3. Subtitle — delay 310ms */}
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-muted)",
                maxWidth: "560px",
                lineHeight: 1.6,
                fontWeight: 300,
                ...staggerStyle(visible, "slideUpFade", 310),
              }}
            >
              {t.subtitle}
            </p>

            {/* 4. CTA Buttons — delay 440ms */}
            <div
              className="hero-cta-row"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
                marginTop: "0.5rem",
                ...staggerStyle(visible, "slideUpFade", 440),
              }}
            >
              <a href="#projects" className="btn btn-primary">
                {t.exploreBtn} <ArrowRight size={18} />
              </a>
              <a href={cvUrl} download className="btn btn-outline">
                <Download size={18} /> {t.downloadCv}
              </a>
            </div>

            {/* 5. Social Links — delay 560ms */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginTop: "1rem",
                flexWrap: "wrap",
                ...staggerStyle(visible, "slideUpFade", 560),
              }}
            >
              <span
                style={{
                  fontSize: "0.88rem",
                  color: "var(--text-dim)",
                  fontWeight: 400,
                }}
              >
                {t.connect}
              </span>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                title="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${email}`}
                className="btn-icon"
                title="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right Column - MacBook — slide from right, delay 300ms */}
          <div
            className="hero-code-card"
            style={{ ...staggerStyle(visible, "slideInRight", 300, 800) }}
          >
            <MacbookFrame>
              <div
                style={{
                  padding: "1rem 1.25rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  fontWeight: 400,
                  position: "relative",
                  backgroundColor: "var(--bg-card)",
                  minHeight: "260px",
                }}
              >
                {/* Traffic Lights + File Tabs */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.85rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "1px solid var(--border-subtle)",
                    gap: "8px",
                    overflowX: "auto",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: "#ef4444",
                      }}
                    />
                    <span
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: "#eab308",
                      }}
                    />
                    <span
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: "#22c55e",
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", gap: "4px", flexShrink: 0 }}>
                    {(["profile", "tech", "contact"] as const).map((tab) => {
                      const labels = {
                        profile: {
                          icon: <FileCode size={12} />,
                          label: "Profile.tsx",
                          activeColor: "var(--color-blue-glow)",
                          textColor: "var(--color-blue)",
                        },
                        tech: {
                          icon: <Layers size={12} />,
                          label: "Tech.json",
                          activeColor: "var(--color-garnet-glow)",
                          textColor: "var(--color-garnet)",
                        },
                        contact: {
                          icon: <Send size={12} />,
                          label: "Contact.config",
                          activeColor: "rgba(34,197,94,0.15)",
                          textColor: "#22c55e",
                        },
                      };
                      const t = labels[tab];
                      return (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          style={{
                            padding: "4px 10px",
                            borderRadius: "6px",
                            fontSize: "0.73rem",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            backgroundColor:
                              activeTab === tab ? t.activeColor : "transparent",
                            color:
                              activeTab === tab
                                ? t.textColor
                                : "var(--text-dim)",
                            fontWeight: activeTab === tab ? 600 : 400,
                            transition: "all 0.2s ease",
                          }}
                        >
                          {t.icon} {t.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Tab: Profile.tsx */}
                {activeTab === "profile" && (
                  <div
                    style={{
                      color: "var(--text-main)",
                      lineHeight: 1.65,
                      animation: "fadeIn 0.2s ease",
                    }}
                  >
                    <p>
                      <span style={{ color: "var(--color-garnet)" }}>
                        const
                      </span>{" "}
                      <span style={{ color: "var(--color-blue)" }}>
                        developer
                      </span>{" "}
                      = &#123;
                    </p>
                    <p style={{ paddingLeft: "1.2rem" }}>
                      <span style={{ color: "var(--text-muted)" }}>name:</span>{" "}
                      <span style={{ color: "#10b981" }}>'{name}'</span>,
                    </p>
                    <p style={{ paddingLeft: "1.2rem" }}>
                      <span style={{ color: "var(--text-muted)" }}>role:</span>{" "}
                      <span style={{ color: "#10b981" }}>'{role}'</span>,
                    </p>
                    <p style={{ paddingLeft: "1.2rem" }}>
                      <span style={{ color: "var(--text-muted)" }}>
                        passions:
                      </span>{" "}
                      [
                    </p>
                    <p style={{ paddingLeft: "2.4rem", color: "#10b981" }}>
                      'Backend Engineering', 'Scalable APIs', 'Clean
                      Architecture'
                    </p>
                    <p style={{ paddingLeft: "1.2rem" }}>],</p>
                    <p style={{ paddingLeft: "1.2rem" }}>
                      <span style={{ color: "var(--text-muted)" }}>
                        isReadyForWork:
                      </span>{" "}
                      <span style={{ color: "#f59e0b" }}>
                        {availableForWork ? "true" : "false"}
                      </span>
                      ,
                    </p>
                    <p style={{ paddingLeft: "1.2rem" }}>
                      <span style={{ color: "var(--text-muted)" }}>build:</span>{" "}
                      () =&gt;{" "}
                      <span style={{ color: "var(--color-blue)" }}>
                        'Crafting high performance backend systems'
                      </span>
                    </p>
                    <p>&#125;;</p>
                  </div>
                )}

                {/* Tab: Tech.json */}
                {activeTab === "tech" && (
                  <div
                    style={{
                      color: "var(--text-main)",
                      lineHeight: 1.65,
                      animation: "fadeIn 0.2s ease",
                    }}
                  >
                    <p>&#123;</p>
                    <p style={{ paddingLeft: "1.2rem" }}>
                      <span style={{ color: "var(--color-garnet)" }}>
                        "backend"
                      </span>
                      : [<span style={{ color: "#10b981" }}>"Node.js"</span>,{" "}
                      <span style={{ color: "#10b981" }}>"Express"</span>,{" "}
                      <span style={{ color: "#10b981" }}>"REST API"</span>],
                    </p>
                    <p style={{ paddingLeft: "1.2rem" }}>
                      <span style={{ color: "var(--color-garnet)" }}>
                        "database"
                      </span>
                      : [<span style={{ color: "#10b981" }}>"PostgreSQL"</span>,{" "}
                      <span style={{ color: "#10b981" }}>"MongoDB"</span>],
                    </p>
                    <p style={{ paddingLeft: "1.2rem" }}>
                      <span style={{ color: "var(--color-garnet)" }}>
                        "frontend"
                      </span>
                      : [<span style={{ color: "#10b981" }}>"React"</span>,{" "}
                      <span style={{ color: "#10b981" }}>"TypeScript"</span>,{" "}
                      <span style={{ color: "#10b981" }}>"Tailwind"</span>],
                    </p>
                    <p style={{ paddingLeft: "1.2rem" }}>
                      <span style={{ color: "var(--color-garnet)" }}>
                        "workflow"
                      </span>
                      : [<span style={{ color: "#10b981" }}>"Git"</span>,{" "}
                      <span style={{ color: "#10b981" }}>"Vite"</span>,{" "}
                      <span style={{ color: "#10b981" }}>"Docker"</span>]
                    </p>
                    <p>&#125;</p>
                  </div>
                )}

                {/* Tab: Contact.config */}
                {activeTab === "contact" && (
                  <div
                    style={{
                      color: "var(--text-main)",
                      lineHeight: 1.65,
                      animation: "fadeIn 0.2s ease",
                    }}
                  >
                    <p>
                      <span style={{ color: "var(--color-garnet)" }}>
                        export default
                      </span>{" "}
                      &#123;
                    </p>
                    <p style={{ paddingLeft: "1.2rem" }}>
                      <span style={{ color: "var(--text-muted)" }}>email:</span>{" "}
                      <span style={{ color: "#10b981" }}>'{email}'</span>,
                    </p>
                    <p style={{ paddingLeft: "1.2rem" }}>
                      <span style={{ color: "var(--text-muted)" }}>phone:</span>{" "}
                      <span style={{ color: "#10b981" }}>'{phone}'</span>,
                    </p>
                    <p style={{ paddingLeft: "1.2rem" }}>
                      <span style={{ color: "var(--text-muted)" }}>
                        status:
                      </span>{" "}
                      <span style={{ color: "#22c55e" }}>
                        'Open for Opportunities & Hiring'
                      </span>
                    </p>
                    <p>&#125;;</p>
                  </div>
                )}

                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    background:
                      "linear-gradient(135deg, var(--color-blue) 0%, var(--color-garnet) 100%)",
                    color: "#ffffff",
                    padding: "5px 11px",
                    borderRadius: "16px",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  <Sparkles size={12} /> Click Tabs
                </div>
              </div>
            </MacbookFrame>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* Tablet & below: stack to single column */
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          /* Hide MacBook mockup on mobile — hero text takes full focus */
          .hero-code-card { display: none !important; }
        }

        /* Tablet portrait */
        @media (max-width: 768px) {
          #hero {
            padding-top: 6.5rem !important;
            padding-bottom: 4rem !important;
            min-height: unset !important;
          }
          .hero-grid { gap: 2rem !important; }
        }

        /* Mobile */
        @media (max-width: 600px) {
          #hero {
            padding-top: 6rem !important;
            padding-bottom: 3.5rem !important;
          }
          .hero-cta-row {
            flex-direction: column !important;
            width: 100%;
          }
          .hero-cta-row a {
            width: 100% !important;
            justify-content: center !important;
          }
        }

        /* Small mobile */
        @media (max-width: 375px) {
          .hero-grid { gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
};
