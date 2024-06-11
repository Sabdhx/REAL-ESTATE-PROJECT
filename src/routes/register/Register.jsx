import "./Register.scss";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("first");
      const fetchingData = await axios.post(
        "http://localhost:5000/user/register",
        data
      );
      console.log(fetchingData);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            onChange={(e) => setData({ ...data, username: e.target.value })}
            value={data.username}
            type="text"
            name="username"
            placeholder="username"
            className="login-input"
          />
          <input
            name="email"
            required
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            minLength={3}
            maxLength={20}
            type="email"
            placeholder="Email"
          />
          <input
            name="password"
            type="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required
            placeholder="Password"
          />
          <button type="submit">Login</button>
          {/* {error && <span>{error}</span>} */}
          {/* <Link to="/register">{"Don't"} you have an account?</Link> */}
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
