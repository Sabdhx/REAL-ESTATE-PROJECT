import  express  from "express";
import { AuthenticatedUser, adminUser } from "../component/userAdminOrNotComponent.js";
import { tokenCheck } from "../middleWare/tokenCheck.js";
const router = express.Router();

router.get("/adminUser",tokenCheck,adminUser)
router.get("/AuthenticatedUser",tokenCheck,AuthenticatedUser)

export default router;