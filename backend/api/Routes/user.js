import express from "express"
import { getAll,getOne,deleteOne,updateOne } from "../component/userUpdateComponents.js"
import { tokenCheck } from "../middleWare/tokenCheck.js";
const router = express.Router();

router.get("/",getAll)
router.get("/:id",getOne)
router.delete("/deleteOne/:id",deleteOne)
router.put("/updateOne/:id",tokenCheck,updateOne)


export default router
