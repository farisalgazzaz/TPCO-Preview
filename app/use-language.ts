'use client';

import { useEffect, useState } from 'react';

export type Language = 'ar' | 'en';

export function useLanguage(): [Language, (language: Language) => void] {
  const [language, setLanguage] = useState<Language>('ar');
  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get('lang');
    let saved: string | null = null;
    try { saved = localStorage.getItem('tpco-language'); } catch {}
    setLanguage(query === 'en' || query === 'ar' ? query : saved === 'en' ? 'en' : 'ar');
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);
  function changeLanguage(next: Language) {
    setLanguage(next);
    try { localStorage.setItem('tpco-language', next); } catch {}
    const url = new URL(window.location.href);
    url.searchParams.set('lang', next);
    window.history.replaceState(null, '', url);
  }
  return [language, changeLanguage];
}
