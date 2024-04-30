import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio/Inicio'
import Carrito from './pages/Carrito/Carrito'
import Orden from './pages/Orden/Orden'
import Admin from './pages/Admin/Admin'

const App = () => {    
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/cart' element={<Carrito/>}></Route>
        <Route path='/order' element={<Orden/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
      </Routes>
    </div>
  )
}

export default App