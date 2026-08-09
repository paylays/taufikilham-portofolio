import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ExternalLink, Terminal, Sparkles } from "lucide-react";
import { useLenis } from "lenis/react";
import type { Project } from "../data/portfolioData";
import { GithubIcon } from "./SocialIcons";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  const lenis = useLenis();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, lenis]);

  if (!project) return null;

  return createPortal(
    <div
      data-lenis-prevent
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        backgroundColor: "var(--modal-overlay)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        animation: "fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      onClick={onClose}
    >
      <div
        data-lenis-prevent
        className="glass-card"
        style={{
          width: "100%",
          maxWidth: "760px",
          maxHeight: "88vh",
          overflowY: "auto",
          backgroundColor: "var(--bg-card)",
          position: "relative",
          padding: "0",
          boxShadow: "var(--shadow-lg)",
          border: "1px solid var(--border-subtle)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Cover Image & Sharp Close Button */}
        <div
          style={{ position: "relative", height: "260px", overflow: "hidden", borderBottom: "1px solid var(--border-subtle)" }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, var(--bg-card) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)",
            }}
          />

          {/* Sharp Close Button */}
          <button
            onClick={onClose}
            className="btn-icon"
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              backgroundColor: "var(--bg-card)",
              color: "var(--text-main)",
              border: "1px solid var(--border-subtle)",
              width: "36px",
              height: "36px",
              cursor: "pointer",
            }}
            aria-label="Close Modal"
          >
            <X size={18} />
          </button>

          {/* Title Overlay in Image Cover */}
          <div
            style={{
              position: "absolute",
              bottom: "1.5rem",
              left: "2rem",
              right: "2rem",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
                fontWeight: 700,
                color: "#ffffff",
                fontFamily: "var(--font-heading)",
                letterSpacing: "-0.01em",
                textShadow: "0 2px 10px rgba(0,0,0,0.6)",
              }}
            >
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Content Body */}
        <div
          style={{
            padding: "2rem 2.25rem 2.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {/* Tech Stack Sharp Pills Bar */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--text-dim)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginRight: "4px",
                fontFamily: "var(--font-mono)",
              }}
            >
              TECH STACK:
            </span>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "4px 10px",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  backgroundColor: "var(--color-blue-glow)",
                  color: "var(--color-blue)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Detailed Overview Paragraph */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <h3
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "var(--color-blue)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontFamily: "var(--font-mono)",
              }}
            >
              Project Overview
            </h3>
            <p
              style={{
                color: "var(--text-main)",
                fontSize: "0.98rem",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              {project.fullDescription}
            </p>
          </div>

          {/* Problem & Objective Card — Editorial Sharp Box */}
          <div
            style={{
              padding: "1.25rem 1.5rem",
              backgroundColor: "var(--bg-surface)",
              borderLeft: "3px solid var(--color-garnet)",
              borderTop: "1px solid var(--border-subtle)",
              borderRight: "1px solid var(--border-subtle)",
              borderBottom: "1px solid var(--border-subtle)",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "var(--color-garnet)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontFamily: "var(--font-mono)",
              }}
            >
              Problem & Objective
            </span>
            <p
              style={{
                fontSize: "0.92rem",
                color: "var(--text-muted)",
                lineHeight: 1.65,
                fontWeight: 400,
              }}
            >
              {project.problemStatement}
            </p>
          </div>

          {/* Key Features Section */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Sparkles size={17} style={{ color: "var(--color-blue)" }} />
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-heading)",
                }}
              >
                Key Features & Capabilities
              </h3>
            </div>

            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                paddingLeft: "1.25rem",
                margin: 0,
              }}
            >
              {project.keyFeatures.map((feature, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "0.92rem",
                    color: "var(--text-main)",
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering & Architecture Highlights */}
          {project.technicalChallenges.length > 0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <Terminal size={17} style={{ color: "var(--color-garnet)" }} />
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Engineering & Architecture Highlights
                </h3>
              </div>

              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  paddingLeft: "1.25rem",
                  margin: 0,
                }}
              >
                {project.technicalChallenges.map((challenge, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                      fontWeight: 400,
                    }}
                  >
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Footer Action Toolbar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              paddingTop: "1.25rem",
              borderTop: "1px solid var(--border-subtle)",
              flexWrap: "wrap",
            }}
          >
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ padding: "10px 22px" }}
              >
                Live Project <ExternalLink size={16} />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
              style={{ padding: "10px 22px" }}
            >
              GitHub Repository <GithubIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};
