import "./UpdatePage.scss";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { myContext } from "../../useContext/UserContext";
import UploadWidget from "../../components/UploadWidgets/UploadWidgets";

function UpdatePage() {
  const { fetchedData, updateUser } = useContext(myContext);
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(fetchedData.avatar);
  const [username, setUsername] = useState(fetchedData.username);
  const [email, setEmail] = useState(fetchedData.email);
  const [password, setPassword] = useState(""); // Initialize with empty string
  const [id, setId] = useState(fetchedData.id);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      avatar,
      username,
      email,
      password,
      id,
    };

    console.log(data); // Log data to check before sending request

    try {
      const response = await axios.put(`http://localhost:5000/update/updateOne/${id}`, data);
      updateUser({ username, email, id, avatar, password });
      navigate("/ProfilePage");
      console.log("Update successful:", response); // Log successful response
    } catch (error) {
      console.log("Update failed:", error); // Log error for debugging
      if (error.response) {
        console.log("Response data:", error.response.data); // Log specific error response data
      }
    }
  };

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              name="username"
              type="text"
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              name="email"
              type="email"
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
            />
          </div>
          <button>Update</button>
          {/* {error && <span>error</span>} */}
        </form>
      </div>
      <div className="sideContainer">
        <img
          src={avatar || fetchedData.avatar || "/noavatar.jpg"}
          alt=""
          className="avatar"
        />
        <UploadWidget
          uwConfig={{
            cloudName: "dv9dgpenv",
            uploadPreset: "upload widget",
            multiple: false,
            maxImageFileSize: 1048576,
            folder: "avatars",
          }}
          setAvatar={setAvatar}
        />
      </div>
    </div>
  );
}

export default UpdatePage;
