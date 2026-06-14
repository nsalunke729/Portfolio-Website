import React from "react";
import { Col, Row } from "react-bootstrap";

const AI_TOOLS = [
  {
    name: "GitHub Copilot",
    abbr: "Co",
    bg: "linear-gradient(135deg, #6e40c9, #9a6dd7)",
    color: "#fff",
  },
  {
    name: "Claude Code",
    abbr: "CC",
    bg: "linear-gradient(135deg, #d97706, #f59e0b)",
    color: "#fff",
  },
  {
    name: "ChatGPT",
    abbr: "GP",
    bg: "linear-gradient(135deg, #10a37f, #1ac48e)",
    color: "#fff",
  },
  {
    name: "Cursor",
    abbr: "Cu",
    bg: "linear-gradient(135deg, #1c7ed6, #339af0)",
    color: "#fff",
  },
];

function AIstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {AI_TOOLS.map((tool) => (
        <Col key={tool.name} xs={6} sm={4} md={2} className="tech-icons" title={tool.name}>
          <div className="ai-tool-card">
            <div className="ai-tool-icon" style={{ background: tool.bg, color: tool.color }}>
              {tool.abbr}
            </div>
            <div className="ai-tool-name">{tool.name}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default AIstack;
