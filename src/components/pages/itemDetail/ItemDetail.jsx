import { useEffect, useState } from "react";
import { products } from "../../../products";
import { useParams } from "react-router-dom";
import "./itemDetail.css";
import Counter from "../../common/counter/Counter";

const ItemDetail = () => {
  const { itemId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const elementoEncontrado = products.find(
      (elemento) => elemento.id === itemId
    );
    setProduct(elementoEncontrado);
  }, [itemId]);

  return (
    <div>
      <div>
        <img src={product.imageUrl} alt="" className="imgDetail" />
        <div className="descripcionDetail">
          <h3>{product.title}</h3>
          <h4>{product.price}</h4>
          <h4>{product.descripcion}</h4>
          <h4>{product.marca}</h4>
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
