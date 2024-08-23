import React, { useContext } from "react";
import { Fragment } from "react";
import "../styles/DeliveryForm.css";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import NotFound from "./NotFound";

export default function DeliveryForm() {
  const { deliveryDetails, setDeliveryDetails, accountDetails } =
    useContext(DataContext);
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDeliveryDetails((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const hanldeSumbit = (e) => {
    e.preventDefault();
    navigate("/order/ordersummary");
  };
  return (
    <Fragment>
      {accountDetails.email ? (
        <section className="customer-details-form-container">
          <div className="navigation">
            <div className="disk active">
              <p>1</p>
            </div>
            <div className="connection"></div>
            <div className="disk">
              <p>2</p>
            </div>
            <div className="connection"></div>
            <div className="disk">
              <p>3</p>
            </div>
          </div>
          <h1>Your Details</h1>
          <form className="customer-details-form" onSubmit={hanldeSumbit}>
            <div className="customer-details-form-wrapper">
              <div className="input-grp">
                <label htmlFor="customer-name">Name:</label>
                <input
                  type="text"
                  title="name"
                  name="name"
                  id="name"
                  placeholder="Eg.John"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-grp">
                <label htmlFor="customer-phone-no">Phone Number:</label>
                <input
                  type="text"
                  title="phone-no"
                  name="phoneno"
                  id="phoneno"
                  placeholder="Eg.9876543210"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-grp">
                <label htmlFor="customer-city">City:</label>
                <input
                  type="text"
                  title="customer-city"
                  name="city"
                  id="city"
                  placeholder="Eg.Chennai"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-grp">
                <label htmlFor="customer-city-pincode">Pincode:</label>
                <input
                  type="text"
                  title="customer-city-pincode"
                  name="pincode"
                  id="pincode"
                  placeholder="Eg.600 028"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-grp">
                <label htmlFor="customer-Address">Address:</label>
                <textarea
                  name="address"
                  id="address"
                  cols="30"
                  rows="5"
                  placeholder="10-100 Words"
                  required
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
            <div className="btn-grp">
              <Link to={"/order/deliveryform"}>
                <button type="button" className="btn plain" title="buy-items">
                  Back
                </button>
              </Link>
              <button type="submit" className="btn" title="contiue">
                contiue
              </button>
            </div>
          </form>
        </section>
      ) : (
        <NotFound />
      )}
    </Fragment>
  );
}
