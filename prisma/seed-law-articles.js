const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const lawArticles = [
    {
        slug_en: 'understanding-commercial-law-basics',
        slug_ar: 'فهم-اساسيات-القانون-التجاري',
        title_en: 'Understanding Commercial Law: A Comprehensive Guide for Businesses',
        title_ar: 'فهم القانون التجاري: دليل شامل للشركات',
        content_en: `
<p>Commercial law, also known as business law or mercantile law, governs the conduct of persons, merchants, and businesses engaged in trade, commerce, and sales. Understanding the fundamentals of commercial law is essential for any business operating in today's complex marketplace.</p>

<h2>Key Areas of Commercial Law</h2>

<h3>1. Contract Law</h3>
<p>At the heart of commercial law lies contract law. Every business transaction involves some form of agreement, whether written or verbal. Understanding how contracts are formed, what makes them enforceable, and how breaches are remedied is crucial for business success.</p>

<h3>2. Corporate Governance</h3>
<p>Corporate governance refers to the system of rules, practices, and processes by which a company is directed and controlled. It involves balancing the interests of stakeholders such as shareholders, management, customers, suppliers, and the community.</p>

<h3>3. Commercial Transactions</h3>
<p>The sale of goods, commercial paper, secured transactions, and letters of credit all fall under commercial transactions. These areas are governed by specific regulations that protect both buyers and sellers in business dealings.</p>

<h2>Why Businesses Need Legal Counsel</h2>
<p>Navigating commercial law without proper legal guidance can expose businesses to significant risks. A qualified commercial lawyer can help with contract drafting, dispute resolution, regulatory compliance, and strategic business planning.</p>

<h2>Conclusion</h2>
<p>Whether you're starting a new business or expanding an existing one, understanding commercial law fundamentals is essential. Contact MITRI Law Office for expert guidance on your commercial legal matters.</p>
    `,
        content_ar: `
<p>القانون التجاري، المعروف أيضاً بقانون الأعمال أو القانون التجاري، ينظم سلوك الأشخاص والتجار والشركات العاملة في التجارة والمبيعات. فهم أساسيات القانون التجاري ضروري لأي عمل يعمل في سوق اليوم المعقد.</p>

<h2>المجالات الرئيسية للقانون التجاري</h2>

<h3>1. قانون العقود</h3>
<p>في قلب القانون التجاري يكمن قانون العقود. كل معاملة تجارية تتضمن شكلاً من أشكال الاتفاق، سواء كان مكتوباً أو شفهياً. فهم كيفية تشكيل العقود وما يجعلها قابلة للتنفيذ وكيفية معالجة الانتهاكات أمر حاسم لنجاح الأعمال.</p>

<h3>2. حوكمة الشركات</h3>
<p>تشير حوكمة الشركات إلى نظام القواعد والممارسات والعمليات التي يتم من خلالها توجيه الشركة والتحكم فيها. وهي تتضمن موازنة مصالح أصحاب المصلحة مثل المساهمين والإدارة والعملاء والموردين والمجتمع.</p>

<h3>3. المعاملات التجارية</h3>
<p>بيع البضائع والأوراق التجارية والمعاملات المضمونة وخطابات الاعتماد كلها تندرج تحت المعاملات التجارية. هذه المجالات تحكمها لوائح محددة تحمي كلاً من المشترين والبائعين في التعاملات التجارية.</p>

<h2>لماذا تحتاج الشركات إلى مستشار قانوني</h2>
<p>التنقل في القانون التجاري دون توجيه قانوني مناسب يمكن أن يعرض الشركات لمخاطر كبيرة. يمكن للمحامي التجاري المؤهل المساعدة في صياغة العقود وحل النزاعات والامتثال التنظيمي والتخطيط الاستراتيجي للأعمال.</p>

<h2>الخلاصة</h2>
<p>سواء كنت تبدأ عملاً جديداً أو توسع عملاً قائماً، فإن فهم أساسيات القانون التجاري أمر ضروري. تواصل مع مكتب متري للمحاماة للحصول على إرشادات خبيرة في شؤونك القانونية التجارية.</p>
    `,
        meta_title_en: 'Understanding Commercial Law Basics | MITRI Law Office',
        meta_title_ar: 'فهم أساسيات القانون التجاري | مكتب متري للمحاماة',
        meta_description_en: 'Learn the fundamentals of commercial law including contracts, corporate governance, and commercial transactions. Expert insights from MITRI Law Office.',
        meta_description_ar: 'تعرف على أساسيات القانون التجاري بما في ذلك العقود وحوكمة الشركات والمعاملات التجارية. رؤى خبيرة من مكتب متري للمحاماة.',
        meta_keywords_en: 'commercial law, business law, contracts, corporate governance, Damascus lawyer',
        meta_keywords_ar: 'القانون التجاري, قانون الأعمال, العقود, حوكمة الشركات, محامي دمشق',
        image: '/hero-bg.png'
    },
    {
        slug_en: 'protecting-intellectual-property-trademarks',
        slug_ar: 'حماية-الملكية-الفكرية-العلامات-التجارية',
        title_en: 'Protecting Your Intellectual Property: A Guide to Trademarks',
        title_ar: 'حماية ملكيتك الفكرية: دليل للعلامات التجارية',
        content_en: `
<p>In today's competitive business environment, intellectual property (IP) is often a company's most valuable asset. Trademarks, in particular, play a crucial role in distinguishing your products and services from competitors.</p>

<h2>What is a Trademark?</h2>
<p>A trademark is a recognizable sign, design, or expression that identifies products or services of a particular source from those of others. Trademarks can include words, phrases, symbols, designs, or a combination of these elements.</p>

<h2>Why Register Your Trademark?</h2>

<h3>Legal Protection</h3>
<p>Registered trademarks provide legal protection against unauthorized use by competitors. This gives you the exclusive right to use the mark in connection with your goods or services.</p>

<h3>Brand Value</h3>
<p>A registered trademark becomes a valuable business asset that can appreciate over time. It can be licensed, franchised, or sold as part of your business.</p>

<h3>Consumer Trust</h3>
<p>Trademarks help consumers identify the source of products and services, building trust and loyalty over time.</p>

<h2>The Registration Process</h2>
<p>Trademark registration involves several steps: conducting a search to ensure your mark is unique, filing an application with the appropriate authority, and responding to any objections or oppositions.</p>

<h2>Protecting Your Rights</h2>
<p>Once registered, trademark owners must actively protect their rights by monitoring for infringement and taking appropriate legal action when necessary.</p>

<h2>Get Expert Help</h2>
<p>The trademark registration process can be complex. MITRI Law Office specializes in intellectual property law and can guide you through every step of protecting your valuable brand assets.</p>
    `,
        content_ar: `
<p>في بيئة الأعمال التنافسية اليوم، غالباً ما تكون الملكية الفكرية أهم أصول الشركة. العلامات التجارية على وجه الخصوص تلعب دوراً حاسماً في تمييز منتجاتك وخدماتك عن المنافسين.</p>

<h2>ما هي العلامة التجارية؟</h2>
<p>العلامة التجارية هي علامة أو تصميم أو تعبير يمكن التعرف عليه ويحدد منتجات أو خدمات مصدر معين من غيرها. يمكن أن تشمل العلامات التجارية الكلمات والعبارات والرموز والتصاميم أو مزيج من هذه العناصر.</p>

<h2>لماذا تسجل علامتك التجارية؟</h2>

<h3>الحماية القانونية</h3>
<p>توفر العلامات التجارية المسجلة حماية قانونية ضد الاستخدام غير المصرح به من قبل المنافسين. هذا يمنحك الحق الحصري في استخدام العلامة فيما يتعلق بسلعك أو خدماتك.</p>

<h3>قيمة العلامة التجارية</h3>
<p>تصبح العلامة التجارية المسجلة أصلاً تجارياً قيماً يمكن أن يزداد قيمة بمرور الوقت. يمكن ترخيصها أو منحها حق الامتياز أو بيعها كجزء من عملك.</p>

<h3>ثقة المستهلك</h3>
<p>تساعد العلامات التجارية المستهلكين على تحديد مصدر المنتجات والخدمات، وبناء الثقة والولاء بمرور الوقت.</p>

<h2>عملية التسجيل</h2>
<p>يتضمن تسجيل العلامة التجارية عدة خطوات: إجراء بحث للتأكد من أن علامتك فريدة، وتقديم طلب إلى السلطة المختصة، والرد على أي اعتراضات.</p>

<h2>حماية حقوقك</h2>
<p>بمجرد التسجيل، يجب على مالكي العلامات التجارية حماية حقوقهم بنشاط من خلال مراقبة الانتهاكات واتخاذ الإجراءات القانونية المناسبة عند الضرورة.</p>

<h2>احصل على مساعدة خبير</h2>
<p>يمكن أن تكون عملية تسجيل العلامة التجارية معقدة. مكتب متري للمحاماة متخصص في قانون الملكية الفكرية ويمكنه إرشادك خلال كل خطوة لحماية أصول علامتك التجارية القيمة.</p>
    `,
        meta_title_en: 'Protecting Intellectual Property: Trademark Guide | MITRI Law Office',
        meta_title_ar: 'حماية الملكية الفكرية: دليل العلامات التجارية | مكتب متري للمحاماة',
        meta_description_en: 'Learn how to protect your intellectual property through trademark registration. Expert guidance from MITRI Law Office in Damascus.',
        meta_description_ar: 'تعرف على كيفية حماية ملكيتك الفكرية من خلال تسجيل العلامات التجارية. إرشادات خبيرة من مكتب متري للمحاماة في دمشق.',
        meta_keywords_en: 'intellectual property, trademark, IP protection, brand protection, Syria trademark',
        meta_keywords_ar: 'الملكية الفكرية, علامة تجارية, حماية الملكية الفكرية, حماية العلامة التجارية',
        image: '/hero-bg.png'
    },
    {
        slug_en: 'corporate-legal-compliance-essentials',
        slug_ar: 'اساسيات-الامتثال-القانوني-للشركات',
        title_en: 'Corporate Legal Compliance: What Every Business Must Know',
        title_ar: 'الامتثال القانوني للشركات: ما يجب أن تعرفه كل شركة',
        content_en: `
<p>Corporate legal compliance refers to the process of ensuring that a company and its employees follow all applicable laws, regulations, and ethical standards. In an increasingly regulated business environment, maintaining compliance is not just good practice—it's essential for survival.</p>

<h2>Key Areas of Corporate Compliance</h2>

<h3>1. Regulatory Compliance</h3>
<p>Businesses must comply with industry-specific regulations, licensing requirements, and governmental oversight. This includes everything from environmental regulations to consumer protection laws.</p>

<h3>2. Employment Law</h3>
<p>Companies must adhere to labor laws governing hiring practices, workplace safety, employee rights, and termination procedures. Non-compliance can result in costly lawsuits and reputational damage.</p>

<h3>3. Data Protection</h3>
<p>With the increasing importance of data in business operations, companies must ensure they handle personal and business data in compliance with privacy laws and regulations.</p>

<h3>4. Financial Compliance</h3>
<p>Accurate financial reporting, tax compliance, and anti-money laundering measures are critical components of corporate compliance.</p>

<h2>Building a Compliance Program</h2>

<h3>Risk Assessment</h3>
<p>The first step in building a compliance program is identifying the legal and regulatory risks specific to your business.</p>

<h3>Policies and Procedures</h3>
<p>Develop clear policies and procedures that address identified risks and ensure employees understand their compliance obligations.</p>

<h3>Training and Communication</h3>
<p>Regular training ensures employees stay informed about compliance requirements and understand the consequences of non-compliance.</p>

<h3>Monitoring and Auditing</h3>
<p>Continuous monitoring and regular audits help identify compliance gaps before they become serious problems.</p>

<h2>The Cost of Non-Compliance</h2>
<p>Non-compliance can result in significant fines, legal action, reputational damage, and in severe cases, criminal prosecution of company officers.</p>

<h2>Expert Legal Support</h2>
<p>MITRI Law Office provides comprehensive corporate compliance services, helping businesses navigate complex regulatory requirements and build robust compliance programs.</p>
    `,
        content_ar: `
<p>يشير الامتثال القانوني للشركات إلى عملية ضمان أن الشركة وموظفيها يتبعون جميع القوانين واللوائح والمعايير الأخلاقية المعمول بها. في بيئة أعمال تزداد تنظيماً، الحفاظ على الامتثال ليس مجرد ممارسة جيدة - إنه ضروري للبقاء.</p>

<h2>المجالات الرئيسية للامتثال المؤسسي</h2>

<h3>1. الامتثال التنظيمي</h3>
<p>يجب على الشركات الامتثال للوائح الخاصة بالصناعة ومتطلبات الترخيص والرقابة الحكومية. يشمل هذا كل شيء من اللوائح البيئية إلى قوانين حماية المستهلك.</p>

<h3>2. قانون العمل</h3>
<p>يجب على الشركات الالتزام بقوانين العمل التي تحكم ممارسات التوظيف وسلامة مكان العمل وحقوق الموظفين وإجراءات الإنهاء. يمكن أن يؤدي عدم الامتثال إلى دعاوى قضائية مكلفة وأضرار بالسمعة.</p>

<h3>3. حماية البيانات</h3>
<p>مع تزايد أهمية البيانات في العمليات التجارية، يجب على الشركات ضمان تعاملها مع البيانات الشخصية والتجارية وفقاً لقوانين ولوائح الخصوصية.</p>

<h3>4. الامتثال المالي</h3>
<p>التقارير المالية الدقيقة والامتثال الضريبي وتدابير مكافحة غسيل الأموال هي مكونات حاسمة للامتثال المؤسسي.</p>

<h2>بناء برنامج الامتثال</h2>

<h3>تقييم المخاطر</h3>
<p>الخطوة الأولى في بناء برنامج الامتثال هي تحديد المخاطر القانونية والتنظيمية الخاصة بعملك.</p>

<h3>السياسات والإجراءات</h3>
<p>تطوير سياسات وإجراءات واضحة تعالج المخاطر المحددة وتضمن فهم الموظفين لالتزاماتهم بالامتثال.</p>

<h3>التدريب والتواصل</h3>
<p>يضمن التدريب المنتظم بقاء الموظفين على علم بمتطلبات الامتثال وفهم عواقب عدم الامتثال.</p>

<h3>المراقبة والتدقيق</h3>
<p>تساعد المراقبة المستمرة والتدقيقات المنتظمة في تحديد ثغرات الامتثال قبل أن تصبح مشاكل خطيرة.</p>

<h2>تكلفة عدم الامتثال</h2>
<p>يمكن أن يؤدي عدم الامتثال إلى غرامات كبيرة وإجراءات قانونية وأضرار بالسمعة، وفي الحالات الشديدة، الملاحقة الجنائية لمسؤولي الشركة.</p>

<h2>دعم قانوني خبير</h2>
<p>يقدم مكتب متري للمحاماة خدمات شاملة للامتثال المؤسسي، لمساعدة الشركات على التنقل في المتطلبات التنظيمية المعقدة وبناء برامج امتثال قوية.</p>
    `,
        meta_title_en: 'Corporate Legal Compliance Essentials | MITRI Law Office',
        meta_title_ar: 'أساسيات الامتثال القانوني للشركات | مكتب متري للمحاماة',
        meta_description_en: 'Essential guide to corporate legal compliance. Learn about regulatory requirements and how to build an effective compliance program.',
        meta_description_ar: 'دليل أساسي للامتثال القانوني للشركات. تعرف على المتطلبات التنظيمية وكيفية بناء برنامج امتثال فعال.',
        meta_keywords_en: 'corporate compliance, legal compliance, regulatory compliance, business law, Syria',
        meta_keywords_ar: 'امتثال الشركات, الامتثال القانوني, الامتثال التنظيمي, قانون الأعمال',
        image: '/hero-bg.png'
    },
    {
        slug_en: 'contract-drafting-best-practices',
        slug_ar: 'افضل-ممارسات-صياغة-العقود',
        title_en: 'Contract Drafting Best Practices: Protecting Your Business Interests',
        title_ar: 'أفضل ممارسات صياغة العقود: حماية مصالحك التجارية',
        content_en: `
<p>A well-drafted contract is the foundation of any successful business relationship. Whether you're entering into a partnership, hiring employees, or engaging vendors, the contract sets the terms that will govern the relationship.</p>

<h2>Essential Elements of a Strong Contract</h2>

<h3>1. Clear Identification of Parties</h3>
<p>Every contract should clearly identify all parties involved, including their legal names and addresses. For businesses, this includes the legal entity name and registration details.</p>

<h3>2. Precise Terms and Conditions</h3>
<p>Ambiguity is the enemy of good contracts. Use clear, precise language to define obligations, deliverables, timelines, and payment terms.</p>

<h3>3. Consideration</h3>
<p>A valid contract requires consideration—something of value exchanged between the parties. This should be clearly stated.</p>

<h3>4. Dispute Resolution</h3>
<p>Include provisions for how disputes will be resolved, whether through negotiation, mediation, arbitration, or litigation.</p>

<h3>5. Termination Clauses</h3>
<p>Define the conditions under which the contract can be terminated by either party and the consequences of termination.</p>

<h2>Common Contract Mistakes</h2>

<h3>Using Generic Templates</h3>
<p>While templates can be a starting point, every business relationship is unique. Contracts should be tailored to specific circumstances.</p>

<h3>Ignoring Local Laws</h3>
<p>Contracts must comply with applicable local laws and regulations. What's enforceable in one jurisdiction may not be in another.</p>

<h3>Failing to Update</h3>
<p>Business relationships evolve. Contracts should be reviewed and updated regularly to reflect changed circumstances.</p>

<h2>The Value of Professional Drafting</h2>
<p>A contract drafted by a qualified attorney protects your interests and reduces the risk of costly disputes. The upfront investment in professional contract drafting often saves significant money in the long run.</p>

<h2>Contract Services at MITRI Law Office</h2>
<p>Our experienced attorneys provide comprehensive contract services including drafting, review, negotiation, and dispute resolution. Contact us to ensure your business agreements are properly structured and legally sound.</p>
    `,
        content_ar: `
<p>العقد المصاغ جيداً هو أساس أي علاقة تجارية ناجحة. سواء كنت تدخل في شراكة أو توظف موظفين أو تتعاقد مع موردين، فإن العقد يحدد الشروط التي ستحكم العلاقة.</p>

<h2>العناصر الأساسية للعقد القوي</h2>

<h3>1. تحديد واضح للأطراف</h3>
<p>يجب أن يحدد كل عقد بوضوح جميع الأطراف المعنية، بما في ذلك أسمائهم القانونية وعناوينهم. بالنسبة للشركات، يشمل ذلك اسم الكيان القانوني وتفاصيل التسجيل.</p>

<h3>2. شروط وأحكام دقيقة</h3>
<p>الغموض هو عدو العقود الجيدة. استخدم لغة واضحة ودقيقة لتحديد الالتزامات والمخرجات والجداول الزمنية وشروط الدفع.</p>

<h3>3. المقابل</h3>
<p>يتطلب العقد الصحيح مقابلاً - شيئاً ذا قيمة يتم تبادله بين الأطراف. يجب ذكر هذا بوضوح.</p>

<h3>4. حل النزاعات</h3>
<p>قم بتضمين أحكام لكيفية حل النزاعات، سواء من خلال التفاوض أو الوساطة أو التحكيم أو التقاضي.</p>

<h3>5. شروط الإنهاء</h3>
<p>حدد الشروط التي يمكن بموجبها إنهاء العقد من قبل أي طرف وعواقب الإنهاء.</p>

<h2>أخطاء العقود الشائعة</h2>

<h3>استخدام قوالب عامة</h3>
<p>بينما يمكن أن تكون القوالب نقطة بداية، كل علاقة تجارية فريدة. يجب تخصيص العقود للظروف المحددة.</p>

<h3>تجاهل القوانين المحلية</h3>
<p>يجب أن تمتثل العقود للقوانين واللوائح المحلية المعمول بها. ما هو قابل للتنفيذ في ولاية قضائية واحدة قد لا يكون كذلك في أخرى.</p>

<h3>الفشل في التحديث</h3>
<p>العلاقات التجارية تتطور. يجب مراجعة العقود وتحديثها بانتظام لتعكس الظروف المتغيرة.</p>

<h2>قيمة الصياغة المهنية</h2>
<p>العقد الذي يصيغه محامٍ مؤهل يحمي مصالحك ويقلل من مخاطر النزاعات المكلفة. غالباً ما يوفر الاستثمار المسبق في صياغة العقود المهنية أموالاً كبيرة على المدى الطويل.</p>

<h2>خدمات العقود في مكتب متري للمحاماة</h2>
<p>يقدم محامونا ذوو الخبرة خدمات عقود شاملة تشمل الصياغة والمراجعة والتفاوض وحل النزاعات. تواصل معنا للتأكد من أن اتفاقياتك التجارية مهيكلة بشكل صحيح وسليمة قانونياً.</p>
    `,
        meta_title_en: 'Contract Drafting Best Practices | MITRI Law Office',
        meta_title_ar: 'أفضل ممارسات صياغة العقود | مكتب متري للمحاماة',
        meta_description_en: 'Learn contract drafting best practices to protect your business. Expert contract services from MITRI Law Office in Damascus.',
        meta_description_ar: 'تعرف على أفضل ممارسات صياغة العقود لحماية عملك. خدمات عقود متخصصة من مكتب متري للمحاماة في دمشق.',
        meta_keywords_en: 'contract drafting, business contracts, legal agreements, contract lawyer, Damascus',
        meta_keywords_ar: 'صياغة العقود, عقود الأعمال, الاتفاقيات القانونية, محامي عقود, دمشق',
        image: '/hero-bg.png'
    }
];

async function seedLawArticles() {
    console.log('Seeding law articles...');

    for (const article of lawArticles) {
        try {
            await prisma.article.upsert({
                where: { slug_en: article.slug_en },
                update: article,
                create: article
            });
            console.log(`Created/Updated article: ${article.title_en}`);
        } catch (error) {
            console.error(`Error creating article ${article.title_en}:`, error);
        }
    }

    console.log('Law articles seeding complete!');
}

seedLawArticles()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
