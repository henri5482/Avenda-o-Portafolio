import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ME <span className="purple"> PRESENTO  </span>
            </h1>
            <p className="home-about-body">
            ¡Hola! Me llamo Henri  y me apasiona la Tecnologia como la  informática. Me he enamorado de las tecnologías y productos web, así como de explorar el  mundo de la tecnología
              <br />
              <br />Con habilidades en lenguajes como
              <i>
                <b className="purple"> C#,javascript, java,typescript,etc  </b>
              </i>
              <br />
              <br />
              Me especializo en ser un ingeniero de sistemas y software con un enfoque particular en el&nbsp;
                <i>
                  <b className="purple">Desarrollo web y software, así como en la gestión de proyectos relacionados con la tecnología</b>Mi pasión radica en explorar las últimas tecnologías y aplicarlas de manera efectiva para crear soluciones innovadoras y escalables{" "}
                <b className="purple">
                  
                </b>
              </i>
              <br />
              <br />
              Cuando tengo la oportunidad, también aplico mi pasión por desarrollar productos utilizando
              <b className="purple"> Node.js , ASP.NET</b>  y
              <i>
                <b className="purple">
                  {" "}
                  las modernas bibliotecas y frameworks de 
                </b>
              </i>
              <i>
                <b className="purple">  JavaScript, como React.js, Entityframework,Spring boot y Next.js.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Encuéntrame en</h1>
            <p>
            No dudes en <span className="purple">conectarte  </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://wa.me/51918237837"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/henri76300424?locale=es_LA"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/henri5482"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/henri-de-la-cruz-avendaño-855043228/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdOutgoingMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
