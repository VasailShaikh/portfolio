import React, { useState, useEffect, useRef } from 'react';
import './App.css'

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState('');
    const [visibleElements, setVisibleElements] = useState(new Set());

    useEffect(() => {
        // Intersection Observer for fade-in animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleElements((prev) => new Set([...prev, entry.target.id]));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.fade-in').forEach((el, i) => {
            el.id = el.id || `fade-${i}`;
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        // Active nav highlight on scroll
        const handleScroll = () => {
            const sections = ['hero', 'role', 'history', 'skills', 'links', 'contact'];
            let current = '';

            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (section && window.scrollY >= section.offsetTop - 120) {
                    current = id;
                }
            });

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isFadeInVisible = (id) => visibleElements.has(id);

    return (
        <div className="portfolio">
            

            {/* NAV */}
            <nav>
                <div className="nav-logo"><span>Vasail.Portfolio</span></div>
                <ul className="nav-links">
                    <li><a href="#role" className={activeSection === 'role' ? 'active' : ''}>Current Role</a></li>
                    <li><a href="#history" className={activeSection === 'history' ? 'active' : ''}>Work History</a></li>
                    <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
                    <li><a href="#links" className={activeSection === 'links' ? 'active' : ''}>Links</a></li>
                    <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
                </ul>
            </nav>

            {/* HERO */}
            <section id="hero">
                <div className="hero-bg"></div>
                <div className="hero-grid">
                    <div className="hero-left">
                        <div className="hero-eyebrow">Specialist Software Engineer</div>
                        <h1>Mohammed<br /><em>Vasail</em><br />Shaikh</h1>
                        <p className="hero-desc">
                            <strong>Fullstack engineer with </strong>
                            <strong style={{ color: 'var(--text)' }} className="stat-label">Over 7 years</strong>
                            <strong> of expertise building scalable applications across the</strong>
                            <strong style={{ color: 'var(--text)' }} className="stat-label">.NET ecosystem</strong>
                            <strong>, Microsoft Azure, and modern web technologies. Clean code advocate. AI-assisted development enthusiast.</strong>
                        </p>
                        <div className="hero-cta">
                            <a href="#contact" className="btn-primary">Get in touch →</a>
                            <a href="#history" className="btn-outline">View experience</a>
                        </div>
                    </div>
                    <div className="hero-right">
                        <div className="stat-row">
                            <div className="stat-card">
                                <div className="stat-num"><span>Over 7</span></div>
                                <div className="stat-label">Years of experience</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-num"><span>3</span></div>
                                <div className="stat-label"><strong>Companies & domains</strong></div>
                            </div>
                        </div>
                        <div className="stat-row">
                            <div className="stat-card">
                                <div className="stat-num"><span>40%</span></div>
                                <div className="stat-label"><strong>Scalability boost delivered</strong></div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-num"><span>99.9%</span></div>
                                <div className="stat-label"><strong>Uptime SLA achieved</strong></div>
                            </div>
                        </div>
                        <div className="location-badge">
                            <div className="dot"></div>
                            Mumbai, India · Open to opportunities
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-divider"></div>

            {/* CURRENT ROLE */}
            <section id="role">
                <div className="section-label">Current Role</div>
                <h2>Where I work today</h2>
                <div className={`current-role-card fade-in ${isFadeInVisible('role-card') ? 'visible' : ''}`} id="role-card">
                    <div className="role-header">
                        <div>
                            <div className="company-badge">● LTIMindtree</div>
                            <div className="role-title">Specialist Software Engineer</div>
                            <div className="role-meta">
                                <span>📍 Mumbai, India</span>
                                <span>🗓 Nov 2022 – Present</span>
                            </div>
                        </div>
                    </div>
                    <div className="impact-grid">
                        <div className="impact-item">
                            <div className="impact-num">40%</div>
                            <div className="impact-desc">Scalability improvement</div>
                        </div>
                        <div className="impact-item">
                            <div className="impact-num">50%</div>
                            <div className="impact-desc">Deployment time reduced</div>
                        </div>
                        <div className="impact-item">
                            <div className="impact-num">25%</div>
                            <div className="impact-desc">Performance gain via cloud migration</div>
                        </div>
                    </div>
                    <ul className="role-bullets">
                        <li>Delivered multiple web-based applications from scratch using .NET Core, improving scalability by 40% and reducing deployment time by 50% through Azure automated CI/CD pipelines.</li>
                        <li>Led cloud migration of legacy applications to Azure and .NET Core — improved performance by 25% and achieved 99.9% uptime SLA.</li>
                        <li>Designed RESTful generic APIs in Microservice Architecture to automate bidirectional data flow between applications and SAP.</li>
                        <li>Automated daily and monthly analysis reports using Microsoft SSRS.</li>
                        <li>Developed Generic APIs for SharePoint file download/upload; migrated physical store files to SharePoint without application disruption.</li>
                        <li>Mentored junior developers on coding best practices and cloud architecture.</li>
                    </ul>
                    <div className="tags">
                        <span className="tag">.NET Core</span>
                        <span className="tag">Azure CI/CD</span>
                        <span className="tag">Microservices</span>
                        <span className="tag">REST API</span>
                        <span className="tag">SSRS</span>
                        <span className="tag">SharePoint</span>
                        <span className="tag">SAP Integration</span>
                    </div>
                </div>
            </section>

            <div className="section-divider"></div>

            {/* WORK HISTORY */}
            <section id="history">
                <div className="section-label">Work History</div>
                <h2>Career journey</h2>
                <div className="timeline">
                    <div className={`timeline-item fade-in ${isFadeInVisible('history-1') ? '' : ''}`} id="history-1">
                        <div className={`timeline-card ${isFadeInVisible('history-1') ? 'visible' : ''}`}>
                            <div className="timeline-header">
                                <div>
                                    <div className="timeline-role">Software Developer</div>
                                    <div className="timeline-company">Birlasoft</div>
                                </div>
                                <div className="timeline-period">Jan 2021 – Sep 2022</div>
                            </div>
                            <ul className="timeline-bullets">
                                <li>Developed two web applications (EoDB & MahaWaqf) from scratch using ASP.NET MVC and Dapper ORM, delivering 10+ citizen services across 4 major releases.</li>
                                <li>Implemented digital signature functionality using iTextSharp library.</li>
                                <li>Resolved vulnerabilities from VAPT audits, strengthening security posture.</li>
                                <li>Supported go-live by resolving 95% of critical incidents within SLA.</li>
                                <li>Replaced Aspose with Spire.Doc for Word/HTML to PDF generation — saved ~$1,190/year in licensing.</li>
                                <li>Optimised database queries, procedures, and indexing — improved average execution time by 30%.</li>
                            </ul>
                            <div className="tags">
                                <span className="tag">ASP.NET MVC</span>
                                <span className="tag">Dapper ORM</span>
                                <span className="tag">iTextSharp</span>
                                <span className="tag">VAPT</span>
                                <span className="tag">SMTP</span>
                                <span className="tag">SQL Optimisation</span>
                            </div>
                        </div>
                    </div>

                    <div className={`timeline-item fade-in ${isFadeInVisible('history-2') ? '' : ''}`} id="history-2">
                        <div className={`timeline-card ${isFadeInVisible('history-2') ? 'visible' : ''}`}>
                            <div className="timeline-header">
                                <div>
                                    <div className="timeline-role">Software Developer</div>
                                    <div className="timeline-company">FitnessForce Gym Management Software</div>
                                </div>
                                <div className="timeline-period">Feb 2019 – Oct 2020</div>
                            </div>
                            <ul className="timeline-bullets">
                                <li>Developed new modules for an existing SaaS application using .NET MVC and MySQL, serving 50+ fitness centers across India and the Middle East.</li>
                                <li>Integrated the SaaS application with Oracle Fusion for KSA and UAE customers.</li>
                                <li>Developed automated reports via console application for respective stakeholders.</li>
                                <li>Participated in daily stand-ups, sprint planning, and retrospectives in an Agile/Scrum environment.</li>
                            </ul>
                            <div className="tags">
                                <span className="tag">.NET MVC</span>
                                <span className="tag">MySQL</span>
                                <span className="tag">Oracle Fusion</span>
                                <span className="tag">SaaS</span>
                                <span className="tag">Agile/Scrum</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-divider"></div>

            {/* SKILLS */}
            <section id="skills">
                <div className="section-label">Technical Skills</div>
                <h2>What I work with</h2>
                <div className={`skills-grid fade-in ${isFadeInVisible('skills-grid') ? 'visible' : ''}`} id="skills-grid">
                    <div className="skill-group">
                        <div className="skill-group-title">Languages</div>
                        <div className="skill-pills">
                            <span className="skill-pill">C#</span>
                            <span className="skill-pill">JavaScript</span>
                            <span className="skill-pill">SQL</span>
                            <span className="skill-pill">HTML5</span>
                            <span className="skill-pill">CSS3</span>
                        </div>
                    </div>
                    <div className="skill-group">
                        <div className="skill-group-title">Frameworks & Libraries</div>
                        <div className="skill-pills">
                            <span className="skill-pill">.NET Core</span>
                            <span className="skill-pill">ASP.NET MVC</span>
                            <span className="skill-pill">Entity Framework</span>
                            <span className="skill-pill">ADO.NET</span>
                            <span className="skill-pill">React</span>
                        </div>
                    </div>
                    <div className="skill-group">
                        <div className="skill-group-title">Cloud & DevOps</div>
                        <div className="skill-pills">
                            <span className="skill-pill">Azure App Services</span>
                            <span className="skill-pill">Azure Functions</span>
                            <span className="skill-pill">Azure SQL</span>
                            <span className="skill-pill">Blob Storage</span>
                            <span className="skill-pill">CI/CD Pipelines</span>
                        </div>
                    </div>
                    <div className="skill-group">
                        <div className="skill-group-title">Tools</div>
                        <div className="skill-pills">
                            <span className="skill-pill">Visual Studio</span>
                            <span className="skill-pill">MS SQL Server</span>
                            <span className="skill-pill">VS Code</span>
                            <span className="skill-pill">SSRS</span>
                            <span className="skill-pill">Git</span>
                            <span className="skill-pill">BitBucket</span>
                            <span className="skill-pill">Jira</span>
                            <span className="skill-pill">Swagger</span>
                            <span className="skill-pill">Postman</span>
                            <span className="skill-pill">Burp Suite</span>
                        </div>
                    </div>
                    <div className="skill-group">
                        <div className="skill-group-title">Certifications</div>
                        <div className="cert-grid" style={{ marginTop: 0 }}>
                            <span className="cert-badge">AZ-900</span>
                            <span className="cert-badge">Claude 101</span>
                            <span className="cert-badge">HP-Critical Thinking in the AI Era</span>
                            <span className="cert-badge">Intel AI Aware and Appreciate Badges</span>
                            <span className="cert-badge">OCI 2025 AI Foundation</span>
                            <span className="cert-badge">AWS Cloud Economics</span>
                            <span className="cert-badge">Google Analytics</span>
                            <span className="cert-badge">Ethics in GenAI</span>
                            <span className="cert-badge">TCS iON Career Edge - Young Professional</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-divider"></div>

            {/* LINKS */}
            <section id="links">
                <div className="section-label">Professional Links</div>
                <h2>Find me online</h2>
                <div className={`links-grid fade-in ${isFadeInVisible('links-grid') ? 'visible' : ''}`} id="links-grid">
                    <a className="link-card" href="https://www.linkedin.com/in/mohammad-vasail-shaikh-165b9b214/" target="_blank" rel="noopener noreferrer">
                        <div className="link-icon" style={{ background: 'rgba(0,119,181,0.15)' }}>💼</div>
                        <div>
                            <div className="link-name">LinkedIn</div>
                            <div className="link-url">mohammad-vasail-shaikh</div>
                        </div>
                        <div className="link-arrow">↗</div>
                    </a>
                    <a className="link-card" href="https://github.com/VasailShaikh" target="_blank" rel="noopener noreferrer">
                        <div className="link-icon" style={{ background: 'rgba(255,255,255,0.06)' }}>🐙</div>
                        <div>
                            <div className="link-name">GitHub</div>
                            <div className="link-url">github.com/VasailShaikh</div>
                        </div>
                        <div className="link-arrow">↗</div>
                    </a>
                    <a className="link-card" href="https://www.naukri.com/mnjuser/profile" target="_blank" rel="noopener noreferrer">
                        <div className="link-icon" style={{ background: 'rgba(255,124,0,0.12)' }}>📋</div>
                        <div>
                            <div className="link-name">Naukri</div>
                            <div className="link-url">View profile on Naukri</div>
                        </div>
                        <div className="link-arrow">↗</div>
                    </a>
                </div>
            </section>

            <div className="section-divider"></div>

            {/* CONTACT */}
            <section id="contact">
                <div className="section-label">Contact</div>
                <h2>Let's talk</h2>
                <div className={`contact-grid fade-in ${isFadeInVisible('contact-grid') ? 'visible' : ''}`} id="contact-grid">
                    <a className="contact-item" href="tel:+918879914041">
                        <div className="contact-icon">📱</div>
                        <div>
                            <div className="contact-label">Phone</div>
                            <div className="contact-value">+91 88799 14041</div>
                        </div>
                    </a>
                    <a className="contact-item" href="mailto:shaikhvasail008@gmail.com">
                        <div className="contact-icon">✉️</div>
                        <div>
                            <div className="contact-label">Email</div>
                            <div className="contact-value">shaikhvasail008@gmail.com</div>
                        </div>
                    </a>
                   
                </div>
                <br></br>
                <div className={`contact-grid fade-in ${isFadeInVisible('contact-grid') ? 'visible' : ''}`} id="contact-grid">
                   
                    <div className="contact-item">
                        <div className="contact-icon">📍</div>
                        <div>
                            <div className="contact-label">Location</div>
                            <div className="contact-value">Mumbai, India</div>
                        </div>
                    </div>
                    <a className="contact-item" href="https://www.linkedin.com/in/mohammad-vasail-shaikh-165b9b214/" target="_blank" rel="noopener noreferrer">
                        <div className="contact-icon">💼</div>
                        <div>
                            <div className="contact-label">LinkedIn</div>
                            <div className="contact-value">Connect with me</div>
                        </div>
                    </a>
                </div>
            </section>

            {/* FOOTER */}
            <footer>
                <p>Built with care · Mohammed Vasail Shaikh · <span>Specialist Software Engineer</span> · Mumbai, India</p>
            </footer>
        </div>
    );
}
