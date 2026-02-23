import  userModel  from "../models/user.model";
import  vehicleModel from "../models/vehicle.model"
import rideModel from "../models/ride.model";
import vehicleRentalModel from "../models/vehicleRental.model";

export const adminDashboardService = async () => {
  const totalUsers = await userModel.countDocuments();
  const totalVehicles = await vehicleModel.countDocuments();
  const totalRides = await rideModel.countDocuments();
  const activeRentals = await vehicleRentalModel.countDocuments({
    status: "active",
  });

  return {
    totalUsers,
    totalVehicles,
    totalRides,
    activeRentals,
  };
};