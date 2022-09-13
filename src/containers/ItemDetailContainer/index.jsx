import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from '../../components/ItemDetail'

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState()

    useEffect(()=> {

        const getProducts = async()=> {
            try {
                const response = await fetch('https://fakestoreapi.com/products/1');
                const data = await response.json();   
                setProductDetail(data); 
            } catch (error) {                
            }
        }     
        getProducts();   
    }, [])

    console.log(productDetail);

  return <ItemDetail product={productDetail}/>
  
};

export default ItemDetailContainer;
