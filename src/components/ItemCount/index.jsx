import React, {useState,useEffect} from "react";
import './styles.css';

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [count, setCount] = useState(parseInt(initial));
    
    const handleAdd = () => {
        if (count < stock) {
            setCount(count+1);
        }
        else {
            alert("No hay stock suficiente");
        }     
    }

    const handleDecrement = () => {
            setCount(count-1);                
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <>
        <div className="contador">
        <div className="contadorHijo">
            <button className="button" disabled={count <= 1} onClick={handleDecrement}>-</button>
            <h2>{count}</h2>
            <button className="button" onClick={handleAdd}>+</button>
        </div>
        <div>
            <button className="buttonAgregar" disabled={stock <=0} onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
        </div>
        </> 

      );    
}
/*<ItemCount initial={1} stock={5} onAdd={agregarAlCarrito} />*/

export default ItemCount;