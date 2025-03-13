import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import avendaño from "../../Assets/Projects/avendaño.png";
import dxn from "../../Assets/Projects/dxnecommerce.png";
import ecommerce from "../../Assets/Projects/ecommerce+.png";
import esland from "../../Assets/Projects/esland.png";
import eventos from "../../Assets/Projects/evento.webp";
import velada from "../../Assets/Projects/lavelada.png";
import luromy from "../../Assets/Projects/luromy.jpg";
import lutecii from "../../Assets/Projects/lutecii.png";
import metaverso from "../../Assets/Projects/metaverso.png";
import operIa from "../../Assets/Projects/openIa.webp";
import pixolono from "../../Assets/Projects/pixolino.png";

import PortafolioA from "../../Assets/Projects/portafolioA.png";
import spotify from "../../Assets/Projects/spotify.png";
import sushi from "../../Assets/Projects/sushi.png";
import viajes from "../../Assets/Projects/viajes.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <>
<head>
        <title>Portafolio de Proyectos | Henri de la Cruz</title>
        <meta
          name="description"
          content="Explora los proyectos recientes de Henri de la Cruz, incluyendo DXN Ecommerce, clon de Spotify, y más. Desarrollos en React, Next.js, Tailwind CSS y tecnologías modernas."
        />

        {/* Open Graph para redes sociales */}
        <meta
          property="og:title"
          content="Portafolio de Proyectos | Henri de la Cruz"
        />
        <meta
          property="og:description"
          content="Explora mis proyectos más recientes como DXN Ecommerce, clon de Spotify, y más. Desarrollos en Next.js, Tailwind CSS y más."
        />
        <meta
          property="og:image"
          content="https://avenda-o-two.vercel.app/Assets/Projects/homee.jpg"
        />
        <meta
          property="og:url"
          content="https://avenda-o-two.vercel.app/project"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Portafolio de Proyectos | Henri de la Cruz"
        />
        <meta
          name="twitter:description"
          content="Proyectos como DXN Ecommerce, clon de Spotify, y más. Desarrollos en Next.js, Tailwind CSS y más."
        />
        <meta
          name="twitter:image"
          content="https://avenda-o-two.vercel.app/Assets/Projects/homee.jpg"
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Portafolio de proyectos, DXN Ecommerce, Next.js, Tailwind CSS, React, Desarrollo Web, Henri de la Cruz, Ayacucho"
        />

        <link
          rel="canonical"
          href="https://avenda-o-two.vercel.app/project"
        />
      </head>
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis trabajos <strong className="purple">Recientes </strong>
        </h1>
        <p style={{ color: "white" }}>
        Aquí hay algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col  md={4} className="project-card">
            <ProjectCard
              css
              javascript
              type
              vercel 
              typescript
              react 
              
              nextjs  
              tailwinds
              imgPath={avendaño} 
              isBlog={false}
              title="Agencia digital luromy" 
              ghLink="https://github.com/loth381"
              demoLink="https://agencialuromy.vercel.app/"
            />
          </Col>
        <Col  md={4} className="project-card">
            <ProjectCard
              css
              javascript
              type
              vercel 
              typescript 
              react 
              SiStrapi
              DiPostgresql   
              nextjs  
              tailwinds
              imgPath={dxn} 
              isBlog={false}
              title="DXN ecommerce " 
              ghLink="https://github.com/loth381"
              demoLink="https://dxnayacucho.vercel.app/"
            />
          </Col>
        <Col  md={4} className="project-card">
            <ProjectCard
              css
              javascript
              type
              vercel
              typescript
              react
              astro
              tailwinds
              imgPath={esland}
              isBlog={false}
              title="Clon Esland"
              ghLink="https://github.com/loth381/Clon-esland"
              demoLink="https://esland-2024.vercel.app/"
            />
          </Col>
          <Col  md={4} className="project-card">
            <ProjectCard
              css
              javascript
              type
              vercel
              typescript
              react
              astro
              tailwinds
              imgPath={luromy}
              isBlog={false}
              title="Restaurante luromy"
              ghLink="https://github.com/loth381"
              demoLink="https://luromy.vercel.app/"
            />
          </Col>

        <Col  md={4} className="project-card">
            <ProjectCard
              css
              javascript
              mongo
              type
              vercel
              typescript
              nextjs
              react
              tailwinds
              imgPath={eventos}
              isBlog={false}
              title="Ayacucho-Eventos"
              ghLink="https://github.com/loth381/Eventos-ayacucho"
              demoLink="https://ayacucho-eventos.vercel.app/"
            />
          </Col>
         
          <Col md={4} className="project-card">
            <ProjectCard
              css
              javascript
              vercel
              nextjs
              react
              tailwinds
              imgPath={operIa}
              isBlog={false}
              title="Open IA"
              ghLink="https://github.com/loth381/OpenAI"
              demoLink="https://open-ai-bay-five.vercel.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              css
              javascript
              supabase
              type
              vercel
              typescript
              nextjs
              react
              tailwinds
              imgPath={spotify}
              isBlog={false}
              title="Clone-Spotify"
              ghLink="https://github.com/loth381/Spotify-clon"
              demoLink="https://spotify-clon-lyart-iota.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              react
              css
              vercel
              titlePrimary="javascript,css,html"
              imgPath={PortafolioA}
              isBlog={false}
              title="Portafolio"
              ghLink="https://github.com/loth381/Avenda-o"
              demoLink="https://avenda-o-two.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              css
              javascript
              vercel
              imgPath={lutecii}
              isBlog={false}
              title="GRUPO LUTECCI"
              ghLink="https://github.com/loth381/grupo-lutecci"
              demoLink="https://grupo-lutecci.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              html
              css
              vercel
              typescript
              astro
              tailwinds
              imgPath={velada}
              isBlog={false}
              title="La velada del año IV"
              ghLink="https://github.com/loth381/Velada-IV/tree/main?tab=readme-ov-file"
              demoLink="https://velada-iv.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              html
              css
              react
              javascript
              typescript  
              vercel
              mongo
              imgPath={ecommerce}
              isBlog={false}
              title="ecommerce"
              ghLink="https://github.com/loth381"
              demoLink="https://loth0381-proyect-ecommers02.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            html
            css
            javascript
            vercel
              imgPath={sushi}
              isBlog={false}
              title="Sushiman"
              ghLink="https://github.com/loth381/SUSHIMAN "
              demoLink="https://sushi-six-sigma.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            html
            css
            javascript
            vercel
              imgPath={pixolono}
              isBlog={false}
              title="Pixology"
              ghLink="https://github.com/loth381/Pixology"
              demoLink="https://pixology-bay.vercel.app"
            />
          </Col>

             
          <Col md={4} className="project-card " >
            <ProjectCard
            html
            css
            javascript
            vercel
              imgPath={metaverso}
              isBlog={false}
              title="Metaverso"
              ghLink="https://github.com/loth381/metaverso"
              demoLink="https://metaverso-nu.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            html
            css
            javascript
            vercel
              imgPath={viajes} 
              isBlog={false}
              title="Viajes"
              ghLink="https://github.com/loth381/metaverso"
              demoLink="https://github.com/loth381/pagina-de-viajes"
            />
          </Col>

        </Row>
      </Container>
    </Container>
    </>
  );
}

export default Projects;
