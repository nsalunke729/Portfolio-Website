import React from "react";
import { Container, Button, Badge } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import "./spotlight.css";

function Spotlight() {
  const downloadVCard = () => {
    const lines = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "FN:Niranjan Salunke",
      `URL:https://www.linkedin.com/in/niranjan-salunke/`,
      "TITLE:Full Stack Developer & SRE/IT Support",
      "EMAIL:nsalunke729@gmail.com",
      "TEL:+353892075872",
      "END:VCARD",
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "contact.vcf";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Container fluid className="spotlight-page">
      <Container>
        <div className="spotlight-hero">
          <h2 className="spotlight-title">Profile Spotlight</h2>
          <p className="spotlight-sub">Developer • Problem Solver • Builder</p>
          <div className="spotlight-tags">
            <Badge className="spotlight-badge">React</Badge>
            <Badge className="spotlight-badge">Java</Badge>
            <Badge className="spotlight-badge">.NET</Badge>
            <Badge className="spotlight-badge">Docker</Badge>
            <Badge className="spotlight-badge">AWS</Badge>
          </div>
          <div className="spotlight-tags">
            <Badge className="spotlight-badge">Microservices</Badge>
            <Badge className="spotlight-badge">REST APIs</Badge>
            <Badge className="spotlight-badge">CI/CD</Badge>
            <Badge className="spotlight-badge">Security (RBAC)</Badge>
            <Badge className="spotlight-badge">Performance</Badge>
          </div>
          <div className="spotlight-tags">
            <Badge className="spotlight-badge">GDPR</Badge>
            <Badge className="spotlight-badge">SLA 99.9%</Badge>
            <Badge className="spotlight-badge">MTTR ↓</Badge>
            <Badge className="spotlight-badge">Observability</Badge>
            <Badge className="spotlight-badge">Incident Response</Badge>
          </div>
          <div className="spotlight-actions">
            <Button variant="primary" href="https://github.com/nsalunke729" target="_blank">
              GitHub
            </Button>
            <Button variant="primary" href="/Niranjan_Salunke_CV.pdf" target="_blank">
              Download CV
            </Button>
            <Button variant="primary" onClick={downloadVCard}>
              Save Contact
            </Button>
          </div>
        </div>

        <div className="spotlight-section">
          <h3 className="spotlight-subtitle">Education</h3>
          <div className="spotlight-tags">
            <Badge className="spotlight-badge">MSc Finance Technology — Dublin Business School (2023–2024)</Badge>
            <Badge className="spotlight-badge">B.E. Information Technology — VIT (2017–2020)</Badge>
            <Badge className="spotlight-badge">Diploma Computer Engineering — SAKP (2014–2017)</Badge>
          </div>
        </div>

        <div className="spotlight-section">
          <h3 className="spotlight-subtitle">Certifications & Recognitions</h3>
          <div className="spotlight-tags">
            <Badge className="spotlight-badge">HackerRank: SQL</Badge>
            <Badge className="spotlight-badge">HackerRank: Java</Badge>
            <Badge className="spotlight-badge">HackerRank: Python</Badge>
            <Badge className="spotlight-badge">Employee of the Year Nomination — HCL</Badge>
            <Badge className="spotlight-badge">Top Rankings — Coding & Debugging Competitions</Badge>
            <Badge className="spotlight-badge">Research Publication — IJEDR (ML Sales Prediction)</Badge>
          </div>
        </div>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Spotlight;
