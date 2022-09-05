import React from 'react';
import ItemCount from '../../components/ItemCount'
import './styles.css'

export const ItemListContainer = ({greeting}) => {
  const agregarAlCarrito = (cantidad) => {
    console.log(`se agrego ${cantidad}`) 
  }
  return (
    <div>
       <h1>{greeting}</h1> 
       <ItemCount initial={1} stock={5} onAdd={agregarAlCarrito} />
    </div>
  )


};

export default ItemListContainer;

