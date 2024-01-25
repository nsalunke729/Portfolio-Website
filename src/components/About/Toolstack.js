import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
    SiIntellijidea,
    SiMysql,
  SiJfrog,
    SiJenkins,
    SiGithub,
    SiDocker
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
          <Col xs={4} md={2} className="tech-icons">
              <SiMysql />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
              <SiJenkins />
          </Col>
      <Col xs={4} md={2} className="tech-icons">
              <SiGithub />
          </Col>
              <Col xs={4} md={2} className="tech-icons">
                  <SiJfrog />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
              <SiDocker/>
          </Col>
    </Row>
  );
}

export default Toolstack;
