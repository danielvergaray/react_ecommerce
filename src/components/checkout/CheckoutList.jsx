import React from 'react'

const CheckoutList = ({ comprobante, emitirRecibo, compraRealizada }) => {

  console.log(comprobante)

  return (

    <div>

      <div>
        <p>Gracias por su compra</p>
        <button onClick={emitirRecibo}>Emitir Recibo</button>
      </div>


      {compraRealizada &&
        <div>
          <h1>Recibo de compra desde CheckoutList</h1>
          {comprobante.map((el) => (
            <div>
              <p>{el.id} </p>
            </div>
          ))}


        </div>}
    </div>
  )
}

export default CheckoutList