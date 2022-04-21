import React from 'react'


export const ProductoCard = ({datos, handleAddCard}) => {

  const {thumbnail,productName,description,unitPrice } = datos;

  return (
    <div className="card mx-2 my-2" style={{float: 'left' }}>
     <img src={thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{productName}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><strong>$ {unitPrice}</strong></p>
        </div>
        <div className="card-footer">
            <button className='btn btn-primary' onClick={() => handleAddCard(datos)}> 
               Agregar al Carrito
            </button>
        </div>
    </div>
  )
}


