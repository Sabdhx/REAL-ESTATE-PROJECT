import React, { useState } from 'react';
import "./LoginPage.scss";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fetchingData = await axios.post("http://localhost:5000/user/login", data);
      console.log(fetchingData.data);
      localStorage.setItem("user", JSON.stringify(fetchingData.data));
      window.location.href = "/";
      // navigate("/") is not necessary here because window.location.href already navigates
    } catch (error) {
      setError("email or password is incorrect");
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
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
          {error && <span>{error}</span>}
          {/* <Link to="/register">{"Don't"} you have an account?</Link> */}
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default LoginPage;
