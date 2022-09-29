import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from '../../components/ItemDetail'
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../Firebase/config';


const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})
    const {productId} = useParams(); 
    console.log(productId);

    useEffect(()=> {

        const getProducts = async()=> {
            try {
              
                const docRef = doc(db, "products");
                const docSnap = await getDoc(docRef);

 
                setProductDetail(data); 
            } catch (error) {                
            }
        }     
        getProducts();   
    }, [productId])

  

  return <ItemDetail product={productDetail}/>
  
};

export default ItemDetailContainer;

