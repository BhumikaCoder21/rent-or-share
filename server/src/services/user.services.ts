import  User  from "../models/user.model";

interface AuthUserData {
  id: string;
  email: string;
  role: "OWNER" | "CUSTOMER" | "BOTH";
}

export const getProfileByIdService = async (data: AuthUserData) => {
  const { id } = data;

  const user = await User.findById(id).select(
    "_id name rollNumber phoneNumber email role"
  );

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export const getAllProfilesService = async () => {
  const users = await User.find().select(
    "_id name rollNumber email role"
  );

  if (!users || users.length === 0) {
    throw new Error("No users found");
  }

  return users;
};


export const deleteAllProfilesService = async () => {
  const result = await User.deleteMany({});

  if (result.deletedCount === 0) {
    throw new Error("No users found to delete");
  }

  return result;
};

export const deleteProfileByIdService = async (id: string) => {
  const deletedUser = await User.findByIdAndDelete(id);

  if (!deletedUser) {
    throw new Error("User not found");
  }

  return deletedUser;
};

export const updateProfileByIdService = async (
  id: string,
  updateData: {
    name?: string;
    rollNumber?: string;
    phoneNumber?: string;
    email?: string;
  }
) => {
  const updatedUser = await User.findByIdAndUpdate(
    id,
    { $set: updateData },
    { new: true, runValidators: true }
  ).select("_id name rollNumber phoneNumber email role");

  if (!updatedUser) {
    throw new Error("User not found");
  }

  return updatedUser;
};
