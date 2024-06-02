import  express  from "express";
import { AuthenticatedUser, adminUser } from "../component/userAdminOrNotComponent.js";
const router = express.Router();

router.get("/adminUser",AuthenticatedUser ,adminUser)
router.get("/AuthenticatedUser",AuthenticatedUser)


export default router;