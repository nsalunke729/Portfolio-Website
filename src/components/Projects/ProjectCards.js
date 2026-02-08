import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {Array.isArray(props.tags) && props.tags.length > 0 && (
          <div className="card-tags">
            {props.tags.map((tag) => {
              const sreTags = [
                "SRE",
                "Observability",
                "Monitoring",
                "Incident Response",
                "SLA 99.9%",
                "MTTR ↓",
                "Kubernetes",
                "Docker",
                "CI/CD",
                "Containerization",
                "Secrets Manager",
                "EC2",
              ];
              const isSre = sreTags.includes(tag);
              const cls = `tag-badge ${isSre ? "tag-badge--sre" : "tag-badge--dev"}`;
              return (
                <span key={tag} className={cls} title={tag}>
                  {tag}
                </span>
              );
            })}
          </div>
        )}

              <Button variant="primary" href={props.ghLink} target="_blank">
                  <BsGithub /> &nbsp;
                  {props.isBlog ? "Blog" : "GitHub"}
              </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

               {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Read More"}
          </Button>
              )}
      </Card.Body>
    </Card>
    
  );
}
export default ProjectCards;
