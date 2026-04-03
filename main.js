document.addEventListener('DOMContentLoaded', () => {

    // Skills Data (Extracted from VijayGalla_ResumeUIP.pdf)
    const skills = [
        {
            category: "RPA Tools",
            icon: "fas fa-robot",
            items: ["UiPath", "Power Automate", "Automation Anywhere", "Win Automation", "Blue Prism"]
        },
        {
            category: "Certifications",
            icon: "fas fa-certificate",
            items: [
                "Microsoft Power Automate RPA Developer - PL 500",
                "Microsoft Azure AI Engineer Associate",
                "AI builder with N8N - Agents and voice agents certificate",
                "RPA Developer UIPath foundation",
                "Uipath advanced Developer certification",
                "Uipath SAP Automation",
                "Automation Anywhere - Advanced RPA professional"
            ]
        },
        {
            category: "AI & Machine Learning",
            icon: "fas fa-brain",
            items: ["Intelligent Document Processing (IDP)", "NLP", "IXP", "Auto Pilot", "Cloud Native API Integration"]
        },
        {
            category: "ERP & Databases",
            icon: "fas fa-database",
            items: ["SAP BW/BPC/HANA", "Oracle", "Mainframe", "Salesforce", "MySQL", "ECC"]
        },
        {
            category: "Frameworks & Methodologies",
            icon: "fas fa-layer-group",
            items: ["TensorFlow", "Keras", "PyTorch", "Robotics Enterprise Framework", "SDLC", "Agile"]
        },
        {
            category: "Programming & Scripts",
            icon: "fas fa-code",
            items: ["JavaScript", "Python", "VB.NET", "JSON", "AngularJS", "Shell Script"]
        },
        {
            category: "Industry Domain",
            icon: "fas fa-building",
            items: ["Financial", "Insurance", "Healthcare", "Telecommunication", "Retail", "Airlines"]
        }
    ];

    // Leadership Data (Extracted from VijayGalla_AI_RPAPM.docx)
    const leadershipPoints = [
        {
            title: "Strategic Enterprise Automation",
            icon: "fas fa-chart-line",
            desc: "Led enterprise automation initiatives delivering $2M+ savings and 20 FTE reduction across RPA & ERP Cloud implementations."
        },
        {
            title: "AI/ML Architectural Integration",
            icon: "fas fa-microchip",
            desc: "Architected intelligent automation solutions integrating AI/ML (GPT, LLMs) with RPA for document extraction and Agentic AI-driven decision-making."
        },
        {
            title: "Center of Excellence Builder",
            icon: "fas fa-users-cog",
            desc: "Established Centers of Excellence (COE) for automation governance, managing vendor partnerships, and delivering citizen developer training programs."
        },
        {
            title: "Cross-Functional Leadership",
            icon: "fas fa-network-wired",
            desc: "Directed end-to-end project delivery using Agile methodologies, managing cross-functional engineering teams across diverse tech landscapes."
        }
    ];

    // Experience Data
    const experienceData = [
        {
            role: "Automation Manager & Lead RPA Developer",
            company: "Pacific Dental Health",
            date: "Jul 2025 – Present",
            details: [
                "Managed vendor partnerships for dental insurance automation, leading a program with $600K savings annually.",
                "Automated EHR applications like EPIC using UiPath, deploying 10+ robots and achieving 80% reduction in manual time.",
                "Piloted Document Understanding and IXP/AI builder using AI prompts and Agentic AI to extract insights and classify content."
            ]
        },
        {
            role: "Intelligent Automation Lead / Sr. Developer",
            company: "Southwest Airlines",
            date: "Jan 2024 – Jun 2025",
            details: [
                "Managed end-to-end automation program from inception through deployment across multiple engineering teams.",
                "Led Power Platform engineering initiatives automating Flight Tracker and Ground Operations using AI/ML for document extraction.",
                "Boosted data extraction accuracy by 30% through AI-driven OCR models and generative AI prompts."
            ]
        },
        {
            role: "Robotics Lead Engineer",
            company: "Hach Company",
            date: "Jun 2021 – Jan 2024",
            details: [
                "Led delivery of 15-project program achieving $1M cost savings across Oracle, SAP, Workday, and Legacy systems.",
                "Established COE teams to manage govern Human Resource and Payroll Platforms integration.",
                "Built AI models for document OCR processing, improving structured data automation."
            ]
        },
        {
            role: "RPA Lead Analyst",
            company: "AT&T, Inc.",
            date: "Feb 2020 – Jun 2021",
            details: [
                "Led engineering program to centralize automation practices across Telecom division.",
                "Designed reusable flows in Automation Anywhere frameworks, reducing processing errors by 40%.",
                "Coordinated over 20 concurrent cross-functional initiatives managing interdependencies enterprise-wide."
            ]
        },
        {
            role: "Robotics Lead Engineer",
            company: "JP Morgan Chase",
            date: "Oct 2018 – Feb 2020",
            details: [
                "Led engineering program for Home Lending & Mortgage Banking integrating SAP and Mainframe systems.",
                "Drove stakeholder alignment across engineering, compliance, and operations teams.",
                "Facilitated Architecture Review (ARD) along with designed Process, Technical Solution Design Documents."
            ]
        },
        {
            role: "RPA Engineer",
            company: "PepsiCo, Inc",
            date: "Nov 2017 – Oct 2018",
            details: [
                "Led inventory automation for Frito-Lay with the ERP SAP and Mainframes systems. Managed 10 BOR.",
                "Developed automation program monitoring Frito-Lay inventory systems.",
                "Implemented role-based access control (RBAC) and managed secrets with Azure Key Vault in Azure DevOps."
            ]
        },
        {
            role: "RPA Business Analyst",
            company: "Comcast Corporation",
            date: "Apr 2016 – Oct 2017",
            details: [
                "Headed the Automation of entire Payroll and the Expenses process aligning SAP.",
                "Led Payroll and Expenses automation program aligning ERP systems SuccessFactors, SAP BW, WEBI reports."
            ]
        },
        {
            role: "SAP Automation Lead",
            company: "Bank of America Corporation",
            date: "Jun 2013 – Apr 2016",
            details: [
                "Automated SAP ETL data load jobs from ECC to BW to meet the 15 mins SLAs to manage 1000 batch jobs daily.",
                "Led engineering program automating SAP ETL data workflows across daily, monthly, quarterly, and yearly cycles."
            ]
        }
    ];

    // Education Data
    const educationData = [
        {
            degree: "Master of Science, Information Systems",
            university: "Griffith University, Aus",
            icon: "fas fa-graduation-cap"
        },
        {
            degree: "Bachelor of Science, Computer Science",
            university: "Jawaharlal Nehru Technology University, Ind",
            icon: "fas fa-university"
        }
    ];


    // Populate Skills
    const skillsContainer = document.getElementById('skills-container');
    skills.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'skill-card animate-on-scroll';

        let tagsHtml = skill.items.map(item => `<span class="skill-tag">${item}</span>`).join('');

        card.innerHTML = `
            <i class="${skill.icon} skill-icon"></i>
            <h3>${skill.category}</h3>
            <div class="skill-list">
                ${tagsHtml}
            </div>
        `;
        skillsContainer.appendChild(card);
    });

    // Populate Leadership
    const leadershipContainer = document.getElementById('leadership-container');
    leadershipPoints.forEach(point => {
        const item = document.createElement('div');
        item.className = 'leadership-item animate-on-scroll';

        item.innerHTML = `
            <i class="${point.icon}"></i>
            <div>
                <h4>${point.title}</h4>
                <p>${point.desc}</p>
            </div>
        `;
        leadershipContainer.appendChild(item);
    });

    // Populate Experience Timeline
    const expContainer = document.getElementById('experience-container');
    experienceData.forEach(job => {
        const item = document.createElement('div');
        item.className = 'timeline-item animate-on-scroll';

        let detailsHtml = job.details.map(detail => `<li>${detail}</li>`).join('');

        item.innerHTML = `
            <div class="timeline-content">
                <span class="timeline-date">${job.date}</span>
                <h3>${job.company}</h3>
                <div class="timeline-role">${job.role}</div>
                <ul>
                    ${detailsHtml}
                </ul>
            </div>
        `;
        expContainer.appendChild(item);
    });

    // Populate Education
    const eduContainer = document.getElementById('education-container');
    if (eduContainer) {
        educationData.forEach(edu => {
            const card = document.createElement('div');
            card.className = 'education-card animate-on-scroll';

            card.innerHTML = `
                <i class="${edu.icon} education-icon"></i>
                <h3>${edu.degree}</h3>
                <p>${edu.university}</p>
            `;
            eduContainer.appendChild(card);
        });
    }

    // Scroll Animation Observer (Micro-animations)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    // Smooth Scrolling for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
