import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.scss"
import UserContext from './useContext/UserContext.jsx'
import SocketContext from './useContext/socketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  <UserContext>
  <SocketContext>
  <App />
 </SocketContext>
  </UserContext>
    

  </React.StrictMode>,
)
