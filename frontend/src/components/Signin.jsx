import React, { useContext,  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Signin.css";
import { DataContext } from "../context/DataContext";
import { toast } from "react-toastify";

function Signin() {
  const navigate = useNavigate();
  const { setAcountDetails } = useContext(DataContext);
  const [tempDetails, setTempDetails] = useState({
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
    if (tempDetails.email && tempDetails.password) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/user-login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email:tempDetails.email, password:tempDetails.password }),
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
      } 
      else{
        toast.error('Please Enter Details');
      }
    }
    return (
      <section className="signin-container">
      <form onSubmit={hanldeSumbit}>
        <h2>Sign in</h2>
        <div className="input-grp">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-grp">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="btn-grp">
          <button type="submit" className="btn">
            Sign in
          </button>
        </div>
        <div className="if-container">
          <p>If you didn't have a account</p>
          <Link to={"/account/signup"}>Sign up</Link>
        </div>
      </form>
    </section>
  );
}

export default Signin;
