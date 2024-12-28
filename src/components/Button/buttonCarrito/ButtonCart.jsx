import { useContext, useState } from "react";
import "../buttonCarrito/buttonCart.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
useState;

const ButtonCart = ({ boton }) => {
  const { cart } = useContext(CartContext);

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <Link to="/carrito">
        <button className="botonCarrito">
          {boton} <h5>{totalQuantity}</h5>
        </button>
      </Link>
    </div>
  );
};

export default ButtonCart;
