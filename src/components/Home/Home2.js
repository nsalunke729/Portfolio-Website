import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.png";
import rec1 from "../../Assets/rec1.PNG";
import rec2 from "../../Assets/rec2.PNG";
import rec3 from "../../Assets/rec3.PNG";
import rec4 from "../../Assets/rec4.PNG";

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
  AiFillPhone
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    useEffect(() => {
        const slider = document.getElementById("image-slider");
        let currentIndex = 0;

        function shiftSlide() {
            currentIndex = (currentIndex + 1) % slider.children.length;
            updateSlider();
        }

        function updateSlider() {
            const transformValue = `translateX(-${currentIndex * 100}%)`;
            slider.style.transform = transformValue;
        }

        const intervalId = setInterval(shiftSlide, 2000); // Auto-shift every 2 seconds

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures this effect runs once after initial render

  return (
    <Container fluid className="home-about-section" id="about">
          <Container>
              <Row>
                  <Col md={8} className="home-about-description">
                      <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
                          WHY YOU SHOULD <span className="primary-header"> HIRE </span> ME
                      </h1>
                                            <p className="home-about-body" data-aos="fade-up">
                          <br />
                                                    Full‑stack developer & <span className="primary-header">SRE/IT Support</span> with <span className="primary-header">5 years</span> delivering <span className="primary-header">business‑critical</span> systems in FinTech and enterprise.
                          <br />
                                                    <br />Expert in <span className="primary-header">React</span>, <span className="primary-header">Java/Spring Boot</span>, <span className="primary-header">.NET/C#</span>, and cloud (AWS/Azure), building scalable microservices, robust APIs, and polished UIs.
                          <br />
                                                    <br />Track record of <span className="primary-header">solving complex problems</span>, improving reliability and performance, and shipping features safely with <span className="primary-header">CI/CD</span>, testing, and <span className="primary-header">observability</span>.
                          <br />
                          <br />Clear communicator who aligns stakeholders and turns ambiguity into actionable delivery.
                          <br />
                                                    <br />Committed to <span className="primary-header">impact, craftsmanship, and continuous learning</span>.
                      </p>
                                            <div className="home-badges" data-aos="fade-up">
                                                <span className="home-badge">Microservices</span>
                                                <span className="home-badge">REST APIs</span>
                                                <span className="home-badge">CI/CD</span>
                                                <span className="home-badge">Cloud (AWS/Azure)</span>
                                                <span className="home-badge">SLA 99.9%</span>
                                                <span className="home-badge">MTTR ↓</span>
                                                <span className="home-badge">Observability</span>
                                            </div>
                  </Col>
                  <Col md={4} className="myAvtar">
                      <br />
                      <br />
                      <br />
                      <Tilt>
                          <img
                              data-aos="fade-left"
                              src={myImg}
                              className="img-fluid"
                              alt="avatar" />
                      </Tilt>
                  </Col>
                  <br/>
              </Row>
              <Row>
              <br/><br/>
                  <h1 data-aos="fade-right">
                      ----------<span className="primary-header">RECOMMENDATIONS </span> RECEIVED ----------
                  </h1>
                  <div id="slider-container">
                      <div id="image-slider">
                          <img class="slider-image" src={rec1} alt="Recommendation 1" />
                          <img class="slider-image" src={rec2} alt="Recommendation 2" />
                          <img class="slider-image" src={rec3} alt="Recommendation 3" />
                          <img class="slider-image" src={rec4} alt="Recommendation 4" />
                      </div>
                  </div>
              </Row>
              <Row>
                  <Col md={12} className="home-about-social">
                      <h1 data-aos="fade-right">
                          <span className="primary-header">CONNECT </span> WITH ME
                      </h1>
                      <p data-aos="fade-left">Feel free to connect with me over or leave your contact below</p>
                      <ul className="home-about-social-links" data-aos="fade-up">
                          <li className="social-icons">
                              <a
                                  href="https://github.com/nsalunke729"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="icon-colour  home-social-icons"
                                  aria-label="github"
                              >
                                  <AiFillGithub />
                              </a>
                          </li>
                          <li className="social-icons">
                              <a
                                  href="mailto:nsalunke729@gmail.com"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="icon-colour  home-social-icons"
                                  aria-label="email"
                              >
                                  <AiOutlineMail />
                              </a>
                          </li>
                          <li className="social-icons">
                              <a
                                  href="https://www.linkedin.com/in/niranjan-salunke/"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="icon-colour  home-social-icons"
                                  aria-label="linkedin"
                              >
                                  <FaLinkedinIn />
                              </a>
                          </li>
                          <li className="social-icons">
                              <a
                                  href="https://www.instagram.com/nsalunke729/"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="icon-colour home-social-icons"
                                  aria-label="instagram"
                              >
                                  <AiFillInstagram />
                              </a>
                          </li>
                          <li className="social-icons">
                              <a
                                  href="tel: +353892075872"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="icon-colour home-social-icons"
                                  aria-label="Call"
                              >
                                  <AiFillPhone />
                              </a>
                          </li>
                      </ul>
                  </Col>
              </Row>
              {/* Contact form removed from Home; use Contact page instead */}
          </Container>
      </Container>
    );
}
export default Home2;
