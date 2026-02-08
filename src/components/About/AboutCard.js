import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
            Hi Everyone, I am <span className="primary-header">Niranjan Salunke</span> from Dublin, Ireland.
            <br />
            &nbsp;&nbsp;I'm a Full Stack Developer & <span className="primary-header">SRE/IT Support</span> practitioner with <span className="primary-header">5 years</span> building <span className="primary-header">business-critical</span> systems for <span className="primary-header">FinTech</span> in agile environments.
            <br />
            &nbsp;&nbsp;I completed my Masters in <span className="primary-header">FinTech</span> at Dublin Business School and a Bachelor's in Information Technology at Vidyalankar Institute of Technology.
            <br />
            <br />
            Recent focus: <span className="primary-header">React</span>, <span className="primary-header">Java/Spring Boot</span>, <span className="primary-header">.NET/C#</span>, <span className="primary-header">Docker & Kubernetes</span>, <span className="primary-header">AWS/Azure</span>. Also hands-on with <span className="primary-header">monitoring/observability</span> (Grafana, Prometheus), <span className="primary-header">incident response</span>, CI/CD, and automation.
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Active Listening
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Fast-Paced Learning & Adapting
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Creative & Solution-Oriented Thinking
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
