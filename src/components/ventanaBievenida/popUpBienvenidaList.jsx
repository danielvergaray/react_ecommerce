import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PopUpBienvenidaList() {
  const [show, setShow] = useState(true); // Cambia el estado inicial de show a true para mostrar la alerta al cargar la página

  const handleClose = () => setShow(false);

  useEffect(() => {
    // Agrega un efecto secundario que se ejecutará una vez cuando se monte el componente
    // Esto cerrará la alerta después de un cierto tiempo (por ejemplo, 3 segundos)
    const timeoutId = setTimeout(() => {
      handleClose();
    }, 3000); // 3000 milisegundos (3 segundos)

    return () => {
      // Limpia el timeout si el componente se desmonta antes de que se cierre la alerta
      clearTimeout(timeoutId);
    };
  }, []);

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

export default PopUpBienvenidaList;
