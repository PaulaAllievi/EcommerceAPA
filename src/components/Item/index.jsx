import React from 'react'
import './styles.css'



const Item = ({product}) => {
  return (
    <div className='card'>
        <div className='info'>
        <section>
            <img className='img' src={product.image}  width={250} alt='foto'/>
        </section>
            <h2> {product.title} </h2>
            
        </div>   
    </div> 
  )
}

export default Item;

