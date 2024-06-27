import express from "express";
const router = express.Router();

import { tokenCheck } from "../middleWare/tokenCheck.js";
import { addMessage } from "../component/MessageController.js";



router.post("/:chatId", tokenCheck, addMessage);

export default router;
