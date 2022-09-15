import React from "react";
import CartWidget from "../CartWidget";
import './styles.css';
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
        <nav className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category/men's clothing">Men</Link></li>
                <li><Link to="/category/women's clothing">Woman</Link></li> 
                <li><Link to="/category/electronics">Electronics</Link></li>  
                <li><Link to="/category/jewelery">Jewelery</Link></li>                 
            </ul> 
            <CartWidget/>
        </nav>
        </div>   
   
    )
}

export default NavBar

