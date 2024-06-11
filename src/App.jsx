import Navbar from "./components/navbar/Navbar";
import "./layout.scss";
import HomePage from "./routes/homePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePage from "./routes/singlePage/SinglePage";
import ListPage from "./routes/listPage/ListPage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import LoginPage from "./routes/loginPage/LoginPage";
import Register from "./routes/register/Register";
import axios from "axios";
import { useContext } from "react";
import { myContext } from "./useContext/UserContext";
import UserNotFound from "./components/UserNotFound/UserNotFound";
import UpdatePage from "./routes/UpdatePage/UpdatePage";
axios.defaults.withCredentials=true

function App() {
  const {fetchedData} = useContext(myContext)

  return (
    <Router>
      <div className="layout">
       <div className="navbar">
         <Navbar />
       </div>
      <Routes>
        <Route path="/" element={
        <div className="content">
       <HomePage />
    </div>} />
   
        <Route path="/Listpage" element={<ListPage/>} />        
        <Route path="/ProfilePage/singlePage/:id" element={<SinglePage />} />
        {
          fetchedData ? (
            <Route path="/ProfilePage" element={<ProfilePage />} />
          ):(
            <Route path="/LoginPage" element={<LoginPage />} />
          )
        }
        <Route path="/ProfilePage" element={<ProfilePage />} />
        
        <Route path="/Register" element={<Register />} />
        <Route path="/UpdatePage" element={<UpdatePage/>} />

        <Route path="/*" element={<UserNotFound/>} />

      </Routes>
      </div>
    </Router>
     
  );
}

export default App;
