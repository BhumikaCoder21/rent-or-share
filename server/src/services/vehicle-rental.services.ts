import  Vehicle  from "../models/vehicle.model";

export const registerVehicleService = async (data: any) => {
  const vehicle = await Vehicle.create(data);
  return vehicle;
};

export const getAllVehiclesService = async () => {
  const vehicles = await Vehicle.find();

  if (!vehicles || vehicles.length === 0) {
    throw new Error("No vehicles found");
  }

  return vehicles;
};

export const getVehicleByIdService = async (id: string) => {
  const vehicle = await Vehicle.findById(id);

  if (!vehicle) {
    throw new Error("Vehicle not found");
  }

  return vehicle;
};

export const updateVehicleService = async (id: string, data: any) => {
  const updatedVehicle = await Vehicle.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true, runValidators: true }
  );

  if (!updatedVehicle) {
    throw new Error("Vehicle not found");
  }

  return updatedVehicle;
};

export const deleteVehicleService = async (id: string) => {
  const deletedVehicle = await Vehicle.findByIdAndDelete(id);

  if (!deletedVehicle) {
    throw new Error("Vehicle not found");
  }

  return deletedVehicle;
};