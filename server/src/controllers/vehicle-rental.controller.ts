import { Request, Response } from "express";
import { registerVehicleService, getAllVehiclesService, getVehicleByIdService, updateVehicleService, deleteVehicleService } from "../services/vehicle-rental.services";

export const registerVehicle = async (req: Request, res: Response) => {
  try {
    const vehicleData = req.body;

    const newVehicle = await registerVehicleService(vehicleData);

    res.status(201).json({
      message: "Vehicle registered successfully",
      data: newVehicle,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllVehicles = async (req: Request, res: Response) => {
  try {
    const vehicles = await getAllVehiclesService();

    res.status(200).json({
      message: "All vehicles fetched successfully",
      data: vehicles,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getVehicleById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

   if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: "Invalid ID" });
   }

    const vehicle = await getVehicleByIdService(id);

    res.status(200).json({
      message: "Vehicle fetched successfully",
      data: vehicle,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateVehicleRent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: "Invalid ID" });
   }

    const updatedVehicle = await updateVehicleService(id, updateData);

    res.status(200).json({
      message: "Vehicle updated successfully",
      data: updatedVehicle,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteVehicle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: "Invalid ID" });
   }

    await deleteVehicleService(id);

    res.status(200).json({
      message: "Vehicle deleted successfully",
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
