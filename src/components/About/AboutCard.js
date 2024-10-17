import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          ¡Hola a todos! Soy <span className="purple">Henri de la cruz avendaño </span>
            de <span className="purple"> Ayacucho , Peru.</span>
            <br />
             Actualmente soy estudiante de ingenieria de sistemas en la escuela superior la pontificia (ELP)
            <br />
            Aparte de la programación, tengo varias actividades que me apasionan:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Diseño grafico
            </li>
            <li className="about-activity">
              <ImPointRight /> Investigar tecnologías
            </li>
            <li className="about-activity">
              <ImPointRight /> gestion de proyectos
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          Esforzándome por desarrollar tecnología que marque la diferenci!"{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
