import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { registerVehicle, getAllVehicles, getVehicleById ,updateVehicleRent,  deleteVehicle} from "../controllers/vehicle-rental.controller";

const router = Router();

router.post("/", authMiddleware, registerVehicle);

router.get("/", getAllVehicles);

router.get("/:id", getVehicleById);

router.patch("/:id", authMiddleware, updateVehicleRent);

router.delete("/:id", authMiddleware, deleteVehicle);

export default router;
