import React, { useContext, useEffect } from "react";
import List from "../../components/List/List";
import "./ProfilePage.scss";
import Chat from "../../components/chat/Chat";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../useContext/UserContext";

function ProfilePage() {
  const { fetchedData, updateUser } = useContext(myContext);
  
  
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user/logout");
      console.log(response);
      updateUser(null);
      navigate("/loginPage");
      window.location.reload();
    } catch (error) {
      console.log("Logout error:", error.message);
    }
  };

  return (
    <div className="ProfilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button onClick={() => navigate("/UpdatePage")}>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src={fetchedData.avatar}
                alt="User Avatar"
              />
            </span>
            <span>
              Username: <b>{fetchedData?.username}</b>
            </span>
            <span>
              Email: <b>{fetchedData?.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button onClick={()=>navigate("/PostUploadForm")}>Create New Post</button>
          </div>
          <div className="title">
            <List />
          </div>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
