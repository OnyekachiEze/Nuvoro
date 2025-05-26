import React from 'react';
import './NewsPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const BlogPage1 = () => {

    return (

        <div>
            <Navbar />
            <img src="../network-engineer.png" alt="Blog Background" className="blog-background" />
            <div className="blog-news-container">
                <h1 className="blog-news-title">Open Source Faces Rising Cybersecurity Threats</h1>

                <section className="news-blogheader">
                    <p>Open-source software has become a prime target in the escalating wave of cybersecurity threats. As attacks grow more sophisticated, the open-source community is racing to close critical security gaps and stop malicious code before it spreads. With open-source code used in most commercial software, infection risks are rampant across most industries.</p>

                    <blockquote>
                        It is indispensable and dangerously neglected,
                        remarked Jason Soroko, senior fellow at certificate lifecycle management firm Sectigo.
                        "With 86% of codebases harboring vulnerabilities and a tripling in open source file counts over four years, modern applications have increased their attack surfaces without adequate oversight."
                    </blockquote>

                    <p>He urged security teams to overhaul their strategies. Traditional package scanning misses over 20% of dependencies, exposing blind spots introduced by alternate coding practices and AI tools. Soroko says several recent reports offer more than just a wake-up call. They issue a mandate for proactive governance.</p>
                </section>

                <section className="news-blogheader">
                    <h2>Efforts to Tackle Open Source Threat Spike</h2>
                    <p>TuxCare’s 2025 Enterprise Linux and Open Source Landscape Report uncovered three significant trends this year that sparked a wake-up call for security experts and software users on all platforms.</p>

                    <blockquote>
                        "The report’s numerous other findings paint a picture of an open source and enterprise Linux space that’s experiencing ongoing innovation and disruption alongside ongoing security challenges," said TuxCare Chief Revenue Officer Michael Canavan.
                    </blockquote>

                    <p>Apiiro researchers detected and analyzed thousands of malicious code instances in software repositories. Millions of GitHub repositories were cloned and infected with malware loaders.</p>
                </section>

                <section className="news-blogheader">
                    <h2>Gaps in Perception Undermine Linux Security</h2>
                    <p>One major revelation in the TuxCare report is the misalignment between security professionals’ perceptions and the true threat landscape. Roughly half believed vulnerability volumes remained stable in 2024 compared to 2023. However, data shows a 25% increase overall and a staggering 12-fold increase in Linux-specific vulnerabilities.</p>

                    <blockquote>
                        "Organizations must move beyond reactive thinking and implement continuous vulnerability scanning, threat intelligence integration, and transparent reporting. You can’t secure what you don’t accurately understand," said Canavan.
                    </blockquote>

                    <p>The report noted a significant drop in confidence in open-source supply chain security — from 23.81% to 12.31% — reflecting increased awareness of attacks such as the XZ backdoor incident.</p>
                </section>

                <section className="news-blogheader">
                    <h2>More Key Findings in the TuxCare Cyber Report</h2>
                    <ul>
                        <li>Reliance on full automation dropped from 14.48% to 2.56%, showing the need for human oversight.</li>
                        <li>The CrowdStrike incident highlighted the financial consequences of security breaches.</li>
                        <li>AI is now adopted more for cost reduction than innovation, shifting its enterprise role.</li>
                    </ul>
                </section>

                <section className="news-blogheader">
                    <h2>New Tools Aim To Detect Malicious Code Early</h2>
                    <p>Apiiro introduced two new tools to reduce costs and increase detection:</p>
                    <ul>
                        <li><strong>Semgrep rules:</strong> Detect dynamic code execution and obfuscation patterns.</li>
                        <li><strong>Prevent:</strong> Real-time monitoring of pull requests, enforcing policies.</li>
                    </ul>

                    <blockquote>
                        "Binary analysis tools detect malware in compiled code. Static analysis scans for vulnerabilities, but they miss malicious code inserted during development," said Giladi from Apiiro.
                    </blockquote>
                </section>

                <section className="news-blogheader">
                    <h2>Reducing False Positives in Threat Detection</h2>
                    <p>Apiiro’s approach aims to minimize false positives, which mostly arise from detections of encoded data. Adherence to modern coding standards, like Google/Microsoft guidelines, helps reduce these incidents.</p>
                </section>

                <section className="news-blogheader">
                    <h2>Ubiquity of Open Source Raises Risk</h2>
                    <p>Black Duck’s Open Source Security and Risk Analysis (OSSRA) Report revealed:</p>
                    <ul>
                        <li>86% of commercial codebases contain vulnerabilities</li>
                        <li>81% contain high or critical risk issues</li>
                        <li>90% of components are over 4 years out of date</li>
                        <li>jQuery is a leading source of vulnerabilities</li>
                        <li>Only 77% of dependencies are detectable via package scanning</li>
                        <li>97% of codebases contain open source with an average of 911 components</li>
                    </ul>

                    <blockquote>
                        "The research findings indicate that adopting open-source software widely poses considerable security challenges. Many commercial codebases exhibit critically risky vulnerabilities, indicating a systemic problem," said Eric Schwake, Salt Security.
                    </blockquote>
                </section>

            </div>
            <Footer />

        </div>


    );
};

export default BlogPage1;
