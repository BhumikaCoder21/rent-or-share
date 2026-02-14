import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { profile } from "../controllers/user.controller";

const router = Router();

router.get("/profile", authMiddleware, profile);

export default router;