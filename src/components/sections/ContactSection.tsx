import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { getPortfolioData } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].contact;
  const { email, phone, github, linkedin } = getPortfolioData(language).personalInfo;

  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(t.mailSubject)}`;
  const whatsappHref = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(t.whatsappText)}`;

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <h2 id="contact-title" className="section-title">{t.title}</h2>
      <p className="section-desc">{t.desc}</p>

      <div className="actions">
        <a href={mailtoHref} className="text-link">
          <Mail size={16} /> <span className="mono">{email}</span>
        </a>
        <a href={whatsappHref} target="_blank" rel="noreferrer" className="text-link">
          <MessageCircle size={16} /> WhatsApp {phone}
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer" className="text-link">
          <LinkedinIcon size={16} /> LinkedIn
        </a>
        <a href={github} target="_blank" rel="noreferrer" className="text-link">
          <GithubIcon size={16} /> GitHub
        </a>
      </div>
    </section>
  );
};
