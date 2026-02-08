import React from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import "./contact.css";

function Contact() {
  const [submitted] = React.useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("success") === "true";
  });

  return (
    <Container fluid className="contact-section">
      <Container>
        <h1 className="contact-heading">
          <span className="primary-header">Let's</span> Connect
        </h1>
        <p>Have a project, role, or idea? Drop a message.</p>

        {submitted && (
          <Alert variant="success" className="mb-3">
            Thanks! Your message was submitted successfully.
          </Alert>
        )}

        <Row style={{ justifyContent: "center" }}>
          <Col md={8}>
            <Form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/?success=true"
              className="contact-form"
            >
              {/* Netlify required hidden fields */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              <Form.Group className="mb-3" controlId="contactName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Your name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="you@example.com" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} name="message" placeholder="Tell me about it" required />
              </Form.Group>

              {/* Optional Netlify reCAPTCHA widget */}
              <div data-netlify-recaptcha="true" className="mb-3" />

              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Contact;
