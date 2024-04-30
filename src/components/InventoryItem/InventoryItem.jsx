import React from 'react'
import './InventoryItem.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

const InventoryItem = ({id,nombre,codigo,cantidad,precio,imagen}) => {
  const [itemCount, setItemCount] = useState(0)


  return (
    <div className='inventory-item'>
        <div className="inventory-item-container">
            <img className='inventory-item-image' src={imagen} alt="" />
            {!itemCount
                ? <AddCircleIcon className='add' onClick={()=>setItemCount(prev=>prev+1)} style={{color: 'white'}}></AddCircleIcon>
                : <div className='inventory-item-counter'>
                    <RemoveIcon onClick={()=>setItemCount(prev=>prev-1)}></RemoveIcon>
                    <p>{itemCount}</p>
                    <AddIcon onClick={()=>setItemCount(prev=>prev+1)}></AddIcon>
                </div>
            }
        </div>
        <div className="inventory-item-info">
            <div className="inventory-item-name-quantity">
                <p>{nombre}</p>
                <p>Stock: {cantidad}</p>
            </div>
            <p className='inventory-item-description'>
                Codigo: {codigo}
            </p>
            <p className="inventory-item-price">
                Precio: ${precio}
            </p>
        </div>
    </div>
  )
}

export default InventoryItem