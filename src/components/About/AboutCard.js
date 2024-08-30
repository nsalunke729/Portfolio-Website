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
                      
                      <br />&nbsp;  &nbsp; I'm Full Stack Developer with 3 years of experience in <span className="primary-header"> designing and developing business critical </span>
                          web applications for <span className="primary-header"> Fintech </span> Clients in an Agile Environment.
                      <br/>
                      &nbsp;  &nbsp; I have completed my Masters in <span className="primary-header"> FinTech </span> from Dublin Business School and Bachlors of Engineering in Information Technology from Vidyalankar Institute of Technology.
            <br />
            <br />
            In addition to coding, here are some other soft skills which I have !
          </p>
          <ul>
            <li className="about-activity">
                          <AiOutlineArrowRight /> Active Listening
                      </li>
            <li className="about-activity">
                          <AiOutlineArrowRight /> Fast Faced Learning and Adopting
            </li>
            <li className="about-activity">
                          <AiOutlineArrowRight /> Creative & Solution Oriented Thinking
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
