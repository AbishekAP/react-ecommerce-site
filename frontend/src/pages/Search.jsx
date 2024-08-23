import { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";
import { IoAlertCircleSharp } from 'react-icons/io5'

export default function Search() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products?${searchParams}`)
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, [searchParams]);
  return (
    <Fragment>
      <section className="products-container">
        <h1>Search '{searchParams.get('keyword')}'</h1>
        <div className="products">
          {
            products.length != 0 ?
                products.map((product) => (
                  <ProductCard product={product} key={product._id} />
                )):
              <section className="empty-container">
                <IoAlertCircleSharp className="ion-icon" />
                <h3>No Products</h3>
              </section>
          }
        </div>
      </section>
    </Fragment>
  );
}
