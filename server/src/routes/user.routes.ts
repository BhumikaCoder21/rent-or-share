import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { profile, getAllProfiles, getProfileById, deleteAllProfiles, deleteProfileById  } from "../controllers/user.controller";

const router = Router();

router.get("/profile", authMiddleware, profile);

router.get("/all-profile", authMiddleware, getAllProfiles);

router.get("/profile/:id", authMiddleware, getProfileById);

router.delete("/profiles", authMiddleware, deleteAllProfiles);

router.delete("/profile/:id", authMiddleware, deleteProfileById);



export default router;