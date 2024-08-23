import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Account } from "./pages/Account";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DeliveryForm from './components/DeliveryForm';
import OrderSummary from './components/OrderSummary';
import PaymentMethod from "./components/PeymentMethod";
import Orderplace from "./components/Orderplace";
import DataProvider from "./context/DataContext";
import NotFound from "./components/NotFound";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
function App() {
  return (
    <div className="App">
      <DataProvider>
      <Router>
        <div>
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
            theme="light" ></ToastContainer>
          <Header />
          <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/search" element={<Search />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/order/orderSummary" element={<OrderSummary />} />
            <Route path="/order/deliveryform" element={<DeliveryForm />} />
            <Route path="/order/paymentmethod" element={<PaymentMethod />} />
            <Route path="/order/orderplace" element={<Orderplace/>} />
            <Route path="/account" element={<Account />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/account/signin" element={<Signin />} />
            <Route path="/account/signup" element={<Signup />} />
          </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      </DataProvider>
    </div>
  );
}

export default App;