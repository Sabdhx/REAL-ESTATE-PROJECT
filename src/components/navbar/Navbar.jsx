import React, { useContext, useState } from "react";
import "./navbar.scss"; // Make sure the path is correct
import { Link, json } from "react-router-dom";
import { myContext } from "../../useContext/UserContext";

function Navbar() {
  const {item} = useContext(myContext)
  const parsedData = JSON.parse(item)
  
  const [open, setOpen] = useState(false);
  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>LamaEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>

      <div className="right">
        {user == true ? (
          <div className="user">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/copy-of-del-social-index-image-2023-07-21t114702-854-64baa8a5cd6d7.png?crop=0.502xw:1.00xh;0,0&resize=640:*"
              alt=""
            />
            {
              parsedData ? (
                <span>{parsedData.userFound.username}</span>
              ):(
                <span>user not found</span>
              )
            }
          
            <Link to={"/profile"} className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/">Sign up</a>
          </>
        )}

        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
