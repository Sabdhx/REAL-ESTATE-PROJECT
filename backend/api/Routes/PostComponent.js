import express from "express"
const router = express.Router()
import {UpdatePost, addPost, deletePost, getAllPosts,getPost} from "../component/PostsComponents.js"

router.get("/",getAllPosts)
router.get("/:id",getPost)
router.put("/update",UpdatePost)
router.post("/addPost",addPost)
router.delete("/delete/:id",deletePost)

export default router