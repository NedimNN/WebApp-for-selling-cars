import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Shop from "../pages/Shop"
import CarDetails from "../pages/CarDetails"
import Cart from "../pages/Cart"
import NotFound from "../pages/NotFound"

const Routers = () => {
  return (
  <Routes>
    <Route path='/' element={<Navigate to='/home'/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/cars/:slug' element={<CarDetails/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  );
};

export default Routers