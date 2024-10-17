import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Diseñada y desarrollada por Avendaño</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AV</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://wa.me/51930134408"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/henri76300424?locale=es_LA"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/loth381"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/henri-de-la-cruz-avendaño-855043228/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MdOutgoingMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
