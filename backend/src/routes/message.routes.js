import express from "express";
import { protectRoute } from "../middlewares/auth.middleware";
import { getMessages, getUsersForSidebars } from "../controllers/message.controller";

const router = express.Router();

router.get('/users', protectRoute , getUsersForSidebars);
router.get("/:id", protectRoute , getMessages);

router.post("/send/:id" , protectRoute , sendMessage)

export default router ;