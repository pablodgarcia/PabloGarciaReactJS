import "./App.css";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import Navbar from "./components/layout/navbar/NavBar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/pages/cart/Cart";
import Footer from "./components/layout/footer/Footer";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
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
            <Route path="/detail/:itemId" element={<ItemDetail />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

//https://github.com/pablodgarcia/PabloGarciaReactJS
