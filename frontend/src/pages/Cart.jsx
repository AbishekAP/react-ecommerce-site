import { Fragment, useEffect, React, useContext } from "react";
import "../styles/Cart.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import IsEmpty from "../components/IsEmpty";
import Loader from "../components/Loader";

export default function Cart() {
  const { cartItems, setCartItems, setOrderItems ,accountDetails} = useContext(DataContext);
  const navigate = useNavigate();
  useEffect(() => {
    setOrderItems(cartItems);
  }, [cartItems]);

  const increaseQty = (item) => {
    if (item.quantity < item.product.stock_count) {
      const updatedCart = cartItems.filter((cartItem) =>
        cartItem.product._id === item.product._id
          ? (cartItem.quantity += 1)
          : cartItem
      );
      setCartItems(updatedCart);
    } else {
      toast.info("Maximaun Stock!");
    }
  };

  const decreaseQty = (item) => {
    if (item.quantity > 1) {
      const updatedCart = cartItems.filter((cartItem) =>
        cartItem.product._id === item.product._id
          ? (cartItem.quantity -= 1)
          : cartItem
      );
      setCartItems(updatedCart);
    } else {
      toast.info("Minimunm Count Reached!");
    }
  };
  const handleBuy = (item) => {
    setOrderItems(() => [item]);
    accountDetails.email ? navigate("/order/deliveryform") : toast.info('signin to contiue')
  };
  return (
    <Fragment>
      {!cartItems && <Loader />}
      {cartItems.length !== 0 ? (
        <section className="carts-container">
          <h1>Your Cart</h1>
          <div className="cart-items">
            {cartItems.map((item) => (
              <Fragment>
                <div className="cart-item" key={item._id}>
                  <div className="cart-item-img">
                    <img src={item.product.images[0]} alt={item.product.name} />
                  </div>
                  <div className="cart-item-details">
                    <div className="cart-item-title">
                      <h3>{item.product.name}</h3>
                    </div>
                    <div className="cart-item-price">
                      <p>
                        Rs.<span>{item.product.price}</span>/-
                      </p>
                    </div>
                    <div className="cart-item-price">
                      <p>
                        Stock:<span>{item.product.stock_count}</span>
                      </p>
                    </div>
                    <div className="cart-item-qty">
                      <button type="button" onClick={() => decreaseQty(item)}>
                        -
                      </button>
                      <input
                        type="text"
                        inputMode="numeric"
                        readOnly
                        value={item.quantity}
                        name="cart-item-qty"
                        title="cart-item-qty"
                      />
                      <button type="button" onClick={() => increaseQty(item)}>
                        +
                      </button>
                    </div>
                    <div className="cart-item-stock">
                      <p>
                        Stock:<span> In stock</span>
                      </p>
                    </div>
                    <div className="cart-item-description">
                      <p>{item.product.description}</p>
                    </div>
                    <div className="cart-item-btns">
                      <button
                        type="button"
                        className="btn plain"
                        onClick={() => {
                          setCartItems(() =>
                            cartItems.filter(
                              (cartItem) =>
                                cartItem.product._id !== item.product._id
                            )
                          );
                        }}
                      >
                        Remove
                      </button>
                      <button
                        type="button"
                        className="btn"
                        onClick={() => handleBuy(item)}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
          <div className="buy-cart-items-container">
            <div className="total-price">
              <p>
                Total:
                <span>
                  Rs.
                  {cartItems.reduce(
                    (acc, item) => acc + item.product.price * item.quantity,
                    0
                  )}
                  /-
                </span>
              </p>
            </div>
            <div className="buy-cart-items">
                <button type="button" className="btn" title="buy-cart-items" onClick={()=>{ accountDetails.email ? navigate("/order/deliveryform") : toast.info('signin to contiue')}}>
                  Place order
                </button>
            </div>
          </div>
        </section>
      ) : (
        <IsEmpty text={"Cart"} />
      )}
    </Fragment>
  );
}
