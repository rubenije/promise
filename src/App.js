import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
//import ItemListContainer from './components/ItemListContainer';
import Detail from './components/Detail';


const App = () => {
  return (
    <div className="App">
     <Navbar></Navbar>
      <h1>Cursos en Coder</h1>
      <Detail></Detail>
    </div>
  );
}
//<Detail></Detail>
//<ItemListContainer></ItemListContainer>
export default App;
