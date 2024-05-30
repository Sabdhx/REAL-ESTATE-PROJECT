import React, { useState } from 'react'
import "./Chat.scss"

function Chat() {
  const [chat,setChat] = useState(true)
  return (
    <div className='chat'>
      <div className="messages">
        <h1>Messages</h1>

        <div className="message">
          <img src="https://hips.hearstapps.com/hmg-prod/images/copy-of-del-social-index-image-2023-07-21t114702-854-64baa8a5cd6d7.png?crop=0.502xw:1.00xh;0,0&resize=640:*" alt="" />
          <span>Lana Delray</span>
          <p>Lorem ipsum dolor consectetur ...</p>
        </div>

        <div className="message">
          <img src="https://hips.hearstapps.com/hmg-prod/images/copy-of-del-social-index-image-2023-07-21t114702-854-64baa8a5cd6d7.png?crop=0.502xw:1.00xh;0,0&resize=640:*" alt="" />
          <span>Lana Delray</span>
          <p>Lorem ipsum dolor consectetur ...</p>
        </div>

        <div className="message">
          <img src="https://hips.hearstapps.com/hmg-prod/images/copy-of-del-social-index-image-2023-07-21t114702-854-64baa8a5cd6d7.png?crop=0.502xw:1.00xh;0,0&resize=640:*" alt="" />
          <span>Lana Delray</span>
          <p>Lorem ipsum dolor consectetur ...</p>
        </div>


        <div className="message">
          <img src="https://hips.hearstapps.com/hmg-prod/images/copy-of-del-social-index-image-2023-07-21t114702-854-64baa8a5cd6d7.png?crop=0.502xw:1.00xh;0,0&resize=640:*" alt="" />
          <span>Lana Delray</span>
          <p>Lorem ipsum dolor consectetur ...</p>
        </div>

        <div className="message">
          <img src="https://hips.hearstapps.com/hmg-prod/images/copy-of-del-social-index-image-2023-07-21t114702-854-64baa8a5cd6d7.png?crop=0.502xw:1.00xh;0,0&resize=640:*" alt="" />
          <span>Lana Delray</span>
          <p>Lorem ipsum dolor consectetur ...</p>
        </div>

        <div className="message">
          <img src="https://hips.hearstapps.com/hmg-prod/images/copy-of-del-social-index-image-2023-07-21t114702-854-64baa8a5cd6d7.png?crop=0.502xw:1.00xh;0,0&resize=640:*" alt="" />
          <span>Lana Delray</span>
          <p>Lorem ipsum dolor consectetur ...</p>
        </div>

        <div className="message">
          <img src="https://hips.hearstapps.com/hmg-prod/images/copy-of-del-social-index-image-2023-07-21t114702-854-64baa8a5cd6d7.png?crop=0.502xw:1.00xh;0,0&resize=640:*" alt="" />
          <span>Lana Delray</span>
          <p>Lorem ipsum dolor consectetur ...</p>
        </div>

        <div className="message">
          <img src="https://hips.hearstapps.com/hmg-prod/images/copy-of-del-social-index-image-2023-07-21t114702-854-64baa8a5cd6d7.png?crop=0.502xw:1.00xh;0,0&resize=640:*" alt="" />
          <span>Lana Delray</span>
          <p>Lorem ipsum dolor consectetur ...</p>
        </div>

        <div className="message">
          <img src="https://hips.hearstapps.com/hmg-prod/images/copy-of-del-social-index-image-2023-07-21t114702-854-64baa8a5cd6d7.png?crop=0.502xw:1.00xh;0,0&resize=640:*" alt="" />
          <span>Lana Delray</span>
          <p>Lorem ipsum dolor consectetur ...</p>
        </div>


        <div className="message">
          <img src="https://hips.hearstapps.com/hmg-prod/images/copy-of-del-social-index-image-2023-07-21t114702-854-64baa8a5cd6d7.png?crop=0.502xw:1.00xh;0,0&resize=640:*" alt="" />
          <span>Lana Delray</span>
          <p>Lorem ipsum dolor consectetur ...</p>
        </div>

        <div className="message">
          <img src="https://hips.hearstapps.com/hmg-prod/images/copy-of-del-social-index-image-2023-07-21t114702-854-64baa8a5cd6d7.png?crop=0.502xw:1.00xh;0,0&resize=640:*" alt="" />
          <span>Lana Delray</span>
          <p>Lorem ipsum dolor consectetur ...</p>
        </div>

        <div className="message">
          <img src="https://hips.hearstapps.com/hmg-prod/images/copy-of-del-social-index-image-2023-07-21t114702-854-64baa8a5cd6d7.png?crop=0.502xw:1.00xh;0,0&resize=640:*" alt="" />
          <span>Lana Delray</span>
          <p>Lorem ipsum dolor consectetur ...</p>
        </div>

      </div>
     {chat==true && <div className='chatBox'>
        <div className="top">
          <div className="user">
            <img src="https://hips.hearstapps.com/hmg-prod/images/copy-of-del-social-index-image-2023-07-21t114702-854-64baa8a5cd6d7.png?crop=0.502xw:1.00xh;0,0&resize=640:*" alt="" />
            John Doe
          </div>
          <span className='close' onClick={()=>{setChat(null)}}>X</span>
        </div>
        <div className="center">
          <div className="chatMessage">
            <p> Lorem ipsum dolor  adipisicing elit.</p>  
            <span>1 hour ago</span>      
          </div>
          <div className="chatMessage own">
            <p> Lorem ipsum dolor  adipisicing elit.</p>  
            <span>1 hour ago</span>      
          </div>
          <div className="chatMessage own">
            <p> Lorem ipsum dolor  adipisicing elit.</p>  
            <span>1 hour ago</span>      
          </div>
          <div className="chatMessage own">
            <p> Lorem ipsum dolor  adipisicing elit.</p>  
            <span>1 hour ago</span>      
          </div> <div className="chatMessage ">
            <p> Lorem ipsum dolor  adipisicing elit.</p>  
            <span>1 hour ago</span>      
          </div>
          <div className="chatMessage">
            <p> Lorem ipsum dolor  adipisicing elit.</p>  
            <span>1 hour ago</span>      
          </div>
          <div className="chatMessage own">
            <p> Lorem ipsum dolor  adipisicing elit.</p>  
            <span>1 hour ago</span>      
          </div>
          <div className="chatMessage own">
            <p> Lorem ipsum dolor  adipisicing elit.</p>  
            <span>1 hour ago</span>      
          </div>
          <div className="chatMessage own">
            <p> Lorem ipsum dolor  adipisicing elit.</p>  
            <span>1 hour ago</span>      
          </div> <div className="chatMessage ">
            <p> Lorem ipsum dolor  adipisicing elit.</p>  
            <span>1 hour ago</span>      
          </div>
          
        </div>
        <div className="bottom">
          <textarea></textarea>
          <button>Send</button>
        </div>
      </div>}
    </div>
  )
}

export default Chat