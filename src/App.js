import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';
import ItemDetailContainer from './containers/ItemDetailContainer';
import NotFound from './components/NotFound';
import Cart from './containers/CartContainer';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
