import React, { useContext, useEffect, useState } from "react";
import "./Chat.scss";
import axios from "axios";
import { format } from "timeago.js";
import { myContext } from "../../useContext/UserContext";
import { socketContext } from "../../useContext/socketContext";

function Chat() {
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [chatBox, setChatBox] = useState(false);
  const {fetchedData} = useContext(myContext)
  const {socketData,setSocketData} = useContext(socketContext)
 
  useEffect(() => {
    const fetchingChats = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/chats");
        setChat(response.data);
      } catch (error) {
        console.error("Error fetching chats:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchingChats();
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  const handleChatOpen = async (id, reciever) => {
    const response = await axios.get(`http://localhost:5000/chats/${id}`);
    setChatBox({ ...response.data.chat, reciever });
    console.log(chatBox)

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const text = data.get("text"); 
    console.log(text);
    if(!text) return;
    try {
        const response = await axios.post(`http://localhost:5000/message/${chatBox.id}`, { text });
        setChat((prev) => ({ ...prev, messages: [...(prev?.messages || []), response.data] }));
        e.target.reset();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};
  const handleClick = ()=>{
    socketData.emit("test" , "hello client")
  }

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <button onClick={handleClick}>click me</button>
        {chat?.chats?.map((item) => (
          <div
            className="message"
            key={item.id}
            onClick={() => handleChatOpen(item.id, item.reciever)}
          >
            <img
              src={item.reciever.avatar || "default-avatar.png"}
              alt={item.reciever.username}
            />
            <span>{item.reciever.username}</span>
            <p>{item.lastMessage || "No messages yet..."}</p>
          </div>
        ))}
      </div>
      {chatBox && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src={
                  chatBox.reciever.avatar ||
                  "https://hips.hearstapps.com/hmg-prod/images/copy-of-del-social-index-image-2023-07-21t114702-854-64baa8a5cd6d7.png?crop=0.502xw:1.00xh;0,0&resize=640:*"
                }
                alt="John Doe"
              />
              {chatBox.reciever.username}
            </div>
            <span
              className="close"
              onClick={() => {
                setChatBox(false);
              }}
            >
              X
            </span>
          </div>
          <div className="center">
            {chatBox.messages.map((message) => {
              return (
                <div className="chatMessage"
                style={{
    alignSelf: message.userId === fetchedData.id ? "flex-end" : "flex-start",
    textAlign: message.userId === fetchedData.id ? "right" : "left",
  }}
                >
                  <p>{message.text}</p>
                  <span>{format(chatBox.createdAt)}</span>
                </div>
              );
            })}
          </div>
          <form className="bottom" onSubmit={handleSubmit}>
    <textarea name="text" type="text"></textarea>
    <button>Send</button>
</form>
        </div>
      )}
    </div>
  );
}

export default Chat;
