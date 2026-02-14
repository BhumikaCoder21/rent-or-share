import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { createRent, getAllRents, getRentById, updateRent, deleteRent } from "../controllers/vehicle-rental.controller";

const router = Router();

router.post("/", authMiddleware, createRent);

router.get("/", getAllRents);

router.get("/:id", getRentById);

router.patch("/:id", authMiddleware, updateRent);

router.delete("/:id", authMiddleware, deleteRent);

export default router;
