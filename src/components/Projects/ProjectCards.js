import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { FaCss3Alt, FaJava, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiAstro, SiNextdotjs, SiStrapi, SiSupabase, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";

function ProjectCards(props) {
  return (
    //Tecnologias
    <Card  className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <div style={{ display: "flex", justifyContent:"center"  }}>
          <div variant="primary" href={props.html} target="_blank">
            <AiOutlineHtml5 /> &nbsp;
            {props.isBlog}
          </div>
          {"\n"}
          {"\n"}

          {!props.isBlog && props.tailwinds && (
            <div
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <SiTailwindcss /> &nbsp;
            </div>
          )}

          {!props.isBlog && props.css && (
            <div
              variant="primary" 
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <FaCss3Alt /> &nbsp;
            </div>
          )}

          {!props.isBlog && props.react && (
            <div
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <FaReact /> &nbsp;
            </div>
          )}

          {!props.isBlog && props.javascript && (
            <div
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <IoLogoJavascript /> &nbsp;
            </div>
          )}

          {!props.isBlog && props.astro && (
            <div
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <SiAstro /> &nbsp;
            </div>
          )}

          {!props.isBlog && props.typescript && (
            <div
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <SiTypescript /> &nbsp;
            </div>
          )}

          {!props.isBlog && props.supabase && (
            <div
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <SiSupabase /> &nbsp;
            </div>
          )}
          {!props.isBlog && props.SiStrapi && (
            <div
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <SiStrapi  /> &nbsp;
            </div>
          )}
          {!props.isBlog && props.DiPostgresql && (
            <div
              variant="primary" 
              href={props.demoLink}
              target="_blank" 
              style={{ marginLeft: "10px" }}
            >
              <DiPostgresql /> 
              &nbsp;
            </div>
          )}
          
          {!props.isBlog && props.mongo && (
            <div
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <DiMongodb /> &nbsp;
            </div>
          )}
          

          {!props.isBlog && props.nextjs && (
            <div
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <SiNextdotjs /> &nbsp;
            </div>
          )}

            {!props.isBlog && props.java && (
            <div
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <FaJava /> &nbsp;
            </div>
          )}

          
            {!props.isBlog && props.vercel && (
            <div
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <SiVercel /> &nbsp;
            </div>
          )}
        </div>

        <br/>




        {/* github - demo   */}
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
          variant="primary"
          href={props.demoLink}
          target="_blank"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px 24px',
            fontSize: '18px',
            fontWeight: '600',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            textDecoration: 'none',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
          }}
        >
          
          Link
        </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
