import "../styles/Products.css";
import { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import IsEmpty from "../components/IsEmpty";
import Loader from "../components/Loader";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);
  return (
    <Fragment>
      {!products && <Loader />}
      {products.length !== 0 ? (
        <section className="products-container" id="home">
          <h1>Products</h1>
          <div className="products">
            {products.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </section>
      ) : (
        <IsEmpty text={"Products"} />
      )}
    </Fragment>
  );
}
