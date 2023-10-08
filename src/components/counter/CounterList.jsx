import React from 'react'

const CounterList = ({incrementar, disminuir, count, onAdd, mensaje}) => {
  return (
    <div>
        <button onClick={incrementar}>Agregar</button>
        <span>{count} </span>
        <button onClick={disminuir}>Disminuir</button>
        {/* <button onClick={() => onAdd(count) }>Agregar al carrito</button> */}
        <button onClick={() => {
                mensaje();
                onAdd(count);
              }} className="btn btn-primary">Agregar al Carrito</button>
    </div>
  )
}

export default CounterList