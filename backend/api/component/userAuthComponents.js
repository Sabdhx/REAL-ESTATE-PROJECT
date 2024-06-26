import bcrypt from "bcrypt";
import Prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const allUsers = async (req, res) => {
  const found = await Prisma.user.findMany();
  res.status(200).send(found);
};
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);

  try {
    const hash = await bcrypt.hash(password, salt); 
    console.log(hash);
    const user = await Prisma.user.create({
      data: {
        username,
        email,
        password: hash,
      },
    });
    const withOutPassword = {
      id: user._id,
      username: user.username,
      email: user.email,
      avatar:null
    };
    console.log(user);
    res
      .status(200)
      .json({ message: "User created successfully: ", user: withOutPassword });
  } catch (error) {
    console.log(error);
    res.status(500).json("User creation failed");
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    
  
    const token = jwt.sign(
      {
      username: user.username,
      email: user.email,
      isAdmin: true,
      id: user.id,
      avatar:user.avatar
      },
      "secret",
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 86400000),
    });

    


    res.status(200).json(
     { 
      username: user.username,
      email: user.email,
      isAdmin: true,
      id: user.id,
      avatar:user.avatar
    }
    );
  } catch (error) {
    console.log(error.message);
    // res.status(500).json({ message: "Failed to sign in" });
  }
};
export const logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).send({ message: "User logged out successfully" });
};

