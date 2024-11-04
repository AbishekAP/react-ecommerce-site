import "../styles/Orders.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function OrderItem({ order }) {
  return (
    <Fragment>
      <div className="order-item">
        {order.orderItems.map((item) => {
          return (
            <Fragment>
              <Link to={`../product/${item.product._id}`}>
                <div className="order-item-details">
                  <div className="order-item-img">
                    <img src={item.product.images[0]} alt="smart phone" />
                  </div>
                  <div className="order-item-info">
                    <div className="order-item-title">
                      <h3>{item.product.name}</h3>
                    </div>
                    <div className="order-item-price">
                      <p>
                        Price:<span>Rs.{item.product.price}/-</span>
                      </p>
                    </div>
                    <div className="order-item-qty">
                      <p>
                        quantity:<span>{item.quantity}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </Fragment>
          );
        })}
        <div className="delivery-details">
          <h3>Deliver To:</h3>
          <div className="customer-details">
            <p>
              Name:<span>{order.deliveryDetails.name}</span>
            </p>
            <p>
              Address:<span>{order.deliveryDetails.address}</span>
            </p>
            <p>
              City:<span>{order.deliveryDetails.city}</span>
            </p>
            <p>
              Pincode:<span>{order.deliveryDetails.pincode}</span>
            </p>
            <p>
              Phone Number:<span>{order.deliveryDetails.phoneno}</span>
            </p>
            <p>
              Payment Method:<span>{order.deliveryDetails.paymentMethod}</span>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
