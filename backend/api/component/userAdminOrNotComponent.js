import jwt from "jsonwebtoken";
// import { tokenCheck } from "../middleWare/tokenCheck";

export const AuthenticatedUser = (req, res) => {

    //  console.log(req.userId)
    res.status(200).json({ message: "You are authenticated" });
 
};

export const adminUser = (req, res) => {

   const token = req.cookies.token;
  

  if (!token) return res.status(401).json({ error: "You are not authenticated" });
  jwt.verify(token, "secret", async(err, payload) => {
    if (err) return res.status(400).json({ message: "Token unverified" });
    // req.userId = payload.id
    

    if (!payload.isAdmin) {
      return res.status(200).json({ message: "You are not admin" ,payload});
    }
    res.status(200).json({ message: "You are admin", payload });
  })
};
