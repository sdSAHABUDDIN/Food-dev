import React from 'react'
import Navber from './components/Navber/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Order from './pages/Order/Order'


function App() {
  return (
    <div className='app'>
      <Navber />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Order/>}/>
        
        
      </Routes>
    </div>
  )
}

export default App