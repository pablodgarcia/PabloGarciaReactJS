import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (!product.quantity) product.quantity = 1;
    setCart([...cart, product]);
  };

  const resetCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    const nuevoArray = cart.filter((elemento) => elemento.id !== id);
    setCart(nuevoArray);
  };

  const getTotalAmount = () => {
    let total = cart.reduce((acc, elemento) => {
      const price = parseFloat(elemento.price) || 0;
      const quantity = parseInt(elemento.quantity) || 0;
      return acc + price * quantity;
    }, 0);

    return total;
  };

  const getTotalItems = () => {
    return cart.reduce((acc, elemento) => acc + (elemento.quantity || 0), 0);
  };

  let data = {
    addToCart,
    cart,
    resetCart,
    deleteById,
    getTotalAmount,
    getTotalItems,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
