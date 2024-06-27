import express from "express";
import { getAll, getOne, deleteOne, updateOne, savePost,} from "../component/userUpdateComponents.js";
import { tokenCheck } from "../middleWare/tokenCheck.js";
const router = express.Router();

router.get("/", getAll);
router.get("/:id", tokenCheck, getOne);
router.delete("/deleteOne/:id", tokenCheck, deleteOne);
router.put("/updateOne/:id", tokenCheck, updateOne);
router.post("/savePost", savePost);

export default router;