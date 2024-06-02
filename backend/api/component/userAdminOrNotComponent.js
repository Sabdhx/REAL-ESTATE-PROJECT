import jwt from "jsonwebtoken";

export const AuthenticatedUser= (req, res) => {
  
  const token = req.cookies.token;
  console.log(req.cookies.token)

  if (!token) return res.status(401).json({ error: "You are not authenticated" });
  jwt.verify(token, "secret", (err, payload) => {
    if (err) return res.status(400).json({ message: "Token unverified" });

    res.status(200).json({ message: "You are authenticated", payload });
  });
};

export const adminUser = (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ error: "You are not authenticated" });

  jwt.verify(token, "secret", (err, payload) => {
    if (err) return res.status(400).json({ message: "Token unverified" });

    if (payload.isAdmin) {
      res.status(200).json({message: "You are admin", payload});

    }
  });
};