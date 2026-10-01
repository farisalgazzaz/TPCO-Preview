'use client';

import { useState } from 'react';
import type { Language } from './use-language';

const organizations = [
  { id: 'gaca', en: 'General Authority of Civil Aviation', ar: 'الهيئة العامة للطيران المدني' },
  { id: 'zatca', en: 'Zakat, Tax and Customs Authority', ar: 'هيئة الزكاة والضريبة والجمارك' },
  { id: 'qassim', en: 'Qassim University', ar: 'جامعة القصيم' },
  { id: 'jeddah-airports', en: 'Jeddah Airports', ar: 'مطارات جدة' },
  { id: 'mawani', en: 'Saudi Ports Authority', ar: 'الهيئة العامة للموانئ' },
  { id: 'umm-al-qura', en: 'Umm Al-Qura University', ar: 'جامعة أم القرى' },
  { id: 'energy', en: 'Ministry of Energy', ar: 'وزارة الطاقة' },
  { id: 'municipalities-housing', en: 'Ministry of Municipalities and Housing', ar: 'وزارة البلديات والإسكان' },
  { id: 'interior', en: 'Ministry of Interior', ar: 'وزارة الداخلية' },
  { id: 'sport', en: 'Ministry of Sport', ar: 'وزارة الرياضة' },
];

const imageExtensions: Record<string, string> = {
  qassim: 'webp',
  'jeddah-airports': 'png',
  'municipalities-housing': 'png',
  interior: 'webp',
};

export function TeamExperience({ lang }: { lang: Language }) {
  const [paused, setPaused] = useState(false);
  const ar = lang === 'ar';
  return <section className={`team-experience section-pad${paused ? ' logos-paused' : ''}`} id="team-experience" aria-labelledby="team-experience-title">
    <div className="team-experience-heading">
      <h2 id="team-experience-title">{ar ? 'جهات عمل معها فريقنا قبل الانضمام إلى ركيزة التحول' : 'Organizations our team served before joining TPCO'}</h2>
      <button type="button" className="logos-motion-toggle" aria-pressed={paused} aria-label={ar ? (paused ? 'تشغيل حركة الشعارات' : 'إيقاف حركة الشعارات') : (paused ? 'Play logo animation' : 'Pause logo animation')} onClick={() => setPaused(!paused)}><span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span></button>
    </div>
    <div className="team-logo-window">
      <div className="team-logo-track">
        {[false, true].map(duplicate => <ul className="team-logo-group" key={String(duplicate)} aria-hidden={duplicate ? true : undefined}>
          {organizations.map(org => <li key={org.id}><img src={`/organizations/${org.id}.${imageExtensions[org.id] ?? 'svg'}`} alt={duplicate ? '' : ar ? org.ar : org.en} width="180" height="100" decoding="async" /></li>)}
        </ul>)}
      </div>
    </div>
  </section>;
}
