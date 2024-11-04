import React, { useContext, useState } from "react";
import "../styles/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const { setAcountDetails } = useContext(DataContext);
  const [tempDetails, setTempDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTempDetails((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const hanldeSumbit = async (e) => {
    e.preventDefault();
    if (tempDetails.name && tempDetails.email && tempDetails.password) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/user-register`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: tempDetails.name,
              email: tempDetails.email,
              password: tempDetails.password,
            }),
          }
        );

        const responseData = await response.json();
        if (responseData.status === 200) {
          toast.success(responseData.message);
          setAcountDetails({
            email: responseData.email,
            name: responseData.name,
          });
          navigate("/account");
        } else {
          toast.error(responseData.message);
        }
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.error("Please Enter Details");
    }
  };
  return (
    <section className="signup-container">
      <form onSubmit={(e) => hanldeSumbit(e)}>
        <h2>Sign up</h2>
        <div className="input-grp">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="eg.John aue"
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-grp">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="eg.john2024@gmail.com"
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-grp">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Min 8 letter"
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="btn-grp">
          <button type="submit" className="btn">
            Sign up
          </button>
        </div>
        <div className="if-container">
          <p>If you already have a account</p>
          <Link to={"/account/signin"}>Sign in</Link>
        </div>
      </form>
    </section>
  );
}

export default Signup;
