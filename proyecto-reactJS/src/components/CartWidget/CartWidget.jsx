import React from 'react'
import "./cartWidget.css"

const CartWidget = (props) => {
  return (

    <div className='classCarrito' >{props.carrito}<span>2</span></div>
    
  )
}

export default CartWidget