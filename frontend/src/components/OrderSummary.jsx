import { Fragment, useContext, useEffect, useState } from "react";
import '../styles/OrderSummary.css';
import {Link} from 'react-router-dom'
import { DataContext } from "../context/DataContext";
import NotFound from '../components/NotFound'

export default function OrderSummary(){
    const {orderItems,deliveryDetails,accountDetails} = useContext(DataContext)
    const [price,setPrice] =  useState(0);
    useEffect(()=>{setPrice(orderItems.reduce((acc,item)=> acc+(item.product.price)*(item.quantity),0));},[orderItems])
    return <Fragment>
        {accountDetails.email ?
         <section className="order-summary-container">
         <div className="navigation">
            <div className="disk complete">
                <p>1</p>
            </div>
            <div className="connection complete"></div>
            <div className="disk complete">
                <p>2</p>
            </div>
            <div className="connection"></div>
            <div className="disk">
                <p>3</p>
            </div>
        </div>
        <h1>Order Summary</h1>
        <div className="customer-details-container">
            <div className="start-heading">
            <h3>Deliver To:</h3>
            </div>
            <div className="customer-details">
                <h3>{deliveryDetails.name},</h3>
                <p>
                    <span>Address:</span>
                    {deliveryDetails.address}
                </p>
                <p>
                    <span>City:</span>{deliveryDetails.city},
                </p>
                <p>
                    <span>Pincode:</span>{deliveryDetails.pincode},
                </p>
                <p>
                    <span>Phone Number:</span>{deliveryDetails.phoneno}
                </p>
            </div>
        </div>
        <div className="items-container">
            <h3>Items</h3>
            <div className="items">{
                orderItems.map((item)=><Fragment>
                <div className="item" key={item.product._id}>
                    <div className="item-img">
                        <img src={item.product.images[0]} alt={item.name} />
                    </div>
                    <div className="item-details">
                        <div className="item-title">
                            <h3>{item.product.name}</h3>
                        </div>
                        <div className="item-price">
                            <p>Rs.<span>{(item.product.price)*item.quantity}</span>/-</p>
                        </div>
                        <div className="item-qty">
                            <p>Quantity:<span>{item.quantity}</span></p>
                        </div>
                    </div>
                </div>
                </Fragment>)}
            </div>
        </div>
        <div className="order-summary">
            <h3>Summary</h3>
            <table>
                <tr>
                    <td>Price(Items:{orderItems.length}):</td>
                    <td>Rs.{price}/-</td>
                </tr>
                <tr>
                    <td>Delivey Fee:</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td>Total Price:</td>
                    <td>Rs.{price}/-</td>
                </tr>
            </table>
        </div>
        <div className="btn-grp">
            <Link to={'/order/deliveryform'}>
                <button type="button" className="btn plain" title="buy-items">Back</button>
            </Link>
            <Link to={'/order/paymentmethod'}>
                <button type="button" className="btn" title="buy-items">contiue</button>
            </Link>
        </div>
    </section> :
    <NotFound/>
    }
</Fragment>
}