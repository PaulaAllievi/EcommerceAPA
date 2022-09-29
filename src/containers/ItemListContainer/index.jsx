import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css'
import ItemList from '../../components/ItemList';
import { db } from '../../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";

export const ItemListContainer = () => {
  console.log(db)

  const [productos, setProductos] = useState([])  

  const {categoryId} = useParams();
  

  useEffect( ()=> {
    ( async ()=> {
    
      try {       

        const q = categoryId ? 
          query(collection(db, "products"),where("category", "==", categoryId))
          :
          query(collection(db, "products"));

        const querySnapshot = await getDocs(q);
        const productosFirebase = [];
        querySnapshot.forEach((doc) => {
       // doc.data() is never undefined for query doc snapshots
       
       productosFirebase.push({id: doc.id, ...doc.data()})
      });

     setProductos(productosFirebase)       
          
      } catch (error) {  
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