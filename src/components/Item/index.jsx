import React from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom'



const Item = ({product}) => {
  const navigate = useNavigate();
  const handleNavigate = ()=> {
    navigate(`/detail/${product.id}`)
  }
  return (
    <div className='card'onClick={handleNavigate} >             
            <img className='img' src={product.image}  width={250} alt='foto'/>
            <h2> {product.title} </h2>         
    </div> 
  )
}

export default Item;

