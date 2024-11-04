import "../styles/Product.css";
import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom';
import { DataContext } from "../context/DataContext";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";

export default function Product() {
  const {cartItems, setCartItems,setOrderItems,accountDetails}  = useContext(DataContext)
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/product/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res.product));
  }, [product]);

  const [quantity, setGuantity] = useState(1);
  const addToCart = () => {
    const cartExist = cartItems.find((cart) => cart.product._id === product._id);
    if (!cartExist) {
      const newCart = { product: product, quantity: quantity };
      setCartItems((state) => [...state, newCart]);
      toast.success("Add to Cart Succesfully!");
    } else {
      toast.info("Already Exist");
    }
  };
  const handleBuy=(item)=>{
    setOrderItems(()=>[item]);
    accountDetails.email ?navigate('/order/deliveryform') : toast.info('signin to Contiue')
  }
  return (
    <Fragment>
      {!product && <Loader/>}
      {product ? (
        <section className="product-container">
          <div className="product">

          <div className="product-image">
            <img src={product.images[0]} alt="pdi" />
          </div>
          <div className="product-details">
            <div className="product-name">
              <h1>{product.name}</h1>
            </div>
            <div className="product-price">
              <h3>
                Rs.<span>{product.price}</span>/-
              </h3>
            </div>

            <div className="product-stock">
              <p>
                Stock:
                <span
                  className={product.stock_count > 0 ? "success" : "danger"}
                >
                  {product.stock_count > 0 ? "In stock" : "Out of stock"}
                </span>
              </p>
            </div>
            <div className="product-qty">
              <button
                type="button"
                onClick={() => setGuantity((state) => --state)}
              >
                -
              </button>
              <input
                type="text"
                inputMode="numeric"
                name="product-qty"
                title="product-qty"
                value={quantity > 0 ? quantity : 1}
                min="1"
                pattern="[1-9]\d*"
                readOnly
              />
              <button
                type="button"
                onClick={() => setGuantity((state) => ++state)}
              >
                +
              </button>
            </div>
            <div className="product-seller">
              <p>
                Seller: <span>{product.seller}</span>
              </p>
            </div>
            <div className="product-description">
              <h6>Description:</h6>
              <p>{product.description}</p>
            </div>
            <div className="product-btns">
              <button type="button" className="btn plain" onClick={()=>addToCart()}>
                Add Cart
              </button>
              <button type="button" className="btn" onClick={()=>handleBuy( { product: product, quantity: quantity })}>
                Buy Now
              </button>
            </div>
          </div>
      </div>
        </section>
      )
    :
    <NotFound/>
    }
    </Fragment>
  );
}
