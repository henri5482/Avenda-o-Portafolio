import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./img.css";
function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
    {/* //Tecnologias */}
    <Card className="project-card-view" onClick={handleShow}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
    </Card>
    {/* Modal para mostrar la imagen completa */}
    {showModal && (
        <div className="modal" onClick={handleClose}>
          <span className="close" onClick={handleClose}>&times;</span>
          <img className="modal-content" src={props.imgPath} alt="card-img" />
        </div>
)}
    </>
  );
}
export default ProjectCards;
