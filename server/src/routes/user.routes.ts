import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import {getProfileById, getAllProfiles,deleteAllProfiles, deleteProfileById, updateProfileById  } from "../controllers/user.controller";

const router = Router();

router.get("/profile", authMiddleware, getProfileById);

router.get("/all-profile", authMiddleware, getAllProfiles);

router.delete("/profiles", authMiddleware, deleteAllProfiles);

router.delete("/profile/:id", authMiddleware, deleteProfileById);

router.put("/profile/:id", authMiddleware, updateProfileById);

export default router;