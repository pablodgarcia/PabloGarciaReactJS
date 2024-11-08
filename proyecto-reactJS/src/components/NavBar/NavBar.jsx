import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./navBar.css"
import Logo from "../Logo/Logo.jsx"


const Navbar = () => {
  return (
    <nav>  
      <div className='flex'>
        <Logo />
        <ul>
          <div className='productosNav'>
            <li> Nacionales </li>
            <li> Selecciones </li>
            <li> Entrenamiento </li>
          </div>
        </ul>
        <CartWidget carrito=" 🛒 " />
      </div>
    </nav>
  )
}

export default Navbar