import React, { useEffect, useState } from 'react';
import "./LoginPage.scss";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const navigate = useNavigate();
  const [error,setError] = useState("")
  const [data, setData] = useState({
    email: "",
    password: ""
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("first");
      const fetchingData = await axios.post("http://localhost:5000/login", data);
      console.log(fetchingData);
      
      localStorage.setItem("user",JSON.stringify(fetchingData.data))

      navigate("/");
    } catch (error) {
      setError("email or password is incorrect")
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Sign In</h2>
        <form className="login-form" onSubmit={handleSubmit}>
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
          {error && <span>{error}</span>}
          <button type="submit" className="login-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
