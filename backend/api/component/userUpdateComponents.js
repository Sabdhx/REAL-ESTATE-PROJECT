import Prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";

export const getAll = async (req, res) => {
  try {
    const users = await Prisma.user.findMany();
    res.status(200).json({ message: "this is the response", users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params.id;
    const user = await Prisma.user.findUnique({
      where: { id },
    });
    if (user) {
      res.status(200).json({ message: "this is your id", user });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOne = async (req, res) => {
  try {
    const { username, email, password, avatar } = req.body;
    const { id } = req.params.id;
    const tokenId = req.userId;
    console.log(req.body)
    if (id !== tokenId) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    const user = await Prisma.user.findUnique({ where: { id } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
console.log("two")
const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash(password, salt);

console.log("three")
    const updatedUser = await Prisma.user.update({
      where: { id },
      data: { username, email, password: hash, avatar },
    });

    res.status(200).json({ message: "Updated successfully", updatedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteOne = async (req, res) => {
  try {
    const { id } = req.params.id;
    const user = await Prisma.user.findUnique({ where: { id } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await Prisma.user.delete({ where: { id } });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
