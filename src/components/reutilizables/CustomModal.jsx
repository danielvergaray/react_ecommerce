import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CustomModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  

  useEffect(() => {
    const timeOutId= setTimeout(() => {
      handleClose();
    }, 3000);

    return () => {
      clearTimeout(timeOutId)
    };
  });

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bienvenido a GameStation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Aquí podrás adquirir tus juegos favoritos</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal;
