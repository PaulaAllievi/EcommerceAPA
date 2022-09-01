import React from "react";
import CartWidget from "../CartWidget";
import './styles.css';


const NavBar = () => {
    return (
        <div>
        <nav className="nav">
            <ul>
                <li><a>Inicio </a></li>
                <li><a>Productos</a></li>
                <li><a>Nosotros</a></li>                
            </ul> 
            <CartWidget/>
        </nav>
        </div>   
   
    )
}

export default NavBar

