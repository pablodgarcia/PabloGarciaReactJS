import { Link } from "react-router-dom";
import "./cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, resetCart, deleteById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();

  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id} className="divDos">
            <div>
              <img className="imgPeqCart" src={elemento.imageUrl} alt="" />
            </div>
            <h2>Producto: {elemento.title}</h2>
            <h3>Precio: {elemento.price}$</h3>
            <h3>Cantidad: {elemento.quantity}</h3>

            <button onClick={() => deleteById(elemento.id)}>
              Eliminar del carrito
            </button>
          </div>
        );
      })}
      {total !== 0 && <h2>El total a pagar es {total}$</h2>}
      <button onClick={resetCart}>Limpiar Carrito</button>

      <Link to="/Checkout">
        <button>Terminar compra</button>
      </Link>
    </div>
  );
};

export default Cart;
