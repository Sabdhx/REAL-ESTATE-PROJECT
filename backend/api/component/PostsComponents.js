import { query } from "express";
import Prisma from "../lib/prisma.js"


export const getAllPosts = async (req, res) => {
  // const query = req.query;
  // console.log(query)
  try {
    const posts = await Prisma.post.findMany({

      // where:{
      //   city:query.city || undefined,
      //   type:query.type||undefined,
      //   property:query.property||undefined,
      //   bedroom:query.bedroom||undefined,
      //   price:{
      //     gte:parseInt(query.minPrice)||0,
      //     lte:parseInt(query.maxPrice)||100000,
      //   }
      // }
    });
    res.status(200).json({ message: "Posts retrieved successfully", posts});
  } catch (error) {
    console.error("Prisma Client Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getPost = async (req, res) => {
  const { id } = req.params; // Correctly destructure the id
  
  
  try {
    const findById = await Prisma.post.findUnique({ 
      where: { id },
      include:{
        postDetail:true,
        user:{
          select:{
            username:true,
            avatar:true
          }
        }
      }
    });
    if (findById) {
      res.status(200).json({ message: "responseSent", findById });
    }else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "invalid id of post", error: error.message });
  }
};

export const addPost = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;
 
  try {
    console.log("first")
    const newPost = await Prisma.post.create({
      data: {
        ...body.postData,
        userId: tokenUserId,
        postDetail: {
          create: body.postDetail,
        },
      },
    });
    console.log("second")
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create post" });
  }
};


export const UpdatePost = (req,res)=>{
  
  try {
    res.status(200).json({message:"responseSent"})
  } catch (error) {
    console.log(error.message)
  }
}

export const deletePost = async (req, res) => {
  const { id } = req.params;
  const tokenUserId = req.userId;
  console.log(req.params)
  console.log(tokenUserId)
  try {
    const post = await Prisma.post.findUnique({
      where: { id },
    });
    
    console.log(post.userId)
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
    res.status(500).json({ message: "Error deleting post", error: error.message });
  } finally {
    await Prisma.$disconnect(); // Disconnect Prisma client after operation
  }
};