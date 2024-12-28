import { useContext, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import { Toaster, toast } from "sonner";
import "./checkout.css";

const Checkout = () => {
  const { cart, getTotalAmount, resetCart } = useContext(CartContext);

  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const [orderId, setOrderId] = useState(null); // null --> "dasdas"

  const envioDeFormulario = (evento) => {
    evento.preventDefault();

    let total = getTotalAmount();
    let order = {
      buyer: userInfo,
      items: cart,
      total,
    };

    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => {
      setOrderId(res.id);
      resetCart();
    });

    let productsCollection = collection(db, "products");
    order.items.forEach((elemento) => {
      let refDoc = doc(productsCollection, elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
    });
  };

  const capturaDatos = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="total">
      <Toaster richColors />
      {orderId ? (
        <h2>Gracias por su compra! Tu ticket es : {orderId}</h2>
      ) : (
        <form onSubmit={envioDeFormulario}>
          <input
            type="text"
            placeholder="nombre..."
            name="nombre"
            onChange={capturaDatos}
          />
          <input
            type="text"
            placeholder="email..."
            name="email"
            onChange={capturaDatos}
          />
          <input
            type="text"
            placeholder="telefono..."
            name="telefono"
            onChange={capturaDatos}
          />
          <button
            onClick={() => {
              toast.success("Compra exitosa. Lo esperamos pronto");
            }}
          >
            comprar
          </button>
          <button type="button">cancelar</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
