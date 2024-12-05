import "../buttonCarrito/buttonCart.css";
import { Link } from "react-router-dom";

const ButtonCart = ({ boton }) => {
  return (
    <div>
      <button className="botonCarrito">
        <Link to="/carrito"> {boton} </Link>
      </button>
    </div>
  );
};

export default ButtonCart;
