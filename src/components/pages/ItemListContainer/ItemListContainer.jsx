import { useEffect, useState } from "react";
import "./itemlistContainer.css";
import { products } from "../../../products";
import CardItem from "../../common/cardItem/CardItem";
import { useParams } from "react-router-dom";

export const ItemListContainer = (props) => {
  const { name } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const arrayFiltrado = products.filter(
      (elemento) => elemento.category === name
    );
    const getProducts = new Promise((resolve, reject) => {
      let islogged = true;
      if (islogged) {
        resolve(name ? arrayFiltrado : products);
      } else {
        reject({ message: "ocurrio un error" });
      }
    });

    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  return (
    <div>
      <h1 className="estiloHuno">{props.mensaje}</h1>
      <h2 className="estiloHdos">La mejor calidad</h2>
      {items.map((elemento) => {
        return <CardItem key={elemento.id} elemento={elemento} />;
      })}
    </div>
  );
};

export default ItemListContainer;
