import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import Billing from "../../Assets/Projects/Billing.PNG";
import Sales from "../../Assets/Projects/Sales.png";
import Cashless from "../../Assets/Projects/Cashless.png";
import Award from "../../Assets/Projects/Award.jpg";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Cashless}
              title="Cashless Payment"
                          description="Led a comprehensive quantitative research project analyzing Dublin's cashless transaction landscape, demonstrating expertise in data analysis, technology-driven methodologies, and impactful presentation of insights."
              ghLink=""
              demoLink="https://drive.google.com/file/d/1G1D0uqX9dTgQA1irsPqw3CYzDgJoeyp9/view?usp=sharing"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Sales}
                          title="Sales Prediction"
                          description="Researched consumer behavior, analyzing needs and buying processes in a competitive marketing environment. Implemented a CRM system with machine learning to enhance customer retention and enable targeted marketing strategies."
              ghLink=""
              demoLink="https://drive.google.com/file/d/1cHJ6tW4sjP5QyxJQXRMILbJRtnkJegWC/view?usp=sharing"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Billing}
                          title="Billing Management System"
              description="A Personal Chat Application to share resources and hangout with friends build with react.js, css, and Firebase. Have features which allows user for realtime messaging, image sharing and search user."
              ghLink="#"
                          demoLink="https://drive.google.com/file/d/1Sx2qhSGSGoHhr_Pg6HKprakUgWIMESTO/view?usp=sharing"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
                      <ProjectCard
                          imgPath={Award}
                          title="Certificates"
              description="You can have look at my certificates and achievements. "
              ghLink=""
                          demoLink="https://drive.google.com/drive/folders/1cgPWq82lbvGOUxAhAsZYdgUOyJKjz3Es?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
