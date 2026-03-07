import { Request, Response } from "express";
import { AuthRequest } from "../types/express";
import Ride from "../models/ride.model";

export const createRide = async (req: AuthRequest, res: Response): Promise<any> => {
  console.log("createRide called");
  console.log("body:", req.body);
  console.log("user:", req.user);
  try {
    const ride = new Ride({
      ...req.body,
      user: req.user?.id,
    });

    const savedRide = await ride.save();

    res.status(201).json({
      message: "Ride created successfully",
      ride: savedRide,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Error creating ride",
      error: error.message,
    });
  }
};
export const getAllRides = async (req: Request, res: Response) => {
  try {
    const rides = await Ride.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: "Rides fetched successfully",
      rides,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Error fetching rides",
      error: error.message,
    });
  }
};

export const getRideById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const ride = await Ride.findById(id);

    if (!ride) {
      return res.status(404).json({
        message: "Ride not found",
      });
    }

    res.status(200).json({
      message: "Ride fetched successfully",
      ride,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Error fetching ride",
      error: error.message,
    });
  }
};

export const updateRide = async (req: AuthRequest, res: Response): Promise<any> => {
  try {
    const ride = await Ride.findById(req.params.id);

    if (!ride) {
      return res.status(404).json({ message: "Ride not found" });
    }

    const isOwner = ride.user.toString() === req.user?.id;
    const isAdmin = req.user?.role === "admin";

    if (!isOwner && !isAdmin) {
      return res.status(403).json({
        message: "You are not allowed to update this ride",
      });
    }

    const updatedRide = await Ride.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      message: "Ride updated successfully",
      ride: updatedRide,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Error updating ride",
      error: error.message,
    });
  }
};

export const deleteRide = async (req: AuthRequest, res: Response) => {
  try {
    const ride = await Ride.findById(req.params.id);

    if (!ride) {
      return res.status(404).json({ message: "Ride not found" });
    }

    const isOwner = ride.user.toString() === req.user?.id;
    const isAdmin = req.user?.role === "admin";

    if (!isOwner && !isAdmin) {
      return res.status(403).json({
        message: "You are not allowed to delete this ride",
      });
    }

    await ride.deleteOne();

    res.status(200).json({
      message: "Ride deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Error deleting ride",
      error: error.message,
    });
  }
};
