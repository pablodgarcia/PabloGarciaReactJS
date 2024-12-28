import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./itemDetail.css";
import Counter from "../../common/counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

const ItemDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productsColection = collection(db, "products");
    let refDoc = doc(productsColection, id);

    getDoc(refDoc).then((res) => {
      setProduct({ ...res.data(), id: res.id });
    });
  }, [id]);

  return (
    <div>
      <div className="todoItem">
        <img src={product.imageUrl} alt="" className="imgDetail" />
        <div className="descripcionDetail">
          <h3>{product.title}</h3>
          <h4>{product.price}$</h4>
          <h4>{product.descripcion}</h4>
          <h4>{product.marca}</h4>
        </div>
        <div className="counter">
          <Counter product={product} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
