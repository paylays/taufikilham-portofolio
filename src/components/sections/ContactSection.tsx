import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, Copy, Check, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

export const ContactSection: React.FC = () => {
  const { email, phone, location } = PORTFOLIO_DATA.personalInfo;
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].contact;

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: mainRef, isVisible: mainVisible } = useScrollReveal({ threshold: 0.1 });

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) { setStatus('error'); return; }
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-block">
      {/* Section Label */}
      <div
        ref={headerRef}
        style={{
          marginBottom: '2rem',
          opacity: headerVisible ? undefined : 0,
          animation: headerVisible ? 'slideUpFade 0.6s cubic-bezier(0.16,1,0.3,1) both' : 'none',
        }}
      >
        <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-garnet)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {t.subtitle}
        </span>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 600, marginTop: '0.3rem' }}>
          {t.titleMain} <span className="text-gradient-blue">{t.titleHighlight}</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '540px', marginTop: '0.4rem', fontWeight: 300, fontSize: '0.95rem' }}>
          {t.desc}
        </p>
      </div>

      <div
        ref={mainRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          opacity: mainVisible ? undefined : 0,
          animation: mainVisible ? 'slideUpFade 0.65s cubic-bezier(0.16,1,0.3,1) both' : 'none',
        }}
      >
        {/* Quick Contact Info Container */}
        <div className="contact-info-container">
          {/* Email */}
          <div className="contact-info-item">
            <Mail size={15} style={{ color: 'var(--color-blue)', flexShrink: 0 }} />
            <div className="contact-info-text">
              <span className="contact-info-label">{t.emailLabel}</span>
              <a href={`mailto:${email}`} className="contact-info-val">{email}</a>
            </div>
            <button onClick={() => handleCopy(email, 'Email')} className="btn-icon copy-btn" title="Copy">
              {copiedField === 'Email' ? <Check size={13} style={{ color: '#22c55e' }} /> : <Copy size={13} />}
            </button>
          </div>

          {/* Phone */}
          <div className="contact-info-item">
            <Phone size={15} style={{ color: '#22c55e', flexShrink: 0 }} />
            <div className="contact-info-text">
              <span className="contact-info-label">{t.phoneLabel}</span>
              <a href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="contact-info-val">{phone}</a>
            </div>
            <button onClick={() => handleCopy(phone, 'Phone')} className="btn-icon copy-btn" title="Copy">
              {copiedField === 'Phone' ? <Check size={13} style={{ color: '#22c55e' }} /> : <Copy size={13} />}
            </button>
          </div>

          {/* Location */}
          <div className="contact-info-item">
            <MapPin size={15} style={{ color: 'var(--color-garnet)', flexShrink: 0 }} />
            <div className="contact-info-text">
              <span className="contact-info-label">{t.locationLabel}</span>
              <span className="contact-info-val">{location}</span>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="glass-card contact-form-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem', paddingBottom: '0.85rem', borderBottom: '1px solid var(--border-subtle)' }}>
            <MessageSquare size={17} style={{ color: 'var(--color-blue)' }} />
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{t.formTitle}</h3>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 300 }}>{t.formSubtitle}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }} className="contact-form-row">
              {[
                { key: 'name', label: t.nameLabel, type: 'text', placeholder: t.namePlaceholder },
                { key: 'email', label: t.emailFieldLabel, type: 'email', placeholder: t.emailPlaceholder },
              ].map(field => (
                <div key={field.key} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label style={{ fontSize: '0.82rem', fontWeight: 500 }}>{field.label}</label>
                  <input
                    type={field.type}
                    value={(formData as Record<string, string>)[field.key]}
                    onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                    placeholder={field.placeholder}
                    style={{ padding: '9px 12px', border: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-surface)', color: 'var(--text-main)', fontSize: '0.88rem', outline: 'none', fontFamily: 'inherit' }}
                  />
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '0.82rem', fontWeight: 500 }}>{t.subjectLabel}</label>
              <input
                type="text"
                value={formData.subject}
                onChange={e => setFormData({ ...formData, subject: e.target.value })}
                placeholder={t.subjectPlaceholder}
                style={{ padding: '9px 12px', border: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-surface)', color: 'var(--text-main)', fontSize: '0.88rem', outline: 'none', fontFamily: 'inherit' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '0.82rem', fontWeight: 500 }}>{t.messageLabel}</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                placeholder={t.messagePlaceholder}
                style={{ padding: '9px 12px', border: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-surface)', color: 'var(--text-main)', fontSize: '0.88rem', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }}
              />
            </div>

            {status === 'error' && (
              <div style={{ padding: '9px 12px', backgroundColor: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#ef4444', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertCircle size={15} /> {t.errorMsg}
              </div>
            )}
            {status === 'success' && (
              <div style={{ padding: '9px 12px', backgroundColor: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={15} /> {t.successMsg}
              </div>
            )}

            <button type="submit" className="btn btn-primary contact-submit-btn" disabled={status === 'submitting'} style={{ padding: '10px 20px', marginTop: '0.2rem', fontSize: '0.88rem', alignSelf: 'flex-start' }}>
              {status === 'submitting' ? t.sendingBtn : <><Send size={15} /> {t.sendBtn}</>}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        /* Desktop styles for contact info container */
        .contact-info-container {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .contact-info-item {
          flex: 1 1 200px;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1rem;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
        }
        .contact-info-text {
          min-width: 0;
          flex: 1;
        }
        .contact-info-label {
          font-size: 0.7rem;
          color: var(--text-dim);
          display: block;
          font-weight: 300;
        }
        .contact-info-val {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-main);
          text-decoration: none;
          word-break: break-all;
        }
        .copy-btn {
          width: 28px !important;
          height: 28px !important;
          flex-shrink: 0;
        }
        .contact-form-card {
          padding: 1.75rem 2rem;
        }

        /* Mobile specific layout optimizations */
        @media (max-width: 600px) {
          .contact-info-container {
            flex-direction: column;
            gap: 0;
            background: var(--bg-card);
            border: 1px solid var(--border-subtle);
          }
          .contact-info-item {
            flex: unset;
            border: none;
            border-bottom: 1px solid var(--border-subtle);
            padding: 0.65rem 0.85rem;
            background: transparent;
          }
          .contact-info-item:last-child {
            border-bottom: none;
          }
          .contact-form-row {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
          .contact-form-card {
            padding: 1.15rem 1rem !important;
          }
          .contact-submit-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
};
