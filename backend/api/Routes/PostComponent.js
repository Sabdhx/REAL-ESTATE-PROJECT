import express from "express"
const router = express.Router()
import {UpdatePost, addPost, deletePost, getAllPosts,getPost} from "../component/PostsComponents.js"
import {tokenCheck} from "../middleWare/tokenCheck.js"


router.get("/",getAllPosts)
router.get("/:id",getPost)
router.put("/update",UpdatePost)
router.post("/addPost",tokenCheck,addPost)
router.delete("/delete/:id",tokenCheck,deletePost)

export default router