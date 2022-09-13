import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <div>
        <h2> {product.title} </h2>
        <img src={product.image} alt="product-datail"/>
        <itemCount/>
    </div>
  )
}

export default ItemDetail;