import "./App.css";
import Navbar from "./components/layout/navbar/NavBar/NavBar";

import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/pages/cart/Cart";
import Footer from "./components/layout/footer/Footer";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import CartContextProvider from "./components/context/CartContext";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <CartContextProvider>
            <Navbar />

            <Routes>
              <Route
                path="/"
                element={
                  <ItemListContainer
                    ItemListContainer
                    mensaje="Bienvenidos al mundo de las camisetas"
                  />
                }
              />
              <Route
                path="/category/:name"
                element={
                  <ItemListContainer
                    ItemListContainer
                    mensaje="Bienvenidos al mundo de las camisetas"
                  />
                }
              />
              <Route path="/Carrito" element={<Cart />} />
              <Route path="/detail/:id" element={<ItemDetail />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
          </CartContextProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

//https://github.com/pablodgarcia/PabloGarciaReactJS
