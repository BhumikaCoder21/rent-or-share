import { Request, Response } from "express";
import { adminDashboardService } from "../services/admin.services";

export const adminDashboard = async (req: Request, res: Response) => {
  try {
    if (!req.body || req.body.role !== "ADMIN") {
      return res.status(403).json({
        message: "Access denied. Admin only.",
      });
    }

    const dashboarddata = await adminDashboardService();

    res.status(200).json({
      message: "Dashboard data fetched successfully",
      dashboarddata
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};