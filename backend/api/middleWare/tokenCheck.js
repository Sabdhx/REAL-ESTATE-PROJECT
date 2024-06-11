import jwt from "jsonwebtoken"

export const tokenCheck=(req,res,next)=>{
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: "You are not authenticated" });
  
  jwt.verify(token, "secret", async(err, payload) => {
    if (err) return res.status(400).json({ message: "Token unverified" });
    req.userId = payload.id
    next()
  })
}