
import React from 'react'
import "../Button/button.css"

const Button = (props) => {


  return (
    <div>
       <button className='botonCarrito'>{props.boton}</button>
    </div>
  )
}

export default Button
