import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { products } from '../../data/products';
/*import ItemCount from '../../components/ItemCount'*/
import './styles.css'
import ItemList from '../../components/ItemList';

export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])  

  useEffect( ()=> {
    ( async ()=> {

     /* const obtenerProductos = new Promise ((accept, reject)=> {
        setTimeout(()=> {
          accept(products)
        }, 2000);
      }) */
  
      try {
        const response = await fetch("https://fakestoreapi.com/products"); 
        const productos = await response.json();
        setProductos(productos);
  
      }catch (error) {  
      }
    })()

  }, [])

  console.log(productos)
 
  
  return (
    <div>
       <ItemList products={productos} />       
    </div>
  )
};

export default ItemListContainer;

/*<ItemCount initial={1} stock={5} onAdd={agregarAlCarrito} />*/