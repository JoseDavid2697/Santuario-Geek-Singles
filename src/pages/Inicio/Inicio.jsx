import React from 'react'
import './Inicio.css'
import Header from '../../components/Header/Header'
import InventoryDisplay from '../../components/InventoryDisplay/InventoryDisplay'

const Inicio = () => {
  return (
    <div>
        <Header/>
        <InventoryDisplay/>
    </div>
  )
}

export default Inicio