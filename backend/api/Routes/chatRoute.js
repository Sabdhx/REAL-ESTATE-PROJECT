import express from "express"
const router = express.Router()

import {tokenCheck} from "../middleWare/tokenCheck.js"
import { addChat, getChat, getChats, readChat } from "../component/chatController.js"


router.get("/",tokenCheck,getChats)
router.get("/:id",tokenCheck,getChat)
router.post("/update",tokenCheck,addChat)
router.put("/read/:id",tokenCheck,readChat)

export default router