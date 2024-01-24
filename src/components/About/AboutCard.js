import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
            Hi Everyone, I am <span className="primary-header">Niranjan Salunke</span> from Dublin, Ireland. I have completed my Masters from Dublin Business School and Bachlors from Vidyalankar Institute of Technology.
            <br />
            <br />
            In addition to coding, here are some other things I enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Photography
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Video Editing
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Traveling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
