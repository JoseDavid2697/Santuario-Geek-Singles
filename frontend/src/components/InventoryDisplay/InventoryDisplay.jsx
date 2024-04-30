import React, { useContext } from 'react'
import './InventoryDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import InventoryItem from '../InventoryItem/InventoryItem'

const InventoryDisplay = () => {
    const {inventory_list} = useContext(StoreContext)


  return (
    <div className='inventory-display' id='inventory-display'>
        <h2>Singles y Cores</h2>
        <div className='inventory-display-list'>
            {inventory_list.map((item, index) => {
                return <InventoryItem key={index}
                          id={item.Id} 
                          nombre={item.Nombre} 
                          codigo={item.Codigo} 
                          cantidad={item.Cantidad} 
                          precio={item.Precio} 
                          imagen={item.Imagen}>
                      </InventoryItem>
            })}
        </div>
    </div>
  )
}

export default InventoryDisplay