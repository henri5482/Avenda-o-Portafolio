import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  AiFillStar,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import { MdOutlineDesignServices } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../Assets/logoavr.svg";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  // Manejar el color de la barra al hacer scroll
  useEffect(() => {
    const scrollHandler = () => setNavColour(window.scrollY >= 20);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`navbar-custom ${navColour ? "sticky" : ""}`}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <img src={logo} alt="brand" className="img-fluid logo" />
        </Navbar.Brand>

        {/* Botón de menú (Responsive) */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(!expand)}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        {/* Enlaces de navegación */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
                <AiOutlineHome /> Inicio
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => setExpand(false)}>
                <AiOutlineUser /> Acerca de
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://www.behance.net/henridelacruz"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setExpand(false)}
              >
                <MdOutlineDesignServices /> Diseños
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => setExpand(false)}
              >
                <AiOutlineFundProjectionScreen /> Proyectos
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/certificados"
                onClick={() => setExpand(false)}
              >
                <AiOutlineFundProjectionScreen /> Certificados
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => setExpand(false)}>
                <CgFileDocument /> Curriculum
              </Nav.Link>
            </Nav.Item> */}

            {/* Nuevo botón: Diseños */}

            {/* Botón de GitHub */}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/henri5482"
                target="_blank"
                className="fork-btn-inner"  
              >
                <CgGitFork /> <AiFillStar />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
