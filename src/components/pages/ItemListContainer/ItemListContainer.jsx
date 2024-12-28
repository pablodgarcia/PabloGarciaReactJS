import { useEffect, useState } from "react";
import "./itemlistContainer.css";
import CardItem from "../../common/cardItem/CardItem";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = (props) => {
  const { name } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let referencia = productsCollection;

    if (name) {
      let unaParteDeLaColeccion = query(
        productsCollection,
        where("category", "==", name)
      );

      referencia = unaParteDeLaColeccion;
    }
    getDocs(referencia).then((res) => {
      let nuevoArray = res.docs.map((elemento) => {
        return { ...elemento.data(), id: elemento.id };
      });

      setItems(nuevoArray);
    });
  }, [name]);

  return (
    <div>
      <div>
        <h1 className="estiloHuno">{props.mensaje}</h1>
        <h2 className="estiloHdos">La mejor calidad</h2>
      </div>

      <div>
        {items.map((elemento) => {
          return <CardItem key={elemento.id} elemento={elemento} />;
        })}
      </div>
    </div>
  );
};

export default ItemListContainer;
