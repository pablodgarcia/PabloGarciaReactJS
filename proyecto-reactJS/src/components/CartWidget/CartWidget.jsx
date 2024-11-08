import React from 'react'
import "./cartWidget.css"
import "../Button/Button.jsx"
import Button from '../Button/Button.jsx'

const CartWidget = (props) => {
  return (

    <div className='classCarrito' >{props.carrito}<span className='indicadorCarrito'> : 2</span>
   
         <Button boton="Ver carrito"/> {/*practica*/}

    </div>
  )
}

export default CartWidget