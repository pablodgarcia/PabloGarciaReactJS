import { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <div className="counter">
        <button onClick={restar}>-{restar}</button>
        <h4 style={{ color: "blue" }}> {contador} </h4>
        <button onClick={sumar}>+ {sumar}</button>
      </div>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
