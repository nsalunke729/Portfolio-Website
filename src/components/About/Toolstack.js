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
  SiDocker,
  SiAzuredevops,
  SiPostman,
  SiSwagger,
  SiApachemaven,
  SiGradle,
  SiNpm,
  SiYarn,
  SiNetlify,
  SiAmazonaws,
  SiMicrosoftazure,
  SiTerraform,
  SiGrafana,
  SiPrometheus,
  SiElasticsearch,
  SiKibana,
  SiSonarqube,
  SiEclipseide
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Linux">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="IntelliJ IDEA">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Jenkins">
        <SiJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JFrog Artifactory">
        <SiJfrog />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Docker">
        <SiDocker/>
      </Col>

      {/* New tools */}
      <Col xs={4} md={2} className="tech-icons" title="Azure DevOps">
        <SiAzuredevops />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Swagger / OpenAPI">
        <SiSwagger />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Apache Maven">
        <SiApachemaven />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Gradle">
        <SiGradle />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="NPM">
        <SiNpm />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Yarn">
        <SiYarn />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Netlify">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Azure">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Terraform">
        <SiTerraform />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="SonarQube">
        <SiSonarqube />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Eclipse">
        <SiEclipseide />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Grafana">
        <SiGrafana />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Prometheus">
        <SiPrometheus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Elasticsearch">
        <SiElasticsearch />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Kibana">
        <SiKibana />
      </Col>
    </Row>
  );
}

export default Toolstack;
