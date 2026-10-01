'use client';

import { FormEvent } from 'react';
import { services } from './services/content';
import { useLanguage } from './use-language';
import { SiteHeader } from './site-header';
import { TeamExperience } from './team-experience';

const projects = [
  { no:'01', clientAr:'جامعة القصيم', clientEn:'Qassim University', typeAr:'التحول الرقمي', typeEn:'Digital Transformation', titleAr:'خارطة طريق التحول الرقمي المؤسسي', titleEn:'Institutional Digital Transformation Roadmap', descAr:'تشخيص النضج الرقمي وتحديد المبادرات ذات الأولوية وبناء خارطة تنفيذ مترابطة تدعم مستهدفات الجامعة', descEn:'Assessing digital maturity, prioritizing initiatives, and building an integrated execution roadmap aligned with the university’s goals', tagsAr:['قياس النضج','خارطة الطريق','حوكمة المبادرات'], tagsEn:['Maturity','Roadmap','Governance'], tone:'violet' },
  { no:'02', clientAr:'جامعة القصيم', clientEn:'Qassim University', typeAr:'البنية المؤسسية', typeEn:'Enterprise Architecture', titleAr:'تأسيس وتفعيل البنية المؤسسية', titleEn:'Enterprise Architecture Establishment', descAr:'تصميم نموذج التشغيل وبناء المعماريات الحالية والمستهدفة وربطها بمحفظة المبادرات والتقنيات', descEn:'Designing the operating model, developing baseline and target architectures, and linking them to the initiative and technology portfolio', tagsAr:['نموذج التشغيل','المعماريات','المحفظة التقنية'], tagsEn:['Operating Model','Architectures','Technology Portfolio'], tone:'navy' },
  { no:'03', clientAr:'الهيئة السعودية للملكية الفكرية', clientEn:'Saudi Authority for Intellectual Property', typeAr:'التحول الرقمي', typeEn:'Digital Transformation', titleAr:'برنامج تمكين التحول الرقمي', titleEn:'Digital Transformation Enablement Program', descAr:'مواءمة مستهدفات التحول مع الأولويات المؤسسية، وتطوير نموذج متابعة يقيس التقدم والأثر بوضوح', descEn:'Aligning transformation goals with institutional priorities and developing a monitoring model that clearly measures progress and impact', tagsAr:['الاستراتيجية','القياس','إدارة التغيير'], tagsEn:['Strategy','Measurement','Change'], tone:'blue' },
  { no:'04', clientAr:'الهيئة السعودية للملكية الفكرية', clientEn:'Saudi Authority for Intellectual Property', typeAr:'البنية المؤسسية', typeEn:'Enterprise Architecture', titleAr:'مواءمة الأعمال والتقنية', titleEn:'Business–Technology Alignment', descAr:'تطوير مرجعيات البنية المؤسسية وآليات الحوكمة لدعم القرارات الاستثمارية وتحسين التكامل بين الأعمال والتقنية', descEn:'Developing enterprise architecture references and governance mechanisms to guide investment decisions and improve business–technology integration', tagsAr:['هندسة الأعمال','حوكمة التقنية','المرجعيات'], tagsEn:['Business Architecture','IT Governance','Reference Models'], tone:'sand' },
];
const copy = {
  ar: { nav:['من نحن','الخدمات','المنهجية','المشاريع','تواصل معنا'], eyebrow:'شريكك في التحول المؤسسي', title:'نحوّل الطموح الرقمي إلى أثرٍ مؤسسي', intro:'نعمل من داخل المنظومة لربط الاستراتيجية بالتنفيذ، وبناء قدرات رقمية مستدامة وقابلة للقياس', primary:'استكشف خدماتنا', secondary:'ابدأ رحلتك الرقمية', marker:'خبرات وطنية · أثر قابل للقياس', heroStat:'مجالات خبرة متكاملة', aboutLabel:'من نحن', aboutTitle:'نبني التحول من داخل المنظومة', aboutText:'ركيزة التحول شركة استشارية سعودية متخصصة في تمكين الجهات من تحويل المبادرات الرقمية المتفرقة إلى أثر مؤسسي مستدام يجمع فريقنا بين الرؤية الاستراتيجية والخبرة التنفيذية لنصنع حلولاً تتبنّاها فرق العمل وتستمر بعد انتهاء المشروع', values:[['فريق وطني','استشاريون ومحللو أعمال بخبرة في القطاع الحكومي'],['منهجية عملية','مخرجات قابلة للتطبيق والقياس منذ اليوم الأول'],['شراكة حقيقية','نقل معرفة وبناء قدرات داخلية مستدامة']], servicesLabel:'خدماتنا', servicesTitle:'خبرة متكاملة أثر واحد', servicesIntro:'مجالات مترابطة تأخذ منظمتك من التشخيص والتخطيط إلى التنفيذ والتحسين المستمر', details:'تفاصيل الخدمة', outputs:'ما الذي نقدّمه', methodLabel:'طريقتنا', methodTitle:'منهجية واضحة من أربع خطوات', steps:[['01','نفهم','نفهم السياق والطموح والتحديات من أصحاب المصلحة'],['02','نُشخّص','نقيس الوضع الراهن ونحدّد الفجوات والأولويات'],['03','نصمّم','نبني الحل وخارطة الطريق ومؤشرات النجاح'],['04','نُمكّن','ننفّذ مع فرقكم وننقل المعرفة ونقيس الأثر']], projectsLabel:'مشاريع حديثة', projectsTitle:'شراكات تصنع أثراً مستداماً', projectsIntro:'نماذج من أعمالنا في التحول الرقمي والبنية المؤسسية مع جهات وطنية رائدة', contactLabel:'لنبدأ الحوار', contactTitle:'جاهزون لتحويل التحدّي القادم إلى فرصة', contactText:'شاركنا احتياجك، وسيتواصل معك فريقنا لمناقشة المسار الأنسب', fields:['الاسم الكامل','البريد الإلكتروني','الجهة / المنظمة','كيف يمكننا مساعدتك؟'], send:'إرسال الطلب عبر واتساب', direct:'أو تواصل معنا مباشرة', rights:'© 2026 شركة ركيزة التحول — المملكة العربية السعودية' },
  en: { nav:['About','Services','Approach','Projects','Contact'], eyebrow:'Your institutional transformation partner', title:'Turning digital ambition into institutional impact', intro:'We work from within your ecosystem to connect strategy with execution and build sustainable, measurable digital capabilities', primary:'Explore our services', secondary:'Start your digital journey', marker:'National expertise · Measurable impact', heroStat:'Integrated areas of expertise', aboutLabel:'About us', aboutTitle:'We build transformation from within', aboutText:'Transformation Pillar Company is a Saudi consultancy that helps organizations turn fragmented digital initiatives into lasting institutional impact Our team combines strategic vision with hands-on delivery to create solutions that teams adopt and sustain beyond the engagement', values:[['National team','Consultants and business analysts with government-sector expertise'],['Practical approach','Actionable, measurable outputs from day one'],['True partnership','Knowledge transfer and sustainable internal capability building']], servicesLabel:'Our services', servicesTitle:'Integrated expertise One impact', servicesIntro:'Connected domains that take your organization from assessment and planning to execution and continuous improvement', details:'Service details', outputs:'What we deliver', methodLabel:'Our approach', methodTitle:'A clear four-step methodology', steps:[['01','Understand','We uncover the context, ambition, and stakeholder challenges'],['02','Assess','We measure the current state and identify gaps and priorities'],['03','Design','We shape the solution, roadmap, and success measures'],['04','Enable','We execute with your teams, transfer knowledge, and measure impact']], projectsLabel:'Recent projects', projectsTitle:'Partnerships that create lasting impact', projectsIntro:'Selected digital transformation and enterprise architecture engagements with leading national entities', contactLabel:'Start a conversation', contactTitle:'Ready to turn your next challenge into an opportunity', contactText:'Tell us what you need and our team will reach out to discuss the best path forward', fields:['Full name','Email address','Organization','How can we help?'], send:'Send request via WhatsApp', direct:'Or reach us directly', rights:'© 2026 Transformation Pillar Company — Saudi Arabia' },
};

export default function Home() {
  const [lang, setLang] = useLanguage();
  const ar = lang === 'ar'; const t = copy[lang];
  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const data = new FormData(event.currentTarget);
    const message = ar ? `مرحباً، أنا ${data.get('name')} من ${data.get('organization')}. ${data.get('message')} — ${data.get('email')}` : `Hello, I’m ${data.get('name')} from ${data.get('organization')}. ${data.get('message')} — ${data.get('email')}`;
    window.open(`https://wa.me/966505527636?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }
  return (
    <main lang={lang} dir={ar ? 'rtl' : 'ltr'} className="site-shell">
      <SiteHeader lang={lang} setLang={setLang} />
      <section className="hero hero-animated" id="top">
        <div className="hero-skyline" aria-hidden="true">
        <svg className="hero-light-lines" viewBox="0 0 2048 1152" width="2048" height="1152" focusable="false">
          <defs>
            <radialGradient id="building-light-glow">
              <stop offset="0" stopColor="#e9fcff" stopOpacity=".95" />
              <stop offset=".15" stopColor="#9ceeff" stopOpacity=".8" />
              <stop offset=".4" stopColor="#38bfff" stopOpacity=".35" />
              <stop offset="1" stopColor="#38bfff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <image href="/riyadh-digital-hero.png" width="2048" height="1152" preserveAspectRatio="none" />
          <g className="hero-edge-trails" fill="none" strokeLinecap="round">
            <path d="M213 878 L215 290" />
            <path d="M373 870 L373 323" />
            <path d="M474 866 L479 528 L488 350 L495 239 L504 225 L531 218" />
            <path d="M596 869 L597 532 L592 352 L587 246 L564 228" />
            <path d="M403 861 L400 553 L454 532" />
            <path d="M686 668 L686 559 L628 570" />
            <path d="M882 733 L882 648 L842 631" />
          </g>
          {[
            [[215, 290], [373, 323]],
            [[214, 598], [373, 598]],
            [[504, 225], [587, 246]],
            [[479, 528], [597, 532]],
          ].map((pair, index) => <g className={`hero-emitter-pair emitter-pair-${index}`} key={index}>
            {pair.map(([x, y]) => <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
              <circle r="26" fill="url(#building-light-glow)" />
              <circle r="2.5" fill="#e9fcff" />
            </g>)}
          </g>)}
        </svg>
        </div>
        <div className="hero-copy"><h1>{t.title}</h1><p className="hero-intro">{t.intro}</p><div className="hero-actions"><a className="button primary" href="#services">{t.primary}</a><a className="button ghost" href="#contact">{t.secondary}</a></div></div>
      </section>
      <section className="about section-pad" id="about"><img className="section-clip about-clip" src="/brand/clip-angle.png" alt="" aria-hidden="true" /><div className="about-head"><div><h2>{t.aboutTitle}</h2></div><p className="lead-copy">{t.aboutText}</p></div><div className="value-grid">{t.values.map(value=><article key={value[0]}><h3>{value[0]}</h3><p>{value[1]}</p></article>)}</div></section>
      <section className="services section-pad" id="services"><div className="section-heading light"><div><h2>{t.servicesTitle}</h2></div><p>{t.servicesIntro}</p></div><div className="services-grid-full">{services.map(service=><a className="service-detail service-card-link" key={service.n} href={`/services/${service.slug}?lang=${lang}`}><div className="service-top"><b className="glyph" aria-hidden="true">{service.glyph}</b></div><h3>{ar?service.ar:service.en}</h3><p>{ar?service.descAr:service.descEn}</p><span className="detail-link">{t.details}</span></a>)}</div></section>
      <section className="approach section-pad" id="approach"><img className="section-clip approach-clip" src="/brand/clip-links.png" alt="" aria-hidden="true" /><h2>{t.methodTitle}</h2><div className="steps">{t.steps.map(step=><article key={step[0]}><div className="step-dot" /><h3>{step[1]}</h3><p>{step[2]}</p></article>)}</div></section>
      <section className="projects section-pad" id="projects"><div className="section-heading project-heading"><div><h2>{t.projectsTitle}</h2></div><p>{t.projectsIntro}</p></div><div className="project-grid">{projects.map(project=><article className={`project-card ${project.tone}`} key={project.no}><div className="project-visual"><div className="project-rings"><i/><i/><i/></div><span className="project-type">{ar?project.typeAr:project.typeEn}</span></div><div className="project-copy"><small>{ar?project.clientAr:project.clientEn}</small><h3>{ar?project.titleAr:project.titleEn}</h3><p>{ar?project.descAr:project.descEn}</p><div className="tags">{(ar?project.tagsAr:project.tagsEn).map(tag=><span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>
      <TeamExperience lang={lang} />
      <section className="contact contact-conversation section-pad" id="contact" aria-labelledby="contact-title">
        <div className="contact-story">
          <div className="contact-copy"><h2 id="contact-title">{t.contactTitle}</h2><p>{t.contactText}</p></div>
          <img className="contact-team-photo" src="/saudi-team-conversation-v2.webp" width="1536" height="1024" loading="lazy" alt={ar ? 'مشهد توضيحي لمهنيين سعوديين يتبادلون الأفكار في اجتماع عمل' : 'Illustrative scene of Saudi professionals sharing ideas in a collaborative meeting'} />
          <address className="contact-address">
            <strong>{ar ? 'موقعنا' : 'Our location'}</strong>
            <a href="https://www.google.com/maps/search/?api=1&query=24.766584953574657%2C46.70680109905242" target="_blank" rel="noreferrer">
              <span>{ar ? 'طريق الإمام سعود بن عبدالعزيز بن محمد الفرعي' : 'Imam Saud bin Abdulaziz bin Mohammed Service Road'}</span>
              <span>{ar ? 'حي التعاون، الرياض، المملكة العربية السعودية' : 'Al Taawun District, Riyadh, Saudi Arabia'}</span>
              <span className="contact-map-link">{ar ? 'عرض الموقع على الخريطة' : 'View location on the map'}</span>
            </a>
          </address>
        </div>
        <form onSubmit={submitContact} aria-label={ar ? 'نموذج التواصل' : 'Contact form'}>
          <label>{t.fields[0]}<input required name="name" autoComplete="name" /></label>
          <label>{t.fields[1]}<input required type="email" name="email" autoComplete="email" dir="ltr" /></label>
          <label className="full">{t.fields[2]}<input required name="organization" autoComplete="organization" /></label>
          <label className="full">{t.fields[3]}<textarea required name="message" rows={5} /></label>
          <button className="button primary full" type="submit">{t.send}</button>
        </form>
      </section>
      <footer><a href="#top" className="brand" aria-label="TPCO home"><img className="brand-logo footer-logo" src="/brand/tpco-logo-white.svg" alt={ar?'شركة ركيزة التحول':'Transformation Pillar Company'} /></a><p>{t.rights}</p><a href="#top" className="back-top">↑</a></footer>
    </main>
  );
}
