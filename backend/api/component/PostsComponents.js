import { query } from "express";
import Prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const getAllPosts = async (req, res) => {
  console.log(req.query); // Add this line
  const { location, type, property, bedroom, minPrice, maxPrice } = req.query;
  try {
    const posts = await Prisma.post.findMany({
      where: {
        city: location || undefined,
        type: type || undefined,
        property: property || undefined,
        bedroom: bedroom ? parseInt(bedroom) : undefined,
        price: {
          gte: minPrice ? parseInt(minPrice) : 0,
          lte: maxPrice ? parseInt(maxPrice) : 1000000,
        },
      },
    });
  
      res.status(200).json({ message: "Posts retrieved successfully", posts });

  } catch (error) {
    console.error("Prisma Client Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Prisma.post.findUnique({
      where: { id },
      include: {
        postDetail: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const token = req.cookies?.token;
    if (!token) {
      return res.status(200).json({ ...post, isSaved: false });
    }

    jwt.verify(token, "secret", async (err, payload) => {
      if (err) {
        return res.status(200).json({ ...post, isSaved: false });
      }
   
      const saved = await Prisma.savedPost.findUnique({
        where: {
          userId_postId: {
            postId: id,
            userId: payload.id,
          },
        },
      });

      return res.status(200).json({ ...post, isSaved: saved ? true : false });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to get post" });
  }
};

export const addPost = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;

  console.log("Received body:", body);
  console.log("Token User ID:", tokenUserId);

  try {
    console.log("first");
    const newPost = await Prisma.post.create({
      data: {
        ...body.postData,
        userId: tokenUserId,
        postDetail: {
          create: body.postDetail,
        },
      },
    });
    console.log("second");
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create post" });
  }
};

export const UpdatePost = (req, res) => {
  try {
    res.status(200).json({ message: "responseSent" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  const tokenUserId = req.userId;
  console.log(req.params);
  console.log(tokenUserId);
  try {
    const post = await Prisma.post.findUnique({
      where: { id },
    });

    console.log(post.userId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.userId !== tokenUserId) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    await Prisma.post.delete({ where: { id } });

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    res
      .status(500)
      .json({ message: "Error deleting post", error: error.message });
  } finally {
    await Prisma.$disconnect(); // Disconnect Prisma client after operation
  }
};
