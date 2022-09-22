import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css'
import ItemList from '../../components/ItemList';

export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])  

  const {categoryId} = useParams();
  

  useEffect( ()=> {
    ( async ()=> {
    
      try {
        if (categoryId) {
          const response = await fetch("https://fakestoreapi.com/products/category/" + categoryId ); 
          const productos = await response.json();
          setProductos(productos);
        }
        else {
          const response = await fetch("https://fakestoreapi.com/products"); 
          const productos = await response.json();
          setProductos(productos);
        }    
  
      }catch (error) {  
      }
    })()
  }, [categoryId]);

  console.log(productos)
 
  
  return (
    <div>
       <ItemList products={productos} />       
    </div>
  )
};

export default ItemListContainer;

/*<ItemCount initial={1} stock={5} onAdd={agregarAlCarrito} />*/