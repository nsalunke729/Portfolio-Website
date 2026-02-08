import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Badge } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import "./experience.css";

const experience = [
  {
    period: "Aug 2025 – Present",
    role: "Identity & Workplace Technology Specialist",
    company: "Meta",
    summary:
      "Administer identity and workplace systems at scale, drive GDPR compliance, and improve uptime through proactive monitoring and workflows.",
    tech: [
      "Access Management",
      "GDPR",
      "Monitoring",
      "SRE",
      "Automation",
    ],
    achievements: [
      "Administered identity and access systems for 3,000+ employees; reduced setup time by 20%",
      "Resolved 10+ weekly support requests, 80% closed within 24 hours; proactive monitoring increased uptime by 10%",
      "Drove GDPR compliance by managing daily logs and refining 2 workflows, reducing non-compliance by 20%",
      "Partnered with 5 global teams to improve workplace systems, reducing visitor check-in delays by 15%",
    ],
  },
  {
    period: "Jun 2023 – Aug 2025",
    role: "IT Support & Access System Engineer (Contract)",
    company: "Dublin Port Company",
    summary:
      "Oversaw access management for 10,000+ users, streamlined provisioning, and ensured GDPR-compliant data hygiene and reliable incident response.",
    tech: ["Access Control", "GDPR", "Incident Response", "Automation"],
    achievements: [
      "Processed 200+ onboarding/offboarding requests monthly with improved speed and accuracy",
      "Streamlined workflows and deployed new tools, cutting access provisioning time by 30%",
      "Performed quarterly GDPR clean-ups of 1,000–2,000 records, ensuring audit-ready data",
      "Resolved 2–3 daily access control incidents, minimizing downtime and improving reliability",
    ],
  },
  {
    period: "Apr 2021 – Jan 2023",
    role: "Software Engineer – Full Stack",
    company: "HCL Technologies (Client: BNP Paribas, Paris)",
    summary:
      "Designed automation and microservices in Java 11/Spring Boot, built secure REST APIs, Kafka pipelines, and delivered zero-defect releases.",
    tech: [
      "Java 11",
      "Spring Boot",
      "Docker",
      "Kubernetes",
      "REST APIs",
      "RBAC",
      "Kafka",
      "Python",
    ],
    achievements: [
      "Automated agreement processing in Java 11/Spring Boot, reducing manual effort by 95% and handling 200,000+ records",
      "Led migration to 5 microservices with Docker/Kubernetes; boosted performance by 20% and cut downtime by 60%",
      "Developed REST APIs for 7+ systems with RBAC security, improving API speed by 30% and cutting incidents by ~25%",
      "Implemented Kafka pipelines for 3 services, reducing latency by 40% and increasing reliability",
      "Built Python scripts for weekly log clean-up in UAT/DEV, reducing storage issues and deployment errors",
      "Orchestrated 9+ project deliveries (3 major) with zero post-production defects; Employee of the Year nomination",
    ],
  },
  {
    period: "May 2020 – Apr 2021",
    role: "Software Developer & IT Support Specialist",
    company: "Design Creations",
    summary:
      "Delivered React-based sites with SEO and built a billing system on Spring Boot/Oracle to cut manual work.",
    tech: ["React", "SEO", "Spring Boot", "Oracle"],
    achievements: [
      "Delivered 5+ React websites with SEO optimization, boosting client engagement by ~15%",
      "Built billing system with Spring Boot and Oracle DB, reducing manual work by 40%",
    ],
  },
  {
    period: "Jul 2019 – Nov 2019",
    role: "Software Developer Intern",
    company: "Ojaswa LDD Infotech LLP",
    summary:
      "Contributed to platform enhancements in C# MVC, shipping features used by 200+ employees.",
    tech: ["C#", "MVC", "SQL Server"],
    achievements: [
      "Delivered 4+ new features adopted by 200+ employees",
    ],
  },
];

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Container>
        <h1 className="experience-heading">
          <span className="primary-header">Experience</span> Timeline
        </h1>

        <div className="ops-highlights">
          <span className="ops-title">Operations & SRE Highlights</span>
          <div className="ops-badges">
            {[
              "GDPR Compliance",
              "SLA 99.9%",
              "MTTR ↓",
              "Uptime +10%",
              "Incident Response",
              "Observability",
              "Automation",
              "Cost Optimization",
            ].map((b) => (
              <Badge key={b} className="ops-badge">{b}</Badge>
            ))}
          </div>
        </div>

        <div className="dev-highlights">
          <span className="dev-title">Engineering & Full‑Stack Highlights</span>
          <div className="dev-badges">
            {[
              "Microservices",
              "REST APIs",
              "CI/CD",
              "Cloud (AWS/Azure)",
              "Performance",
              "Security (RBAC)",
              "Testing & Quality",
              "Data Pipelines (Kafka)",
            ].map((b) => (
              <Badge key={b} className="dev-badge">{b}</Badge>
            ))}
          </div>
        </div>

        <Row className="timeline">
          {experience.map((item, idx) => (
            <Col key={item.period} md={12} className="timeline-item">
              <motion.div
                className="timeline-content"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                <div className="timeline-header">
                  <span className="period">{item.period}</span>
                  <h3 className="role">
                    {item.role} — <span className="company">{item.company}</span>
                  </h3>
                </div>
                <p className="summary">{item.summary}</p>
                <div className="badges">
                  {item.tech.map((t) => (
                    <Badge key={t} className="tech-badge">{t}</Badge>
                  ))}
                </div>
                <ul className="achievements">
                  {item.achievements.map((a, idx) => (
                    <li key={idx}>{a}</li>
                  ))}
                </ul>
              </motion.div>
            </Col>
          ))}
        </Row>

        <Row className="edu-certs">
          <Col md={12} className="edu-section">
            <h2 className="edu-title">Education</h2>
            <div className="edu-badges">
              <Badge className="edu-badge">MSc Finance Technology — Dublin Business School (2023–2024)</Badge>
              <Badge className="edu-badge">B.E. Information Technology — VIT (2017–2020)</Badge>
              <Badge className="edu-badge">Diploma Computer Engineering — SAKP (2014–2017)</Badge>
            </div>
          </Col>
          <Col md={12} className="certs-section">
            <h2 className="certs-title">Certifications & Recognitions</h2>
            <div className="certs-badges">
              <Badge className="certs-badge">HackerRank: SQL</Badge>
              <Badge className="certs-badge">HackerRank: Java</Badge>
              <Badge className="certs-badge">HackerRank: Python</Badge>
              <Badge className="certs-badge">Employee of the Year Nomination — HCL</Badge>
              <Badge className="certs-badge">Top Rankings — Coding & Debugging Competitions</Badge>
              <Badge className="certs-badge">Research Publication — IJEDR (ML Sales Prediction)</Badge>
            </div>
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Experience;
