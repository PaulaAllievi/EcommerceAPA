import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount'
import {Shop} from '../../context/ShopProvider';


  const ItemDetail = ({product}) => {

  const [qty, setQty] = useState(0);
  const navigate = useNavigate();

  const {addItem} = useContext(Shop);  
  
  const addCart = (quantity) => {
    setQty(quantity);
  }

  const handleFinish = () => {
    const productToSave = {...product, quantity: qty}
    addItem(productToSave)
    navigate('/cart'); 
  }


  console.log(qty);


  return (
    <div>
        <img src={product.image} alt="product-detail" />      
        <h1>{product.title}</h1>  
        { !qty ? (<ItemCount initial={1} stock={5} onAdd={addCart}/>) : (<button onClick={handleFinish} >Finalizar la compra</button>) }     
    </div>
  )
}

export default ItemDetail;