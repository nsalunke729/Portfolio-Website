import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Fuse from "fuse.js";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import Billing from "../../Assets/Projects/Billing.PNG";
import Sales from "../../Assets/Projects/Sales.png";
import Cashless from "../../Assets/Projects/Cashless.png";
import Award from "../../Assets/Projects/Award.jpg";
import TenantRentApp from "../../Assets/Projects/TenantRentApp.jpeg";
import SongLibrary from "../../Assets/Projects/SongLibrary.PNG";
import NasaExplorer from "../../Assets/Projects/NasaExplorer.JPG";
import DeviceAtlas from "../../Assets/Projects/DeviceAtlas.JPG";

import "./project.css";

function Projects() {
  const projects = useMemo(
    () => [
      {
        imgPath: TenantRentApp,
        title: "Tenant Rent App",
        description:
          "A microservice-based full-stack application for managing tenant and rent details with reporting, deployed backend on AWS EC2 and frontend on Netlify.",
        ghLink: "https://github.com/nsalunke729/Tenant-Rent-Management/",
        demoLink: "https://tenant-rental-app.netlify.app/",
        tags: [
          "Java",
          "Spring Boot",
          "React",
          "AWS",
          "Azure",
          "Microservices",
          "EC2",
          "Secrets Manager",
          "Full Stack",
          "CI/CD",
          "Docker",
          "Kubernetes",
          "Observability",
          "SRE",
        ],
      },
      {
        imgPath: NasaExplorer,
        title: "Nasa Explorer",
        description:
          "Interactive APP for viewing NASA APIs via a custom backend (APOD, Mars Rover, EPIC).",
        ghLink: "https://github.com/nsalunke729/NasaApp-Frontend",
        demoLink: "https://nasaapitest.netlify.app/",
        tags: ["React", "Java",  "Node", "Axios", "NASA", "API", "Frontend", "Backend", "CI/CD"],
      },
      {
        imgPath: SongLibrary,
        title: "Song Library",
        description:
          "Manage and discover songs with autocomplete, filtering, detailed views, and YouTube links.",
        ghLink: "https://github.com/nsalunke729/Song-Library",
        demoLink: "https://song-library.netlify.app/",
        tags: ["React", "Node", "Music", "Search", "Frontend"],
      },
      {
        imgPath: DeviceAtlas,
        title: "Device Atlas",
        description:
          "Fetches device data from DeviceAtlas API, stores in SQL DB, provides tablet devices API; backend containerized with Docker.",
        ghLink: "https://github.com/nsalunke729/DeviceAtlas",
        demoLink: "https://showdevicedetails.netlify.app/",
        tags: ["Docker", "Java", "React", "Node", "Spring Boot", "API", "Backend", "Frontend", "SQL Server", "Monitoring", "Containerization"],
      },
      {
        imgPath: Cashless,
        title: "Cashless Payment",
        description:
          "Quantitative research analyzing Dublin's cashless transaction landscape.",
        ghLink: "https://www.kaggle.com/code/niranjansalunke/cashless-payment",
        demoLink:
          "https://drive.google.com/file/d/1G1D0uqX9dTgQA1irsPqw3CYzDgJoeyp9/view?usp=sharing",
        tags: ["Python", "Machine Learning", "Data Analysis", "Kaggle"],
      },
      {
        imgPath: Sales,
        title: "Sales Prediction",
        description:
          "CRM system with ML for customer retention and targeted marketing.",
        ghLink: "https://github.com/nsalunke729/Sales-Prediction",
        demoLink:
          "https://drive.google.com/file/d/1cHJ6tW4sjP5QyxJQXRMILbJRtnkJegWC/view?usp=sharing",
        tags: [".NET", "C#", "JavaScript", "Machine Learning", "CRM"],
      },
      {
        imgPath: Billing,
        title: "Billing Management System",
        description:
          "Personal Chat App with React and Firebase featuring realtime messaging and image sharing.",
        ghLink: "https://github.com/nsalunke729/Sales-Prediction",
        demoLink:
          "https://drive.google.com/file/d/1Sx2qhSGSGoHhr_Pg6HKprakUgWIMESTO/view?usp=sharing",
        tags: [".NET", "C#", "JavaScript", "Firebase", "Chat"],
      },
      {
        imgPath: Award,
        title: "Certificates",
        description:
          "You can have look at my certificates and achievements.",
        ghLink: "https://github.com/nsalunke729/",
        demoLink:
          "https://drive.google.com/drive/folders/1cgPWq82lbvGOUxAhAsZYdgUOyJKjz3Es?usp=sharing",
        tags: ["Certificates", "Achievements"],
      },
    ],
    []
  );

  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const allTags = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [projects]);

  const fuse = useMemo(
    () =>
      new Fuse(projects, {
        keys: ["title", "description", "tags"],
        threshold: 0.35,
        includeScore: true,
      }),
    [projects]
  );

  const searchedProjects = query
    ? fuse.search(query).map((r) => r.item)
    : projects;

  const filteredProjects = selectedTags.length
    ? searchedProjects.filter((p) =>
        selectedTags.every((t) => p.tags.includes(t))
      )
    : searchedProjects;

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setQuery("");
  };

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>

        <div className="filters-bar">
          <Form className="filters-form" onSubmit={(e) => e.preventDefault()}>
            <Form.Control
              type="text"
              placeholder="Search projects (title, tech, description)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
            />
          </Form>
          <div className="tags-container">
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`tag-chip ${
                  selectedTags.includes(tag) ? "tag-chip--active" : ""
                }`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="filters-actions">
            <span className="results-count">
              {filteredProjects.length} result{filteredProjects.length !== 1 ? "s" : ""}
            </span>
            <Button variant="primary" className="clear-btn" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((p, idx) => (
            <Col key={p.title} md={6} lg={4} className="project-card">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                layout
              >
                <ProjectCard
                  imgPath={p.imgPath}
                  title={p.title}
                  description={p.description}
                  ghLink={p.ghLink}
                  demoLink={p.demoLink}
                  tags={p.tags}
                />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
