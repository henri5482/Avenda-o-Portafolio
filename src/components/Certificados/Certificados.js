import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import cisco from "..//Certificados/img/cisco.webp";
import elp from "..//Certificados/img/elp.webp";
import Likindin from "..//Certificados/img/Likindin.webp";
import lutecci from "..//Certificados/img/Luteci.webp";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple"> Certificados </strong>
        </h1>
        <p style={{ color: "white" }}>
        Aquí estan mis certificados de cursos y trabajos.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lutecci}
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Likindin}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elp}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cisco}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
