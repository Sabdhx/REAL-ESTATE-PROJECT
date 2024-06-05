import "./Register.scss"
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username:"",
    email: "",
    password: ""
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("first");
      const fetchingData = await axios.post("http://localhost:5000/user/register"
        ,data
      );
      console.log(fetchingData)
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Sign In</h2>
        <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-input-container">
            <input
              onChange={(e) => setData({ ...data, username: e.target.value })}
              value={data.username}
              type="text"
              name="username"
              placeholder="username"
              className="login-input"
            />
          </div>
          <div className="login-input-container">
            <input
              onChange={(e) => setData({ ...data, email: e.target.value })}
              value={data.email}
              type="email"
              name="email"
              placeholder="Email"
              className="login-input"
            />
          </div>
          <div className="login-input-container">
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              placeholder="Password"
              className="login-input"
            />
          </div>
          <button type="submit" className="login-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Register