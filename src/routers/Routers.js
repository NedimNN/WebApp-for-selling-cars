import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Shop from "../pages/Shop"
import CarDetails from "../pages/CarDetails"
import Cart from "../pages/Cart"
import Login from '../pages/Login'
import Register from '../pages/Register'
import Exchange from '../pages/Exchange'
import AddVehicle from '../pages/AddVehicle'
import NotFound from "../pages/NotFound"
import Checkout from '../pages/Checkout'
import Reservations from '../pages/Reservations'


const Routers = () => {
  return (
  <Routes>
    <Route path='/' element={<Navigate to='/home'/>}/>
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/cars/:slug' element={<CarDetails/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/exchange' element={<Exchange/>}/>
    <Route path='/addvehicle' element={<AddVehicle/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path='/reservations' element={<Reservations/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  );
};

export default Routers