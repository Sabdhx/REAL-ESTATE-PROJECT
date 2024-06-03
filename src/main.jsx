import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.scss"
import UserContext from './useContext/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  <UserContext>
  <App />
  </UserContext>
    

  </React.StrictMode>,
)
