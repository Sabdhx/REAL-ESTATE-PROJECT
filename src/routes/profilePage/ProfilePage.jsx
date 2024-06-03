import React, { useContext } from "react";
import List from "../../components/List/List";
import "./ProfilePage.scss";
import Chat from "../../components/chat/Chat";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../useContext/UserContext";

function ProfilePage() {
  const { item } = useContext(myContext);
  console.log(item);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:5000/logout");
      console.log(response);
      localStorage.removeItem("user")
      navigate("/loginPage");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="ProfilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/copy-of-del-social-index-image-2023-07-21t114702-854-64baa8a5cd6d7.png?crop=0.502xw:1.00xh;0,0&resize=640:*"
                alt=""
              />
            </span>
            <span>
              Username: <b>Lana Delray</b>
            </span>
            <span>
              Email: <b>lana.delray@example.com</b>
            </span>
            <button onClick={handleLogout}>logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <div className="title">
            {/*<h1>Saved List</h1>*/}
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
