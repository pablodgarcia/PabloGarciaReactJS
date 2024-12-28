import "./navBar.css";
import Logo from "../../../common/Logo/Logo.jsx";
import ButtonNavbar from "../../../Button/ButtonNavbar/ButtonNavbar.jsx";
import ButtonCart from "../../../Button/buttonCarrito/ButtonCart.jsx";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="flex">
        <Link to="/">
          <Logo />
        </Link>

        <ul>
          <div className="productosNav">
            <li>
              <Link to="/category/Equipos">
                <ButtonNavbar boton="Equipos " color="orange" />
              </Link>
            </li>
            <li>
              <Link to="/category/Selecciones">
                <ButtonNavbar boton="Selecciones " color="orange" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <ButtonNavbar boton="Todas" color="orange" />
              </Link>
            </li>
            <li>
              <ButtonCart boton={<BsCart />} />
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
