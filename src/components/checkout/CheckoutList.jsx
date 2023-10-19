import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

const CheckoutList = ({ 
  comprobante, 
  emitirRecibo, 
  compraRealizada, 
  orderId 

}) => {

  console.log(comprobante)
  console.log(compraRealizada)
  return (

    <div>

      <div>
        <p>Gracias por su compra</p>
        <button onClick={emitirRecibo}>Emitir Recibo</button>
      </div>


      {compraRealizada &&
        <div>
          <h1>Recibo de compra desde CheckoutList</h1>
          <p>order id = {orderId} </p>
          {comprobante.items.map((producto) => (
            <ListGroup>
              <ListGroup.Item>{producto.name} </ListGroup.Item>

            </ListGroup>
          ))}

        </div>



      }
    </div>
  )
}

export default CheckoutList