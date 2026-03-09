import  User  from "../models/user.model";
import  Vehicle from "../models/vehicle.model"
import Ride from "../models/ride.model";
import VehicleRental from "../models/vehicleRental.model";

export interface AdminDashboardData {
  totalUsers: number;
  totalVehicles: number;
  totalRides: number;
  activeRentals: number;
}

export const adminDashboardService = async (): Promise<AdminDashboardData> => {
  const totalUsers = await User.countDocuments();
  const totalVehicles = await Vehicle.countDocuments();
  const totalRides = await Ride.countDocuments();
  const activeRentals = await VehicleRental.countDocuments({
    status: "active",
  });

  return {
    totalUsers,
    totalVehicles,
    totalRides,
    activeRentals,
  } as AdminDashboardData;
};