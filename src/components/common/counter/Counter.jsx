import { useContext, useState } from "react";
import "./counter.css";
import { CartContext } from "../../context/CartContext";
import { Toaster, toast } from "sonner";

const Counter = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < product.stock) {
      setContador(contador + 1);
    } else {
      toast("Limite de stock dsiponible");
    }
  };
  const restar = () => {
    setContador(contador - 1);
  };

  const onAdd = () => {
    let objetoParaElCarrito = { ...product, quantity: contador };
    addToCart(objetoParaElCarrito);
  };

  return (
    <div>
      <Toaster />
      <div className="counter">
        <button onClick={restar} className="buttonCounter">
          -
        </button>
        <h4> {contador} </h4>
        <button onClick={sumar} className="buttonCounter">
          +
        </button>
      </div>
      <button
        onClick={() => {
          onAdd();
          toast("Agregado con éxito");
        }}
        className="buttonCounter"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
