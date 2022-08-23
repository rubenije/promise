import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
//import Detail from './components/Detail';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'
import Category from './pages/Category'
import Product from './pages/Product'



const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='category/:categoria' element={<Category/>} />
        <Route path='/about-us' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/product/:idProducto' element={<Product/>} />
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
