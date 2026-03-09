import VehicleRental from "../models/vehicleRental.model";

export const registerVehicleService = async (data: any) => {
  const rental = await VehicleRental.create(data);
  return rental;
};

export const getAllVehiclesService = async () => {
  const rentals = await VehicleRental.find();

  if (!rentals || rentals.length === 0) {
    throw new Error("No rentals found");
  }

  return rentals;
};

export const getVehicleByIdService = async (id: string) => {
  const rental = await VehicleRental.findById(id);

  if (!rental) {
    throw new Error("Rental not found");
  }

  return rental;
};

export const updateVehicleService = async (id: string, data: any) => {
  const updatedRental = await VehicleRental.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true, runValidators: true }
  );

  if (!updatedRental) {
    throw new Error("Rental not found");
  }

  return updatedRental;
};

export const deleteVehicleService = async (id: string) => {
  const deletedRental = await VehicleRental.findByIdAndDelete(id);

  if (!deletedRental) {
    throw new Error("Rental not found");
  }

  return deletedRental;
};

