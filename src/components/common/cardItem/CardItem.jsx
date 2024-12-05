import "./cardItem.css";
import { Link } from "react-router-dom";

const CardItem = ({ elemento }) => {
  return (
    <div className="cards" key={elemento.id}>
      <img src={elemento.imageUrl} alt="" className="imgCont" />
      <div className="descripcion">
        <h3>{elemento.title}</h3>
        <h4>{elemento.price}</h4>
        <h4>{elemento.descripcion}</h4>
        <h4>{elemento.marca}</h4>
        <Link to={`/detail/${elemento.id}`}>Ver detalles</Link>
      </div>
    </div>
  );
};

export default CardItem;