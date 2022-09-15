import React from 'react'
import ItemCount from '../ItemCount'

const ItemDetail = ({product}) => {
  return (
    <div>
        <img src={product.image} alt="product-detail" />      
        <h1>{product.title}</h1>  
        <ItemCount/>        
    </div>
  )
}

export default ItemDetail;