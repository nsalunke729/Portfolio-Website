import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import Billing from "../../Assets/Projects/Billing.PNG";
import Sales from "../../Assets/Projects/Sales.png";
import Cashless from "../../Assets/Projects/Cashless.png";
import Award from "../../Assets/Projects/Award.jpg";
import TenantRentApp from "../../Assets/Projects/TenantRentApp.jpeg";
import SongLibrary from "../../Assets/Projects/SongLibrary.PNG";

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
          <Col md={6} lg={4} className="project-card"> // Ensure this image exists in the correct path
                <ProjectCard
                              imgPath={TenantRentApp} // Ensure this image exists in the correct path
                              title="Tenant Rent App"
                          description="Tech-Stack: Java, Spring boot, React, AWS EC2, Azure DB, AWS Sectres Manager. A cutting-edge, microservice-based full-stack application for managing tenant and rent details, providing functionalities
                          for tracking payments, managing tenant information, and generating reports. I developed each feature meticulously, deploying the backend as microservices on AWS EC2 and the frontend on Netlify to ensure scalability, reliability, and seamless integration. With the database hosted on Azure and sensitive data securely managed through AWS Secrets Manager."
                              ghLink="https://github.com/nsalunke729/Tenant-Rent-Management/"
                              demoLink="https://tenant-rental-app.netlify.app/"
                          />
                  </Col>

                  <Col md={6} lg={4} className="project-card">
                      <ProjectCard
                          imgPath={NasaExplorer} // Ensure this image exists in the correct path
                          title="Nasa Explorer"
                          description="Tech-Stack: React 18, Axios, Node.js.   
                          Interactive UI for viewing various data from NASA's public APIs via a custom backend. 
                          Users can explore the Astronomy Picture of the Day (APOD), Mars Rover Photos, EPIC images, and more."
                          ghLink="https://github.com/nsalunke729/NasaApp-Frontend"
                          demoLink="https://nasaapitest.netlify.app/"
                      />
                  </Col>

                  <Col md={6} lg={4} className="project-card">
                      <ProjectCard
                          imgPath={SongLibrary} // Ensure this image exists in the correct path
                          title="Song Library"
                          description="Tech-Stack: React, Node.js.   A web application for managing and discovering songs, including features for song search, filtering, and detailed view of song information.
                          Includes autocomplete search for songs by title and artist. Filtering songs by artist and album. Displaying detailed information about selected songs, including title, artist, album, length, and description. Direct link to search for selected songs on YouTube."
                          ghLink="https://github.com/nsalunke729/Song-Library"
                          demoLink="https://song-library.netlify.app/"
                      />
                  </Col>

                  <Col md={6} lg={4} className="project-card">
                      <ProjectCard
                          imgPath={DeviceAtlas} // Ensure this image exists in the correct path
                          title="Device Atlas"
                          description="Tech-Stack: Docker, React, Node.js OR Spring Boot, PostgresSQL.   
                          App fetches device data from the DeviceAtlas API, stores it in a Microsoft SQL Server database, and provides an API to retrieve tablet devices. Frontend displays the list of tablet devices with details such as device name, manufacturer, and specifications.
                          As well as the backend is containerized using Docker for easy deployment and scalability."
                          ghLink="https://github.com/nsalunke729/DeviceAtlas"
                          demoLink="https://showdevicedetails.netlify.app/"
                      />
                  </Col>
                  <Col md={6} lg={4} className="project-card">
                    <ProjectCard
                      imgPath={Cashless}
                      title="Cashless Payment"
                                  description="Tech-Stack: Python, Machine Learning.     Led a comprehensive quantitative research project analyzing Dublin's cashless transaction landscape, demonstrating expertise in data analysis, technology-driven methodologies, and impactful presentation of insights."
                      ghLink="https://www.kaggle.com/code/niranjansalunke/cashless-payment"
                      demoLink="https://drive.google.com/file/d/1G1D0uqX9dTgQA1irsPqw3CYzDgJoeyp9/view?usp=sharing"
                    />
                  </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Sales}
              title="Sales Prediction"
                          description="Tech-Stack: .Net, C#, JavaScript, Machine Learning. Researched consumer behavior, analyzing needs and buying processes in a competitive marketing environment. Implemented a CRM system with machine learning to enhance customer retention and enable targeted marketing strategies."
              ghLink="https://github.com/nsalunke729/Sales-Prediction"
              demoLink="https://drive.google.com/file/d/1cHJ6tW4sjP5QyxJQXRMILbJRtnkJegWC/view?usp=sharing"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Billing}
              title="Billing Management System"
                          description="Tech-Stack: .Net, C#, JavaScript.     A Personal Chat Application to share resources and hangout with friends build with react.js, css, and Firebase. Have features which allows user for realtime messaging, image sharing and search user."
              ghLink="https://github.com/nsalunke729/"
              demoLink="https://drive.google.com/file/d/1Sx2qhSGSGoHhr_Pg6HKprakUgWIMESTO/view?usp=sharing"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
              <ProjectCard
              imgPath={Award}
              title="Certificates"
              description="You can have look at my certificates and achievements. "
              ghLink="https://github.com/nsalunke729/"
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
