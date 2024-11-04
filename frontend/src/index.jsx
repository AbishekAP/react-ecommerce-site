import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Account } from "./pages/Account";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DeliveryForm from "./components/DeliveryForm";
import OrderSummary from "./components/OrderSummary";
import PaymentMethod from "./components/PeymentMethod";
import Orderplace from "./components/Orderplace";
import DataProvider from "./context/DataContext";
import NotFound from "./components/NotFound";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/order/orderSummary",
        element: <OrderSummary />,
      },
      {
        path: "/order/deliveryform",
        element: <DeliveryForm />,
      },
      {
        path: "/order/paymentmethod",
        element: <PaymentMethod />,
      },
      {
        path: "/order/orderplace",
        element: <Orderplace />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
      {
        path: "/account/signin",
        element: <Signin />,
      },
      {
        path: "/account/signup",
        element: <Signup />,
      },
    ],
  },
]);

function App() {
  return (
    <DataProvider>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      ></ToastContainer>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </DataProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);