import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState('inicio')
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="logo" className='logo'/>
        <ul className='navbar-menu'>
            <li onClick={() => setMenu('inicio') } className={menu==='inicio'?'active':''}><Link to={'/'}>Inicio</Link></li>
            <li onClick={() => setMenu('singles') } className={menu==='singles'?'active':''}>Singles</li>
            <li onClick={() => setMenu('decks') } className={menu==='decks'?'active':''}>Decks</li>
            <li onClick={() => setMenu('puntos-de-entrega') } className={menu==='puntos-de-entrega'?'active':''}>Puntos de Entrega</li>
        </ul>
        <div className='navbar-right'>
            <SearchIcon/> 
            <div className='navbar-search-icon'>
                <ShoppingCartIcon/>
                <div className="dot"></div>
            </div>
            <button>
                <Link to='/admin'>Ingresar</Link>
            </button>
        </div>
    </div>
  )
}

export default Navbar