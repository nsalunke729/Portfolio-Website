import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const SRE_TAGS = new Set([
  "SRE", "Observability", "Monitoring", "Incident Response",
  "SLA 99.9%", "MTTR ↓", "Kubernetes", "Docker", "CI/CD",
  "Containerization", "Secrets Manager", "EC2",
]);

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="card-img-wrapper">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      </div>
      <Card.Body className="project-card-body">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="project-card-desc">
          {props.description}
        </Card.Text>

        {Array.isArray(props.tags) && props.tags.length > 0 && (
          <div className="card-tags">
            {props.tags.map((tag) => (
              <span
                key={tag}
                className={`tag-badge ${SRE_TAGS.has(tag) ? "tag-badge--sre" : "tag-badge--dev"}`}
                title={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="card-btns">
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;{props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {!props.isBlog && props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank">
              <CgWebsite /> &nbsp;{"Read More"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
