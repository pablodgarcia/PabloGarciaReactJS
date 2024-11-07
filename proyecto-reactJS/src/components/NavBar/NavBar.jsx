import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./navBar.css"

const Navbar = () => {
  return (
    <div className='flex'>
       
        <h3 className='classHtres'>  Navbar  </h3>
        <CartWidget carrito="CartWidget 🛒 "/>
    </div>
  )
}

export default Navbar