import React, { createContext, useState } from "react";

export const DataContext = createContext({});
function DataProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: null,
    phoneno: null,
    city: null,
    pincode: null,
    address: null,
    paymentMethod: null,
  });
  const [orders, setOrders] = useState([]);
  const [accountDetails, setAcountDetails] = useState({});
  return (
    <DataContext.Provider
      value={{
        cartItems,
        setCartItems,
        orderItems,
        setOrderItems,
        deliveryDetails,
        setDeliveryDetails,
        orders,
        setOrders,
        accountDetails,
        setAcountDetails,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
