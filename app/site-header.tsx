'use client';

import { useEffect, useRef, useState } from 'react';
import type { Language } from './use-language';

const sections = ['about', 'services', 'approach', 'projects', 'contact'];
const labels = {
  ar: ['من نحن', 'الخدمات', 'المنهجية', 'المشاريع', 'تواصل معنا'],
  en: ['About', 'Services', 'Approach', 'Projects', 'Contact'],
};

export function SiteHeader({ lang, setLang, servicePage = false }: {
  lang: Language;
  setLang: (language: Language) => void;
  servicePage?: boolean;
}) {
  const ar = lang === 'ar';
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(servicePage ? 'services' : '');
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const home = servicePage ? `/?lang=${lang}` : '';

  useEffect(() => {
    let frame = 0;
    const update = () => {
      setScrolled(window.scrollY > 24);
      if (!servicePage) {
        const line = (header.current?.offsetHeight ?? 104) + 80;
        let current = '';
        for (const id of sections) {
          if ((document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= line) current = id;
        }
        setActive(current);
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame); };
  }, [servicePage]);

  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
    };
    const desktop = window.matchMedia('(min-width: 1001px)');
    const resize = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', escape);
    desktop.addEventListener('change', resize);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', escape);
      desktop.removeEventListener('change', resize);
    };
  }, [open]);

  return (
    <header ref={header} className={`topbar interactive-topbar${scrolled || servicePage ? ' is-scrolled' : ''}${open ? ' menu-open' : ''}`}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
      <a href={`${home}#top`} className="brand" aria-label={ar ? 'الرئيسية' : 'Home'} onClick={() => setOpen(false)}>
        <img className="brand-logo" src="/brand/tpco-logo-white.svg" alt={ar ? 'شركة ركيزة التحول' : 'Transformation Pillar Company'} />
      </a>
      <button ref={toggle} type="button" className="menu-toggle" aria-expanded={open} aria-controls="primary-menu" onClick={() => setOpen(!open)}>
        <span className="menu-toggle-icon" aria-hidden="true"><i /><i /><i /></span>
        <span>{open ? (ar ? 'إغلاق' : 'Close') : (ar ? 'القائمة' : 'Menu')}</span>
      </button>
      <nav id="primary-menu" aria-label={ar ? 'التنقل الرئيسي' : 'Primary navigation'}>
        {sections.map((id, index) => <a key={id} href={`${home}#${id}`} aria-current={active === id ? 'location' : undefined}
          onClick={() => setOpen(false)}>{labels[lang][index]}</a>)}
      </nav>
      <button type="button" className="lang-switch" onClick={() => { setLang(ar ? 'en' : 'ar'); setOpen(false); }} aria-label={ar ? 'Switch to English' : 'التبديل إلى العربية'}>{ar ? 'EN' : 'عربي'}</button>
    </header>
  );
}
