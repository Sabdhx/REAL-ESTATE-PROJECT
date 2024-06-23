import express from "express";
import { getAll, getOne, deleteOne, updateOne, savedPost } from "../component/userUpdateComponents.js";
import { tokenCheck } from "../middleWare/tokenCheck.js";
const router = express.Router();

router.get("/", getAll);
router.get("/:id", tokenCheck, getOne);
router.delete("/deleteOne/:id", tokenCheck, deleteOne);
router.put("/updateOne/:id", tokenCheck, updateOne);
router.get("/savedPost", tokenCheck, savedPost);

export default router;