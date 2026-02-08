import React, { useMemo, useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal, Badge } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import "./about.css";

function About() {
  const [showSpotlight, setShowSpotlight] = useState(false);
  const stats = useMemo(
    () => ({ projects: 8, technologies: 12, years: 5 }),
    []
  );

  const [animated, setAnimated] = useState({ projects: 0, technologies: 0, years: 0 });
  useEffect(() => {
    const duration = 800;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      setAnimated({
        projects: Math.floor(progress * stats.projects),
        technologies: Math.floor(progress * stats.technologies),
        years: Math.floor(progress * stats.years),
      });
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [stats]);

  const downloadVCard = () => {
    const lines = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "FN:Niranjan Salunke",
      "TITLE:Full Stack Developer & SRE/IT Support",
      "EMAIL:nsalunke729@gmail.com",
      "TEL:+353892075872",
      `URL:${window.location.origin}`,
      "NOTE:Update FN/EMAIL/ORG/TITLE in code as needed",
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
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{ fontSize: "2.1em", paddingBottom: "20px" }}
              data-aos="fade-right"
            >
              <span className="primary-header">Who</span> I'M
            </h1>
            <div data-aos="fade-up">
              <Aboutcard />
            </div>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              data-aos="fade-left"
            />
          </Col>
        </Row>
        <h1 data-aos="fade-right">
          <span className="primary-header">Skillset</span> I Work With
        </h1>

        <div data-aos="fade-up">
          <Techstack />
        </div>

        <h1 data-aos="fade-right">
          <span className="primary-header">Tools</span> I use
        </h1>
        <div data-aos="fade-up">
          <Toolstack data-aos="fade-up" />
        </div>

        <Row className="edu-certs" data-aos="fade-up">
          <Col md={12} className="edu-section">
            <h2 className="edu-title">Education</h2>
            <div className="edu-badges">
              <span className="edu-badge">MSc Finance Technology — Dublin Business School (2023–2024)</span>
              <span className="edu-badge">B.E. Information Technology — VIT (2017–2020)</span>
              <span className="edu-badge">Diploma Computer Engineering — SAKP (2014–2017)</span>
            </div>
          </Col>
          <Col md={12} className="certs-section">
            <h2 className="certs-title">Certifications & Recognitions</h2>
            <div className="certs-badges">
              <span className="certs-badge">HackerRank: SQL</span>
              <span className="certs-badge">HackerRank: Java</span>
              <span className="certs-badge">HackerRank: Python</span>
              <span className="certs-badge">Employee of the Year Nomination — HCL</span>
              <span className="certs-badge">Top Rankings — Coding & Debugging Competitions</span>
              <span className="certs-badge">Research Publication — IJEDR (ML Sales Prediction)</span>
            </div>
          </Col>
        </Row>

        <h1 className="highlights-title" data-aos="fade-right">
          <span className="primary-header">Highlights</span> & Fun Stats
        </h1>
        <Row className="highlights" data-aos="fade-up">
          <Col md={4} className="stat-card">
            <div className="stat-value">{animated.projects}+</div>
            <div className="stat-label">Projects</div>
          </Col>
          <Col md={4} className="stat-card">
            <div className="stat-value">{animated.technologies}+</div>
            <div className="stat-label">Technologies</div>
          </Col>
          <Col md={4} className="stat-card">
            <div className="stat-value">{animated.years}</div>
            <div className="stat-label">Years Building</div>
          </Col>
        </Row>

        <Row className="engage-row" data-aos="fade-up">
          <Col md={12} className="engage-actions">
            <Button variant="primary" onClick={() => setShowSpotlight(true)}>
              Open Profile Spotlight
            </Button>
            <Button variant="primary" className="vcf-btn" onClick={downloadVCard}>
              Download Contact Card (vCard)
            </Button>
            <Button variant="primary" href="/Niranjan_Salunke_CV.pdf" target="_blank">
              Download CV (PDF)
            </Button>
          </Col>
        </Row>

        <Modal
          show={showSpotlight}
          onHide={() => setShowSpotlight(false)}
          fullscreen
          centered
        >
          <Modal.Body className="spotlight">
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
              <div className="spotlight-actions">
                <Button
                  variant="primary"
                  href="https://github.com/nsalunke729"
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button
                  variant="primary"
                  href="https://tenant-rental-app.netlify.app/"
                  target="_blank"
                >
                  Featured Project
                </Button>
                <Button variant="primary" onClick={downloadVCard}>
                  Save Contact
                </Button>
                <Button variant="primary" href="/Niranjan_Salunke_CV.pdf" target="_blank">
                  Download CV
                </Button>
                <Button variant="secondary" onClick={() => setShowSpotlight(false)}>
                  Close
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>

      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default About;
