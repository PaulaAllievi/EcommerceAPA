import React from 'react'
import './styles.css'



const Item = ({product}) => {
  return (
    <div className='card'>
        <div className='info'>
        <section>
            <img className='img' src={product.img} alt='foto'/>
        </section>
            <h2> {product.name} </h2>
            <h3> ${product.price} </h3>
            <p> {product.description} </p>
        </div>   
    </div> 
  )
}

export default Item;

