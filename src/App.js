import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';
import Item from './components/Item';
import Cart from './components/Cart';

//import Detail from './components/Detail';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import Category from './pages/Category'
import Product from './pages/Product'



const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='category/:categoria' element={<Category/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/product/:idProducto' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      
      
     { /* 
      <Navbar></Navbar>
      <h1>ItemListContainer</h1>
      <ItemListContainer></ItemListContainer>
     */ }
      </div>
  );
}
//<Detail></Detail>
//<ItemListContainer></ItemListContainer>
//<Detail></Detail>
export default App;
