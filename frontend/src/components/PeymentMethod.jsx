import React, { Fragment, useContext } from "react";
import { toast } from 'react-toastify';
import '../styles/PaymentMethod.css';
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import NotFound from "./NotFound";

function PaymentMethod() {
    const {deliveryDetails, setDeliveryDetails, orderItems,setOrders,accountDetails} = useContext(DataContext)
    const email = accountDetails.email;
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email && deliveryDetails && orderItems) {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/create-orders`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email,deliveryDetails, orderItems })
                });
                const responseData = await response.json();
                if (response.status === 200) {
                    toast.success(responseData.message);
                    navigate('/order/orderplace');
                }
                else {
                    toast.error(responseData.message)
                }
            } catch (error) {
                toast.error("error! try again!")
            }
        }
        else {
            toast.error("error! No order details")
        }
    };
    const handleChange = (e) => {
        setDeliveryDetails((prevValues) => ({
            ...prevValues,
            paymentMethod: e.target.value
        }));
    }
    return <Fragment>
        { accountDetails.email ?<section className="payment-details-form-container">
            <div className="navigation">
                <div className="disk complete">
                    <p>1</p>
                </div>
                <div className="connection complete"></div>
                <div className="disk complete">
                    <p>2</p>
                </div>
                <div className="connection complete"></div>
                <div className="disk active">
                    <p>3</p>
                </div>
            </div>
            <h1>
                Payment Method
            </h1>
            <form className="payment-details-form" >
                <div className="input-grp disable">
                    <input type="radio" name="payment" title="UPI" id="upi" value={"UPI"} disabled checked={deliveryDetails.paymentMethod === "UPI"} onChange={handleChange} />
                    <label htmlFor="upi">UPI</label>
                </div>
                <div className="input-grp disable">
                    <input type="radio" name="payment" title="Credit & Debit Card" value={"Credit-Debit-Card"} id="credit-debit-card" checked={deliveryDetails.paymentMethod === "Credit-Debit-Card"} disabled onChange={handleChange} />
                    <label htmlFor="credit&debitcard">Credit & Debit Card</label>
                </div>
                <div className="input-grp disable">
                    <input type="radio" name="payment" title="Net Banking" id="net-banking" value={'net-banking'} disabled checked={deliveryDetails.paymentMethod === "net-banking"} onChange={handleChange} />
                    <label htmlFor="net-banking">Net Banking</label>
                </div>
                <div className="input-grp">
                    <input type="radio" name="payment" title="Cash on Delivery" id="cash-on-delivery" value={"cash-on-delivery"} checked={deliveryDetails.paymentMethod === "cash-on-delivery"} onChange={handleChange} />
                    <label htmlFor="cash-on-delivery">Cash on Delivery</label>
                </div>
            </form>
            <div className="btn-grp">
                <Link to={'/order/ordersummary'}>
                    <button type="button" className="btn plain" title="Back">Back</button>
                </Link>
                <button type="button" className="btn" title="Comfirm" onClick={handleSubmit}>Place Order</button>
            </div>
        </section>:
        <NotFound/>
}
    </Fragment>

}

export default PaymentMethod;