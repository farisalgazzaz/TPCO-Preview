'use client';

import { services } from '../content';
import { serviceDetails } from '../details';
import { useLanguage } from '../../use-language';

export default function ServicePage({ slug }: { slug: string }) {
  const [lang, setLang] = useLanguage();
  const ar = lang === 'ar';
  const service = services.find(item => item.slug === slug)!;
  const detail = serviceDetails.find(item => item.slug === slug)!;
  const title = ar ? service.ar : service.en;
  const goals = ar ? detail.goalsAr : detail.goalsEn;
  const outputs = ar ? detail.outputsAr : detail.outputsEn;
  const journey = ar ? detail.journeyAr : detail.journeyEn;
  const home = `/?lang=${lang}`;
  const labels = ar ? {
    home: 'الرئيسية', services: 'الخدمات', contact: 'تواصل معنا', overview: 'عن الخدمة',
    goals: 'أهداف الخدمة', outputs: 'المخرجات التي تتسلمها', journey: 'رحلتنا لضمان نجاح التنفيذ',
    scope: 'كيف نعمل معكم', checkpoint: 'نقطة التحقق', all: 'استكشف خدماتنا الأخرى',
    cta: 'لنحدد مسار نجاحكم معاً', talk: 'ناقش احتياجك معنا',
    ctaText: 'شاركنا أولوياتكم لنحدد نطاق العمل والمخرجات ومعايير القبول المناسبة لجهتكم',
    assurance: 'نبني جودة التنفيذ على نطاق متفق عليه ومخرجات قابلة للمراجعة ومشاركة مستمرة من فريقكم، وترتبط النتائج بالجاهزية والبيانات والموارد وتطبيق التوصيات',
    rights: '© 2026 شركة ركيزة التحول — المملكة العربية السعودية',
  } : {
    home: 'Home', services: 'Services', contact: 'Contact', overview: 'About this service',
    goals: 'Service goals', outputs: 'What you receive', journey: 'Our journey to successful delivery',
    scope: 'How we work with you', checkpoint: 'Review checkpoint', all: 'Explore our other services',
    cta: 'Let’s shape your path to success', talk: 'Discuss your needs',
    ctaText: 'Share your priorities so we can define the right scope, deliverables, and acceptance criteria for your organization',
    assurance: 'We support delivery quality through an agreed scope, reviewable deliverables, and ongoing collaboration with your team, with outcomes shaped by readiness, data, resources, and adoption of recommendations',
    rights: '© 2026 Transformation Pillar Company — Saudi Arabia',
  };
  return (
    <main className="site-shell service-page" dir={ar ? 'rtl' : 'ltr'} lang={lang}>
      <header className="topbar service-topbar">
        <a className="brand" href={home} aria-label={labels.home}><img className="brand-logo" src="/brand/tpco-logo-white.svg" alt={ar ? 'شركة ركيزة التحول' : 'Transformation Pillar Company'} /></a>
        <nav aria-label={ar ? 'التنقل الرئيسي' : 'Primary navigation'}>
          <a href={home}>{labels.home}</a><a href={`${home}#services`}>{labels.services}</a><a href={`${home}#contact`}>{labels.contact}</a>
        </nav>
        <button className="lang-switch" onClick={() => setLang(ar ? 'en' : 'ar')} aria-label={ar ? 'Switch to English' : 'التبديل إلى العربية'}>{ar ? 'EN' : 'عربي'}</button>
      </header>
      <section className="service-hero">
        <div className="service-hero-copy">
          <h1>{title}</h1>
          <p>{ar ? service.descAr : service.descEn}</p>
          <a className="button primary" href="#service-overview">{labels.overview}</a>
        </div>
        <div className="service-hero-image"><img src={`/services/${detail.image}.webp`} alt={ar ? detail.altAr : detail.altEn} width="1536" height="1024" fetchPriority="high" /></div>
      </section>
      <nav className="service-sections" aria-label={ar ? 'أقسام الخدمة' : 'Service sections'}>
        <a href="#service-overview">{labels.overview}</a><a href="#service-goals">{labels.goals}</a><a href="#service-outputs">{labels.outputs}</a><a href="#service-journey">{ar ? 'رحلة النجاح' : 'Success journey'}</a>
      </nav>
      <section id="service-overview" className="service-overview section-pad">
        <div><h2>{labels.overview}</h2>{(ar ? detail.introAr : detail.introEn).split('\n').map(p => <p key={p}>{p}</p>)}</div>
        <aside className="service-scope"><h3>{labels.scope}</h3><ul>{(ar ? service.pointsAr : service.pointsEn).map(point => <li key={point}>{point}</li>)}</ul></aside>
      </section>
      <section id="service-goals" className="service-goals section-pad">
        <img src="/brand/clip-angle.png" className="service-goals-art" alt="" aria-hidden="true" />
        <h2>{labels.goals}</h2><div className="service-goals-grid">{goals.map(goal => <article key={goal}><span aria-hidden="true" className="goal-mark" /><h3>{goal}</h3></article>)}</div>
      </section>
      <section id="service-outputs" className="service-outputs section-pad">
        <div><h2>{labels.outputs}</h2><p>{ar ? 'مخرجات عملية نراجعها مع فريقكم ونسلّمها وفق نطاق المشروع ومعايير القبول المتفق عليها' : 'Practical deliverables reviewed with your team and handed over against the agreed project scope and acceptance criteria'}</p></div>
        <ul>{outputs.map(output => <li key={output}><span aria-hidden="true">✓</span>{output}</li>)}</ul>
      </section>
      <section id="service-journey" className="service-journey section-pad">
        <h2>{labels.journey}</h2><p className="journey-intro">{labels.assurance}</p>
        <div className="service-journey-grid">{journey.map(([heading, body, checkpoint]) => <article key={heading}><span className="journey-dot" aria-hidden="true" /><h3>{heading}</h3><p>{body}</p><div className="journey-checkpoint"><strong>{labels.checkpoint}</strong><p>{checkpoint}</p></div></article>)}</div>
      </section>
      <section className="service-cta section-pad"><h2>{labels.cta}</h2><p>{labels.ctaText}</p><a className="button primary" href={`${home}#contact`}>{labels.talk}</a></section>
      <section className="service-related section-pad"><h2>{labels.all}</h2><div>{services.filter(item => item.slug !== slug).map(item => <a key={item.slug} href={`/services/${item.slug}?lang=${lang}`}>{ar ? item.ar : item.en}</a>)}</div></section>
      <footer><a href={home} className="brand" aria-label={labels.home}><img className="brand-logo footer-logo" src="/brand/tpco-logo-white.svg" alt="TPCO" /></a><p>{labels.rights}</p><a href={`${home}#services`}>{labels.services}</a></footer>
    </main>
  );
}
