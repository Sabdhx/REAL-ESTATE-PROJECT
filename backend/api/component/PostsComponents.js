import Prisma from "../lib/prisma.js"
import post from "../lib/prisma.js"


export const getAllPosts =async (req,res)=>{
  try {
    const posts = await Post.user.findMany()
    res.status(200).json({ message:"responseSent", posts })
    
  } catch (error) {
    console.log(error.message)
  }
}

export const getPost = async (req, res) => {
  const { id } = req.params; // Correctly destructure the id
  console.log(id);

  try {
    const findById = await Prisma.post.findUnique({ 
      where: { id }
    });
    if (findById) {
      res.status(200).json({ message: "responseSent", findById });
    }else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Error retrieving user", error: error.message });
  }
};

export const addPost = async (req, res) => {
  const body  = req.body;
  const tokenId = req.userId
  try {
    
    const creating = await Prisma.post.create({
      data:{
        ...body,
        userId:tokenId
      }
    })
    res.status(200).json({message:creating})
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Failed to create post", error: error.message });
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
  const { id } = req.params; // Correctly destructure the id from req.params
  try {
    const user = await Post.user.findUnique({
      where: { id }
    });
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    await Post.user.delete({ where: { id } });
    
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting user", error: error.message });
  }
};