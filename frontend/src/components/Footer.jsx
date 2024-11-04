import { Fragment } from "react";
import '../styles/Footer.css'
import { Link } from "react-router-dom";

export default function Footer(){
    return <Fragment>
            <footer className="footer"> 
            <div className="logo">
                <h1>
                    <Link to={'/'}>AP Mart</Link>
                </h1>
                <p>Discover. Shop. Enjoy.</p>
            </div>
        <div className="box-container">
            <div className="box">
                <h3>Quick Links</h3>
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/orders'}>Orders</Link>
            </div>
            <div className="box">
                <h3>Extra Links</h3>
                <Link to={'/account'}>My Account</Link>
                <Link to={'/orders'}>My orders</Link>
                <Link to={'/cart'}>My Cart</Link>
            </div>
            <div className="box">
                <h3>Locations</h3>
                <Link to={"/#"}>India</Link>
                <Link to={"/#"}>USA</Link>
                <Link to={"/#"}>Japan</Link>
            </div>
            <div className="box">
                <h3>Contact</h3>
                <Link to={"tel:+919876543210"}>+91 9876543210</Link>
                <Link to={"mailto:apmart@gmail.com"}>apmart@gmail.com</Link>
                <Link to={"/#"}>chennai,India</Link>
            </div>
        </div>
        <div className="credit"><p> Art By <span> AP Mart</span> | all rights reserved</p></div>
    </footer>
    </Fragment>
}