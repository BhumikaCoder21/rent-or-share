import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
  createRide,
  getAllRides,
  getRideById,
  updateRide,
  deleteRide,
} from "../controllers/ride.controller";

const router = Router();

router.post("/", authMiddleware, createRide);

router.get("/", authMiddleware, getAllRides);

router.get("/:id", authMiddleware, getRideById);

router.put("/:id", authMiddleware, updateRide);

router.delete("/:id", authMiddleware, deleteRide);

export default router;