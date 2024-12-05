import "./cartWidget.css";
import "../../Button/buttonCarrito/ButtonCart.jsx";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div className="classCarrito">
      <div>
        <Link to="/carrito">
          <BsCart />
        </Link>
      </div>
    </div>
  );
};

export default CartWidget;