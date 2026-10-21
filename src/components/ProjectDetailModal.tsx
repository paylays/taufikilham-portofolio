import React, { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { X, ArrowUpRight } from "lucide-react";
import type { Project } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { TRANSLATIONS } from "../data/translations";
import { LazyImage } from "./LazyImage";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].project;
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isOpen = project !== null;

  // Move focus into the dialog on open and hand it back to the trigger on close
  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    return () => previouslyFocused?.focus();
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab" || !dialogRef.current) return;

      // Keep Tab cycling inside the dialog
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const focusInside = dialogRef.current.contains(document.activeElement);
      if (e.shiftKey && (document.activeElement === first || !focusInside)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (document.activeElement === last || !focusInside)) {
        e.preventDefault();
        first.focus();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <div>
            <p className={`entry-tag${project.isAward ? " entry-tag--award" : ""}`}>{project.tag}</p>
            <h2 id={titleId} className="modal-title">{project.title}</h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="icon-button modal-close"
            onClick={onClose}
            aria-label={t.close}
          >
            <X size={20} />
          </button>
        </div>

        {project.image && (
          // The frame uses the 1857 by 1030 ratio most screenshots share; other ratios are trimmed from the bottom (.modal-image img in index.css)
          <LazyImage
            src={project.image}
            alt={project.title}
            width={1857}
            height={1030}
            className="modal-image"
            loadingText={t.imageLoading}
            errorText={t.imageError}
          />
        )}

        <dl className="modal-facts">
          {project.role && (
            <div>
              <dt>{t.role}</dt>
              <dd>{project.role}</dd>
            </div>
          )}
          <div>
            <dt>{t.stack}</dt>
            <dd>{project.stack.join(", ")}</dd>
          </div>
        </dl>

        <p className="modal-description">{project.description}</p>

        {project.problem && (
          <>
            <h3>{t.problem}</h3>
            <p>{project.problem}</p>
          </>
        )}

        <h3>{t.features}</h3>
        <ul>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        {project.notes.length > 0 && (
          <>
            <h3>{t.notes}</h3>
            <ul>
              {project.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </>
        )}

        <div className="entry-links">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-link">
              {t.openLive} <ArrowUpRight size={14} />
            </a>
          )}
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-link">
            {t.openCode} <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>,
    document.body,
  );
};
