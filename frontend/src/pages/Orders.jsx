import { Fragment, useContext, useEffect } from "react";
import "../styles/Orders.css";
import OrderItem from "../components/OrderItem";
import { IoAlertCircleSharp } from "react-icons/io5";
import { DataContext } from "../context/DataContext";

export default function Orders() {
  const { orders, setOrders, accountDetails } = useContext(DataContext);
  useEffect(() => {
    try {
      fetch(`${import.meta.env.VITE_API_URL}/user-orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: accountDetails.email }),
      })
        .then((res) => res.json())
        .then((res) => setOrders(res.userOrders));
      } catch (error) {
        setOrders([])
    }
  }, []);
  return (
    <Fragment>
      {orders && orders.length != 0 ? (
        <section className="orders-container">
          <h1>Your orders</h1>
          <div className="order-items">
            {orders.map((order) => (
              <OrderItem order={order} key={order._id} />
            ))}
          </div>
        </section>
      ) : (
        <section className="empty-container">
          <IoAlertCircleSharp className="ion-icon" />
          <h3>Orders Empty</h3>
        </section>
      )}
    </Fragment>
  );
}
