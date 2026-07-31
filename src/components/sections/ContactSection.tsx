import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, Copy, Check, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

export const ContactSection: React.FC = () => {
  const { email, phone, location, github, linkedin, facebook, twitter } = PORTFOLIO_DATA.personalInfo;
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
    <section id="contact" style={{ padding: '5.5rem 0', backgroundColor: 'var(--bg-secondary)', transition: 'var(--transition-theme)', position: 'relative' }}>
      <div className="container">

        {/* Section Header */}
        <div
          ref={headerRef}
          style={{
            textAlign: 'center',
            marginBottom: '3.5rem',
            opacity: headerVisible ? undefined : 0,
            animation: headerVisible ? 'slideUpFade 0.65s cubic-bezier(0.16,1,0.3,1) both' : 'none'
          }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-garnet)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.subtitle}</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.7rem)', fontWeight: 600, marginTop: '0.4rem' }}>
            {t.titleMain} <span className="text-gradient-blue">{t.titleHighlight}</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '540px', margin: '0.5rem auto 0', fontWeight: 300 }}>
            {t.desc}
          </p>
          <div style={{ width: '50px', height: '4px', backgroundColor: 'var(--color-blue)', margin: '12px auto 0', borderRadius: '2px' }} />
        </div>

        {/* Unified Modern Layout Container */}
        <div
          ref={mainRef}
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
            opacity: mainVisible ? undefined : 0,
            animation: mainVisible ? 'slideUpFade 0.75s cubic-bezier(0.16,1,0.3,1) both' : 'none'
          }}
        >
          {/* Top Quick Contact Badges Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.25rem'
            }}
            className="contact-badges-grid"
          >
            {/* Badge 1: Email */}
            <div
              className="glass-card card-hover-blue"
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: 0 }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'var(--color-blue-glow)', color: 'var(--color-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={20} />
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', display: 'block', fontWeight: 300 }}>{t.emailLabel}</span>
                  <a href={`mailto:${email}`} style={{ fontSize: '0.92rem', fontWeight: 500, color: 'var(--text-main)', textDecoration: 'none', wordBreak: 'break-all', display: 'block' }}>
                    {email}
                  </a>
                </div>
              </div>
              <button onClick={() => handleCopy(email, 'Email')} className="btn-icon" title="Copy Email" style={{ flexShrink: 0, width: '36px', height: '36px' }}>
                {copiedField === 'Email' ? <Check size={16} style={{ color: '#22c55e' }} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Badge 2: Phone */}
            <div
              className="glass-card card-hover-garnet"
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: 0 }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'rgba(34,197,94,0.15)', color: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', display: 'block', fontWeight: 300 }}>{t.phoneLabel}</span>
                  <a href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" style={{ fontSize: '0.92rem', fontWeight: 500, color: 'var(--text-main)', textDecoration: 'none' }}>
                    {phone}
                  </a>
                </div>
              </div>
              <button onClick={() => handleCopy(phone, 'Phone')} className="btn-icon" title="Copy Phone" style={{ flexShrink: 0, width: '36px', height: '36px' }}>
                {copiedField === 'Phone' ? <Check size={16} style={{ color: '#22c55e' }} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Badge 3: Location */}
            <div
              className="glass-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'var(--color-garnet-glow)', color: 'var(--color-garnet)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MapPin size={20} />
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', display: 'block', fontWeight: 300 }}>{t.locationLabel}</span>
                <span style={{ fontSize: '0.92rem', fontWeight: 500, color: 'var(--text-main)' }}>
                  {location}
                </span>
              </div>
            </div>
          </div>

          {/* Unified Central Contact Form Box with Embedded Social Bar */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: 'var(--color-blue-glow)', color: 'var(--color-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>{t.formTitle}</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 300 }}>{t.formSubtitle}</span>
                </div>
              </div>

              {/* Social Quick Links Bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginRight: '4px' }}>Profiles:</span>
                <a href={github} target="_blank" rel="noreferrer" className="btn-icon" title="GitHub">
                  <GithubIcon size={16} />
                </a>
                <a href={linkedin} target="_blank" rel="noreferrer" className="btn-icon" title="LinkedIn">
                  <LinkedinIcon size={16} />
                </a>
                <a href={facebook} target="_blank" rel="noreferrer" className="btn-icon" title="Facebook">
                  <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>fb</span>
                </a>
                <a href={twitter} target="_blank" rel="noreferrer" className="btn-icon" title="X / Twitter">
                  <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>𝕏</span>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="contact-form-row">
                {[
                  { key: 'name', label: t.nameLabel, type: 'text', placeholder: t.namePlaceholder },
                  { key: 'email', label: t.emailFieldLabel, type: 'email', placeholder: t.emailPlaceholder }
                ].map(field => (
                  <div key={field.key} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.88rem', fontWeight: 500 }}>{field.label}</label>
                    <input
                      type={field.type}
                      value={(formData as Record<string, string>)[field.key]}
                      onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      style={{ padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-surface)', color: 'var(--text-main)', fontSize: '0.92rem', outline: 'none', fontFamily: 'inherit' }}
                    />
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.88rem', fontWeight: 500 }}>{t.subjectLabel}</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={t.subjectPlaceholder}
                  style={{ padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-surface)', color: 'var(--text-main)', fontSize: '0.92rem', outline: 'none', fontFamily: 'inherit' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.88rem', fontWeight: 500 }}>{t.messageLabel}</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.messagePlaceholder}
                  style={{ padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-surface)', color: 'var(--text-main)', fontSize: '0.92rem', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }}
                />
              </div>

              {status === 'error' && (
                <div style={{ padding: '10px 14px', borderRadius: '8px', backgroundColor: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#ef4444', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '8px', animation: 'scaleIn 0.3s ease' }}>
                  <AlertCircle size={16} /> {t.errorMsg}
                </div>
              )}
              {status === 'success' && (
                <div style={{ padding: '10px 14px', borderRadius: '8px', backgroundColor: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '8px', animation: 'scaleIn 0.3s ease' }}>
                  <CheckCircle2 size={16} /> {t.successMsg}
                </div>
              )}

              <button type="submit" className="btn btn-primary" disabled={status === 'submitting'} style={{ padding: '13px 28px', marginTop: '0.5rem', fontSize: '0.95rem' }}>
                {status === 'submitting' ? t.sendingBtn : <><Send size={18} /> {t.sendBtn}</>}
              </button>
            </form>
          </div>

        </div>

      </div>

      <style>{`
        /* Responsive Breakpoints */
        @media (max-width: 900px) {
          .contact-badges-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
        @media (max-width: 600px) {
          .contact-form-row {
            grid-template-columns: 1fr !important;
          }
          #contact { padding: 3.5rem 0 !important; }
        }
        /* Form input focus glow */
        input:focus, textarea:focus {
          border-color: var(--color-blue) !important;
          box-shadow: 0 0 0 3px var(--color-blue-glow) !important;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
      `}</style>
    </section>
  );
};
