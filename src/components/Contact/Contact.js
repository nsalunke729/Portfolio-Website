import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import "./contact.css";

const INITIAL = { name: "", email: "", message: "" };

function Contact() {
  const [fields, setFields] = useState(INITIAL);
  const [status, setStatus] = useState(null); // "sending" | "success" | "error"

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/nirusal729@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          message: fields.message,
          _subject: `Portfolio contact from ${fields.name}`,
          _captcha: "false",
        }),
      });
      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setStatus("success");
        setFields(INITIAL);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Container fluid className="contact-section">
      <Container>
        <h1 className="contact-heading">
          <span className="primary-header">Let's</span> Connect
        </h1>
        <p>Have a project, role, or idea? Drop a message.</p>

        {status === "success" && (
          <Alert variant="success" className="mb-3" onClose={() => setStatus(null)} dismissible>
            Thanks! Your message was sent — I'll get back to you soon.
          </Alert>
        )}
        {status === "error" && (
          <Alert variant="danger" className="mb-3" onClose={() => setStatus(null)} dismissible>
            Something went wrong. Please try again or email me directly at{" "}
            <a href="mailto:nirusal729@gmail.com">nirusal729@gmail.com</a>.
          </Alert>
        )}

        <Row style={{ justifyContent: "center" }}>
          <Col md={8}>
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-3" controlId="contactName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={fields.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={fields.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Tell me about it"
                  value={fields.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send Message"}
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
