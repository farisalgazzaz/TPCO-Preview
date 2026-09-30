export type ServiceDetail = {
  slug: string; image: string; altAr: string; altEn: string;
  introAr: string; introEn: string;
  goalsAr: string[]; goalsEn: string[];
  outputsAr: string[]; outputsEn: string[];
  journeyAr: string[][]; journeyEn: string[][];
};

export const serviceDetails: ServiceDetail[] = [
  {
    "slug": "digital-transformation",
    "image": "saudi-data",
    "altAr": "تصور لمحلل سعودي يراجع مؤشرات الأداء في مكتب معاصر",
    "altEn": "An illustrative Saudi analyst reviewing performance data in a contemporary office",
    "introAr": "تبدأ الخدمة بفهم طبيعة أعمال الجهة وخدماتها ومستوى جاهزيتها، ثم مراجعة الممارسات والوثائق مع الفرق المعنية لبناء صورة واقعية عن النضج الرقمي\nنحوّل نتائج التقييم إلى مسارات عمل تشمل الحوكمة والعمليات والتقنية والقدرات، مع متابعة دورية تربط كل إجراء بدليل تحقق ومالك واضح",
    "introEn": "The engagement starts with your mandate, services, and readiness, followed by a review of practices and documentation with the responsible teams\nWe translate findings into workstreams across governance, processes, technology, and capabilities, with regular follow-up that links each action to an owner and verifiable evidence",
    "goalsAr": [
      "تحديد خط أساس موثوق للنضج الرقمي وجاهزية القياس",
      "تركيز جهود التحسين على الفجوات الأعلى أولوية وأثراً",
      "تمكين الفرق من إدارة التوثيق والتحسين بصورة مستمرة"
    ],
    "goalsEn": [
      "Establish a reliable digital maturity and assessment-readiness baseline",
      "Focus improvement efforts on the highest-priority gaps and their impact",
      "Enable teams to sustain evidence management and continuous improvement"
    ],
    "outputsAr": [
      "تقرير تقييم النضج وسجل الفجوات والأولويات",
      "خارطة تحسين تتضمن المبادرات والملاك والمواعيد",
      "مصفوفة متطلبات وأدلة مع سجل مراجعة الوثائق",
      "لوحة متابعة وخطة إغلاق ملاحظات",
      "دليل عمل ومواد تدريب للفرق المسؤولة"
    ],
    "outputsEn": [
      "Maturity assessment and prioritized gap register",
      "Improvement roadmap with initiatives, owners, and milestones",
      "Requirements-to-evidence matrix and document review log",
      "Progress dashboard and corrective-action plan",
      "Working guide and training materials for responsible teams"
    ],
    "journeyAr": [
      [
        "نفهم ونقيس",
        "نراجع الخدمات والممارسات والأدلة مع أصحاب المصلحة لتحديد نقطة البداية",
        "اعتماد نطاق التقييم وخط الأساس"
      ],
      [
        "نحدد الأولويات",
        "نرتب الفجوات بحسب الأثر والجاهزية ونحدد مسؤوليات التنفيذ",
        "اعتماد خطة التحسين ومؤشرات المتابعة"
      ],
      [
        "نتحقق من الجاهزية",
        "نراجع الأدلة ونجري تقييم جاهزية ونناقش الملاحظات مع الفرق",
        "توثيق الملاحظات وحالة معالجتها"
      ],
      [
        "ننقل القدرة",
        "نسلّم أدوات المتابعة وندرب الملاك على دورة التحديث والتحسين",
        "قبول المخرجات وخطة متابعة الدورة التالية"
      ]
    ],
    "journeyEn": [
      [
        "Understand and assess",
        "Review services, practices, and evidence with stakeholders to establish the starting point",
        "Assessment scope and baseline agreed"
      ],
      [
        "Prioritize improvements",
        "Rank gaps by impact and readiness and assign implementation responsibilities",
        "Improvement plan and measures approved"
      ],
      [
        "Validate readiness",
        "Review evidence, conduct a readiness assessment, and resolve findings with teams",
        "Findings and corrective-action status documented"
      ],
      [
        "Build lasting capability",
        "Hand over tracking tools and train owners on ongoing updates and improvement",
        "Deliverables accepted and next review planned"
      ]
    ]
  },
  {
    "slug": "enterprise-architecture",
    "image": "saudi-architecture",
    "altAr": "تصور لنموذج معماري سعودي معاصر مستلهم من الهندسة النجدية",
    "altEn": "An illustrative contemporary Saudi architectural model inspired by Najdi design",
    "introAr": "نوفر لغة مشتركة بين الاستراتيجية والأعمال والتقنية، تجعل العلاقات بين القدرات والخدمات والأنظمة والبيانات واضحة أمام متخذي القرار\nتشمل الخدمة تأسيس ممارسة البنية المؤسسية وتوثيق الوضع الراهن وتصميم الوضع المستهدف، مع خارطة انتقال تراعي الاعتماديات والقدرة على التنفيذ",
    "introEn": "We create a shared language across strategy, business, and technology so decision-makers can see how capabilities, services, systems, and data connect\nThe service establishes architecture practices, documents the current state, and designs the target state, supported by a transition roadmap that reflects dependencies and delivery capacity",
    "goalsAr": [
      "مواءمة الاستثمارات التقنية مع الأولويات المؤسسية",
      "تحسين التكامل وتقليل ازدواجية القدرات والحلول",
      "تأسيس حوكمة تدعم قرارات المعمارية واستدامة تحديثها"
    ],
    "goalsEn": [
      "Align technology investment with institutional priorities",
      "Improve integration and reduce duplicated capabilities and solutions",
      "Establish governance for architecture decisions and ongoing updates"
    ],
    "outputsAr": [
      "نموذج تشغيل مكتب البنية المؤسسية وميثاق الحوكمة",
      "خرائط قدرات الأعمال والخدمات والتطبيقات والبيانات",
      "معماريات الوضع الحالي والمستهدف وتحليل الفجوات",
      "مبادئ ومعايير مرجعية ونماذج مراجعة الحلول",
      "خارطة انتقال ومستودع معماريات ودليل تحديث"
    ],
    "outputsEn": [
      "Architecture Office operating model and governance charter",
      "Business capability, service, application, and data maps",
      "Baseline and target architectures with gap analysis",
      "Reference principles, standards, and solution review templates",
      "Transition roadmap, architecture repository, and maintenance guide"
    ],
    "journeyAr": [
      [
        "نوحّد الرؤية",
        "نتفق مع الأعمال والتقنية على القدرات والقرارات التي ستدعمها البنية",
        "اعتماد نطاق المعماريات وأصحاب المصلحة"
      ],
      [
        "نبني المرجعية",
        "نوثق الوضع الحالي ونصمم البدائل والمعماريات المستهدفة",
        "مراجعة النماذج واعتماد مبادئ التصميم"
      ],
      [
        "نربط بالتنفيذ",
        "نحوّل الفجوات إلى حزم انتقال مرتبطة بالمبادرات والاعتماديات",
        "اعتماد خارطة الانتقال وآلية مراجعة الحلول"
      ],
      [
        "نفعّل الحوكمة",
        "نطبق دورة مراجعة وندرب الفريق على المستودع والتحديث",
        "تسليم المستودع وتحديد ملاك التحديث"
      ]
    ],
    "journeyEn": [
      [
        "Align the vision",
        "Agree which capabilities and decisions the architecture will support",
        "Architecture scope and stakeholders agreed"
      ],
      [
        "Build the reference",
        "Document the baseline and design alternatives and target architectures",
        "Models reviewed and design principles approved"
      ],
      [
        "Connect to delivery",
        "Translate gaps into transition packages linked to initiatives and dependencies",
        "Transition roadmap and solution review process approved"
      ],
      [
        "Activate governance",
        "Run a review cycle and train the team to maintain the repository",
        "Repository handed over with named maintenance owners"
      ]
    ]
  },
  {
    "slug": "governance-risk-compliance",
    "image": "saudi-collaboration",
    "altAr": "تصور لورشة عمل تجمع مختصين سعوديين في بيئة عمل محلية",
    "altEn": "An illustrative workshop with Saudi professionals in a locally inspired workplace",
    "introAr": "نعالج الحوكمة والمخاطر والامتثال كمنظومة تشغيل واحدة، تربط القرارات بالمسؤوليات والضوابط والأدلة، وتوضح متى وكيف تُرفع المسائل إلى الإدارة\nنعمل مع ملاك العمليات لتطوير أطر قابلة للتطبيق، تشمل السياسات وتقييم المخاطر ومتابعة الالتزام، مع تقارير عملية تدعم اللجان وفرق العمل",
    "introEn": "We treat governance, risk, and compliance as one operating system that connects decisions to responsibilities, controls, and evidence, with clear escalation paths\nWorking with process owners, we develop practical policies, risk assessments, and compliance monitoring, supported by reporting for committees and delivery teams",
    "goalsAr": [
      "توضيح الصلاحيات والمساءلة ومسارات اتخاذ القرار",
      "إدارة المخاطر بناءً على الأولوية ومستوى التعرض",
      "تحويل الالتزام إلى ممارسة موثقة قابلة للمتابعة"
    ],
    "goalsEn": [
      "Clarify authority, accountability, and decision paths",
      "Manage risks according to priority and exposure",
      "Make compliance a documented and trackable practice"
    ],
    "outputsAr": [
      "إطار حوكمة ومواثيق لجان ومصفوفة صلاحيات",
      "حزمة سياسات وإجراءات مع آلية اعتماد ومراجعة",
      "سجل مخاطر ومعايير تقييم وخطط معالجة",
      "مصفوفة امتثال تربط المتطلبات بالضوابط والأدلة",
      "تقارير ولجان متابعة وسجل إجراءات تصحيحية"
    ],
    "outputsEn": [
      "Governance framework, committee charters, and authority matrix",
      "Policies and procedures with approval and review arrangements",
      "Risk register, assessment criteria, and treatment plans",
      "Compliance matrix linking requirements, controls, and evidence",
      "Reporting templates and a corrective-action tracking register"
    ],
    "journeyAr": [
      [
        "نحدد الالتزامات",
        "نحصر القرارات والمخاطر والمتطلبات ذات الصلة ونراجع الممارسات القائمة",
        "تأكيد النطاق وملاك المخاطر والامتثال"
      ],
      [
        "نصمم الأطر",
        "نطوّر السياسات والصلاحيات والضوابط بالتعاون مع الملاك",
        "اعتماد الأطر ومسؤوليات تطبيقها"
      ],
      [
        "نختبر التطبيق",
        "نراجع عينة من الضوابط والأدلة ونناقش الفجوات التشغيلية",
        "توثيق نتائج المراجعة وخطط المعالجة"
      ],
      [
        "نرسخ المتابعة",
        "نفعّل التقارير ودورات المراجعة وننقل أدوات العمل للفرق",
        "اعتماد جدول المتابعة وآلية التصعيد"
      ]
    ],
    "journeyEn": [
      [
        "Define obligations",
        "Map relevant decisions, risks, and requirements and review existing practices",
        "Scope and risk and compliance owners confirmed"
      ],
      [
        "Design the frameworks",
        "Develop policies, authorities, and controls with their owners",
        "Frameworks and implementation responsibilities approved"
      ],
      [
        "Check implementation",
        "Review a sample of controls and evidence and assess operating gaps",
        "Review findings and treatment actions documented"
      ],
      [
        "Embed follow-up",
        "Activate reporting and review cycles and transfer tools to the teams",
        "Monitoring schedule and escalation process agreed"
      ]
    ]
  },
  {
    "slug": "national-indicators",
    "image": "saudi-data",
    "altAr": "تصور لبيئة تحليل بيانات سعودية تربط الأداء باتخاذ القرار",
    "altEn": "An illustrative Saudi analytics setting connecting performance with decisions",
    "introAr": "نساعد الجهة على فهم ما يقيسه كل مؤشر ولماذا يهم، وتحديد البيانات والأدلة اللازمة لاحتسابه بصورة متسقة عبر الإدارات\nيمتد العمل من تعريف المؤشرات والتحقق من جودة مصادرها إلى تحليل أسباب الأداء وتصميم إجراءات التحسين، مع دورة متابعة مرتبطة بمواعيد التحديث والتقارير",
    "introEn": "We help teams understand what each indicator measures, why it matters, and which data and evidence are needed for consistent calculation across departments\nThe engagement covers indicator definitions and source quality through to performance analysis and improvement actions, organized around update and reporting cycles",
    "goalsAr": [
      "رفع اتساق ودقة البيانات المستخدمة في قياس المؤشرات",
      "توضيح مسؤولية كل مؤشر ومصدر بياناته",
      "ربط نتائج القياس بإجراءات تحسين قابلة للتنفيذ"
    ],
    "goalsEn": [
      "Improve the consistency and accuracy of indicator data",
      "Clarify ownership and data sources for every indicator",
      "Translate measurement results into actionable improvements"
    ],
    "outputsAr": [
      "قاموس مؤشرات يتضمن التعريفات وطرق الاحتساب",
      "مصفوفة ملاك المؤشرات ومصادر البيانات ودورية التحديث",
      "تقرير خط أساس وتحليل أسباب فجوات الأداء",
      "خطة تحسين مرتبطة بالمستهدفات والمسؤوليات",
      "لوحة مؤشرات وقوالب تقارير وسجل أدلة"
    ],
    "outputsEn": [
      "Indicator dictionary with definitions and calculation methods",
      "Ownership, data-source, and update-frequency matrix",
      "Baseline report and analysis of performance gaps",
      "Improvement plan linked to targets and responsibilities",
      "Indicator dashboard, reporting templates, and evidence register"
    ],
    "journeyAr": [
      [
        "نضبط التعريف",
        "نتحقق من نطاق المؤشرات وقواعد احتسابها مع الإدارات",
        "اعتماد قاموس المؤشرات وملاك البيانات"
      ],
      [
        "نتحقق من البيانات",
        "نراجع المصادر والتعاريف والاكتمال ونعالج اختلافات الاحتساب",
        "تثبيت خط أساس موثوق وتوثيق فجوات البيانات"
      ],
      [
        "نوجه التحسين",
        "نحلل أسباب النتائج ونحدد إجراءات مرتبطة بالمستهدفات",
        "اعتماد خطة العمل ومسؤولياتها"
      ],
      [
        "نستدام بالمتابعة",
        "نفعّل التقارير ونختبر دورة تحديث مع الملاك",
        "تسليم أدوات القياس وتقويم المراجعة"
      ]
    ],
    "journeyEn": [
      [
        "Define consistently",
        "Confirm indicator scope and calculation rules with departments",
        "Indicator dictionary and data owners approved"
      ],
      [
        "Validate the data",
        "Review sources and completeness and reconcile calculation differences",
        "Reliable baseline established and data gaps documented"
      ],
      [
        "Direct improvement",
        "Analyze results and identify actions linked to performance targets",
        "Action plan and responsibilities approved"
      ],
      [
        "Sustain monitoring",
        "Activate reports and complete an update cycle with the owners",
        "Measurement tools and review calendar handed over"
      ]
    ]
  },
  {
    "slug": "digital-innovation",
    "image": "saudi-collaboration",
    "altAr": "تصور لورشة ابتكار سعودية لتطوير أفكار وخدمات جديدة",
    "altEn": "An illustrative Saudi innovation workshop exploring new ideas and services",
    "introAr": "نبني مساراً منظماً للابتكار يبدأ بتحديات حقيقية، ويمنح الأفكار فرصة للاختبار قبل اتخاذ قرارات الاستثمار والتوسع\nنعمل مع فرق الجهة والمستفيدين لتوليد الحلول وتطوير النماذج الأولية وتقييمها، ونوثق ما نتعلمه من كل تجربة لدعم قرارات مبنية على الأدلة",
    "introEn": "We create a structured innovation path that starts with real challenges and tests ideas before investment and scale-up decisions\nWorking with teams and beneficiaries, we develop concepts, prototypes, and evaluation plans, capturing learning from each experiment to support evidence-based decisions",
    "goalsAr": [
      "توجيه الابتكار نحو تحديات وأولويات ذات قيمة",
      "تقليل عدم اليقين عبر التجارب والنماذج الأولية",
      "بناء ممارسة داخلية مستمرة لإدارة الأفكار والتعلم"
    ],
    "goalsEn": [
      "Focus innovation on valuable challenges and priorities",
      "Reduce uncertainty through experiments and prototypes",
      "Build a sustained internal practice for ideas and learning"
    ],
    "outputsAr": [
      "استراتيجية ابتكار ونموذج حوكمة ومسار لإدارة الأفكار",
      "محفظة تحديات وفرص مع معايير تقييم وأولوية",
      "تصورات حلول ونماذج أولية بحسب نطاق العمل",
      "خطط تجارب تتضمن الفرضيات ومقاييس التحقق",
      "تقارير نتائج وتوصيات تطوير أو توسع أو إعادة توجيه"
    ],
    "outputsEn": [
      "Innovation strategy, governance model, and idea-management process",
      "Challenge and opportunity portfolio with prioritization criteria",
      "Solution concepts and prototypes suited to the agreed scope",
      "Experiment plans with hypotheses and validation measures",
      "Findings and recommendations to refine, scale, or redirect ideas"
    ],
    "journeyAr": [
      [
        "نصوغ التحدي",
        "نفهم احتياجات المستفيد ونحدد المشكلة والقيمة المرجوة",
        "اعتماد صياغة التحدي ومعايير اختيار الأفكار"
      ],
      [
        "نطوّر الفكرة",
        "نستكشف البدائل ونصمم نموذجاً أولياً للحل المختار",
        "مراجعة النموذج وخطة الاختبار"
      ],
      [
        "نختبر ونتعلم",
        "نجرب الحل ضمن نطاق محدد ونقيس النتائج مقابل الفرضيات",
        "توثيق نتائج التجربة والتعلم"
      ],
      [
        "نقرر المسار",
        "نوازن بين القيمة والجدوى ومتطلبات التنفيذ ونبني الخطوة التالية",
        "قرار موثق للتطوير أو التوسع أو إعادة التوجيه"
      ]
    ],
    "journeyEn": [
      [
        "Frame the challenge",
        "Understand beneficiary needs and define the problem and intended value",
        "Challenge statement and selection criteria agreed"
      ],
      [
        "Develop the concept",
        "Explore alternatives and prototype the selected solution",
        "Prototype and test plan reviewed"
      ],
      [
        "Test and learn",
        "Run a bounded experiment and evaluate results against the hypotheses",
        "Experiment findings and learning documented"
      ],
      [
        "Decide the path",
        "Balance value, feasibility, and delivery needs to define the next step",
        "Documented decision to refine, scale, or redirect"
      ]
    ]
  },
  {
    "slug": "data-artificial-intelligence",
    "image": "saudi-data",
    "altAr": "تصور لمحلل سعودي يعمل على البيانات في بيئة تقنية معاصرة",
    "altEn": "An illustrative Saudi analyst working with data in a contemporary technology setting",
    "introAr": "تبدأ الاستفادة من البيانات بمعرفة أصولها وجودتها والمسؤوليات المرتبطة بها، لذلك نبني الأسس التنظيمية والتشغيلية قبل توسيع الاستخدامات التحليلية\nنربط فرص الذكاء الاصطناعي بمشكلات أعمال محددة، ونقيّم جاهزية البيانات ومخاطر الاستخدام ومعايير الأداء، مع إشراف بشري واضح في مراحل التجربة والتطبيق",
    "introEn": "Effective data use starts with knowing your assets, their quality, and who is responsible for them, so we establish organizational and operational foundations before expanding analytics\nWe connect AI opportunities to specific business problems and assess data readiness, usage risks, and performance criteria, with clear human oversight during pilots and adoption",
    "goalsAr": [
      "بناء بيانات موثوقة ذات ملكية وحوكمة واضحة",
      "تمكين قرارات تدعمها تحليلات ومؤشرات قابلة للفهم",
      "اختيار حالات ذكاء اصطناعي ذات قيمة وقابلة للتقييم"
    ],
    "goalsEn": [
      "Build trusted data with clear ownership and governance",
      "Enable decisions through understandable analytics and measures",
      "Select AI use cases with clear value and evaluation criteria"
    ],
    "outputsAr": [
      "استراتيجية بيانات ونموذج تشغيل وأدوار ومسؤوليات",
      "سياسات حوكمة وتصنيف ومشاركة وخصوصية",
      "سجل أصول وقاموس بيانات وخطة تحسين جودة",
      "تصورات لوحات تحليلية وتعريفات مؤشرات أعمال",
      "محفظة حالات استخدام وخارطة تجارب ومعايير تقييم وإشراف"
    ],
    "outputsEn": [
      "Data strategy, operating model, and accountability structure",
      "Governance, classification, sharing, and privacy policies",
      "Asset register, data glossary, and quality improvement plan",
      "Analytics dashboard concepts and business metric definitions",
      "Use-case portfolio, pilot roadmap, and evaluation and oversight criteria"
    ],
    "journeyAr": [
      [
        "نقيم الجاهزية",
        "نحصر الأصول والمصادر والاحتياجات ونراجع جودة البيانات",
        "اعتماد تقييم الجاهزية والأولويات"
      ],
      [
        "نبني الأساس",
        "نحدد السياسات والملاك والتعاريف وإجراءات تحسين الجودة",
        "مراجعة الحوكمة وخطة جودة البيانات"
      ],
      [
        "نثبت القيمة",
        "نصمم تجربة لحالة استخدام مختارة بمقاييس نجاح وحدود واضحة",
        "تقييم موثق للأداء والملاءمة ومخاطر الاستخدام"
      ],
      [
        "نهيئ الاستدامة",
        "ننقل إجراءات المتابعة والمراجعة والإشراف إلى فرق الجهة",
        "تسليم دليل التشغيل وخطة مراقبة الأداء"
      ]
    ],
    "journeyEn": [
      [
        "Assess readiness",
        "Map assets, sources, and needs and review data quality",
        "Readiness assessment and priorities agreed"
      ],
      [
        "Build the foundation",
        "Define policies, owners, common definitions, and quality actions",
        "Governance and data quality plan reviewed"
      ],
      [
        "Validate value",
        "Design a selected use-case pilot with clear measures and boundaries",
        "Performance, suitability, and usage risks evaluated"
      ],
      [
        "Prepare for continuity",
        "Transfer monitoring, review, and oversight practices to the teams",
        "Operating guide and performance monitoring plan handed over"
      ]
    ]
  },
  {
    "slug": "beneficiary-experience",
    "image": "saudi-collaboration",
    "altAr": "تصور لفرق سعودية تتعاون على تصميم تجربة خدمة تراعي المستفيد",
    "altEn": "An illustrative Saudi team collaborating on beneficiary-centered service design",
    "introAr": "ننظر إلى الخدمة كما يعيشها المستفيد، من البحث عن المعلومة إلى إتمام الطلب وما بعده، مع مراعاة اختلاف الاحتياجات والقنوات والقدرات الرقمية\nنجمع بين البحث ورسم الرحلات وتصميم الخدمة لاكتشاف نقاط التعثر، ثم نختبر التحسينات مع المستخدمين ونربطها بقدرة الفرق والأنظمة على التنفيذ",
    "introEn": "We examine the service as beneficiaries experience it, from finding information to completing a request and receiving follow-up, taking account of different needs, channels, and digital abilities\nResearch, journey mapping, and service design reveal friction, while user testing and operational review help turn proposed improvements into feasible changes",
    "goalsAr": [
      "فهم احتياجات المستفيدين ونقاط التعثر الفعلية",
      "تبسيط الرحلات وتحسين وضوح الخدمة وسهولة استخدامها",
      "بناء دورة قياس وتحسين مستمرة للتجربة"
    ],
    "goalsEn": [
      "Understand beneficiary needs and real sources of friction",
      "Simplify journeys and improve service clarity and usability",
      "Establish ongoing experience measurement and improvement"
    ],
    "outputsAr": [
      "تقرير أبحاث وشرائح مستفيدين واحتياجات رئيسية",
      "خرائط رحلات حالية ومستهدفة مع فرص التحسين",
      "مخططات خدمة تربط القنوات بالإجراءات والأنظمة",
      "نماذج أولية وتقارير اختبار سهولة الاستخدام وإمكانية الوصول",
      "إطار قياس التجربة وخارطة تحسين مرتبة بالأولوية"
    ],
    "outputsEn": [
      "Research report, beneficiary segments, and key needs",
      "Current and target journey maps with improvement opportunities",
      "Service blueprints linking channels, processes, and systems",
      "Prototypes and usability and accessibility evaluation findings",
      "Experience measurement framework and prioritized improvement roadmap"
    ],
    "journeyAr": [
      [
        "نستمع ونلاحظ",
        "نجمع رؤى المستفيدين ونراجع الرحلة عبر القنوات",
        "توثيق الاحتياجات ونطاق البحث"
      ],
      [
        "نعيد تصور الخدمة",
        "نصمم الرحلة المستهدفة مع الفرق ونحدد متطلبات التنفيذ",
        "مراجعة مخططات الخدمة وفرص التحسين"
      ],
      [
        "نختبر التجربة",
        "نقيّم النماذج مع مستخدمين ممثلين ونوثق نقاط التعثر",
        "تقرير اختبار وتعديلات مرتبطة بالنتائج"
      ],
      [
        "نقيس ونحسن",
        "نتفق على مؤشرات التجربة وآلية جمع الملاحظات والمتابعة",
        "تسليم خارطة التحسين وملكية المؤشرات"
      ]
    ],
    "journeyEn": [
      [
        "Listen and observe",
        "Gather beneficiary insights and review the journey across channels",
        "Needs and research scope documented"
      ],
      [
        "Reimagine the service",
        "Design the target journey with teams and identify delivery requirements",
        "Service blueprints and improvement opportunities reviewed"
      ],
      [
        "Test the experience",
        "Evaluate prototypes with representative users and capture friction",
        "Test findings translated into design changes"
      ],
      [
        "Measure and improve",
        "Agree experience indicators and feedback and review processes",
        "Improvement roadmap and metric ownership handed over"
      ]
    ]
  },
  {
    "slug": "total-quality-management",
    "image": "saudi-architecture",
    "altAr": "تصور للتخطيط الدقيق لمؤسسة سعودية مستوحاة من العمارة المحلية",
    "altEn": "An illustrative precision planning scene inspired by Saudi institutional architecture",
    "introAr": "نحوّل الجودة من وثائق متفرقة إلى ممارسة مرتبطة بسير العمل، توضح معايير المخرجات ومسؤوليات التنفيذ ونقاط التحقق\nنعمل على فهم العمليات وتحليل أسباب التأخير والهدر وإعادة العمل، ثم نطوّر إجراءات عملية ومؤشرات متابعة تدعم التحسين واستمرارية الأداء",
    "introEn": "We turn quality from isolated documents into working practices that define output standards, delivery responsibilities, and verification points\nBy examining processes and the causes of delays, waste, and rework, we develop practical procedures and measures that support continuous improvement and consistent performance",
    "goalsAr": [
      "رفع اتساق المخرجات ووضوح معايير قبولها",
      "تبسيط العمليات وتقليل الهدر وإعادة العمل",
      "تمكين الفرق من اكتشاف الأسباب الجذرية والتحسين المستمر"
    ],
    "goalsEn": [
      "Improve output consistency and clarify acceptance criteria",
      "Simplify processes and reduce waste and rework",
      "Enable teams to identify root causes and improve continuously"
    ],
    "outputsAr": [
      "تقييم منظومة الجودة وخريطة العمليات وملاكها",
      "نماذج عمليات محسنة مع نقاط ضبط ومسؤوليات",
      "دليل جودة وإجراءات ونماذج وآلية ضبط وثائق",
      "مؤشرات جودة وكفاءة وقوالب متابعة الأداء",
      "خطة مراجعة داخلية وسجل إجراءات تصحيحية ودليل تسليم"
    ],
    "outputsEn": [
      "Quality assessment and process and ownership map",
      "Improved process models with controls and responsibilities",
      "Quality manual, procedures, templates, and document controls",
      "Quality and efficiency measures and reporting templates",
      "Internal review plan, corrective-action register, and handover guide"
    ],
    "journeyAr": [
      [
        "نفهم العملية",
        "نراجع تدفق العمل والنتائج ومصادر التباين مع الفرق",
        "اعتماد خط الأساس ومعايير الجودة"
      ],
      [
        "نحسن التصميم",
        "نبسط الخطوات ونحدد المسؤوليات ونقاط الضبط",
        "مراجعة الإجراءات والنماذج المحسنة"
      ],
      [
        "نتحقق عملياً",
        "نراجع تطبيق العملية ونقيس النتائج ونحلل أسباب الفجوات",
        "توثيق المراجعة والإجراءات التصحيحية"
      ],
      [
        "نثبت الممارسة",
        "ندرب الملاك ونفعّل دورة مراجعة الوثائق والأداء",
        "تسليم نظام المتابعة وجدول المراجعات"
      ]
    ],
    "journeyEn": [
      [
        "Understand the process",
        "Review workflow, outcomes, and sources of variation with the teams",
        "Baseline and quality criteria agreed"
      ],
      [
        "Improve the design",
        "Simplify steps and define ownership and control points",
        "Improved procedures and templates reviewed"
      ],
      [
        "Verify in practice",
        "Review implementation, measure results, and investigate gaps",
        "Review findings and corrective actions documented"
      ],
      [
        "Embed the practice",
        "Train owners and activate document and performance review cycles",
        "Monitoring tools and review schedule handed over"
      ]
    ]
  }
];

