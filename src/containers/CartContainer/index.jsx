import React from 'react'
import { Shop } from '../../context/ShopProvider'

const Cart = () => {

  const { removeItem } = useContext(Shop);

 

  return (
    <div>
      <img src={product.image} alt={product.title} />
      <div>
        <p>Titulo: {product.title} </p>
        <p>Cantidad: {product.quantity} </p>
        <p>Precio: {product.price} </p>
        <p>Subtotal: ${product.quantity * product.price} </p>
        <button onClick={() => removeItem(product.id) } >Eliminar</button>
      </div>
    </div>
  )
}

export default Cart;