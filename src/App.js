import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import Home from './Components/Pages/Home';
import Profile from './Components/Pages/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Loading from './Components/Pages/loading';
import ProductList from './Components/ProductList';
import AddProduct from './Components/AddProduct';
import PanierList from './Components/PanierList';
import { useState } from 'react';
import NavB from './Components/NavB';
// import { load } from 'npm';




function App() {

  const [inputsearch,setInputSearch]=useState("")

  return (
    <div className="App">
      <NavB setInputSearch={setInputSearch} />
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Profile" element={<Profile/>} />
        {/* <Route path="/Profile"  element={load?<Loading />:<Profile /> }/>  */}
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path='/' element={<ProductList />} />
        <Route path='/panier' element={<PanierList />} />
        <Route path='/AddProduct' element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;

