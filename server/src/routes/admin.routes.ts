import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { adminDashboard } from "../controllers/admin.controller";

const router = Router();

router.get("/stats", authMiddleware, adminDashboard );

export default router;