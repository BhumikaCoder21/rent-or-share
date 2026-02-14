import { User } from "../models/user.model";

interface AuthUserData {
  id: string;
  email: string;
  role: "OWNER" | "CUSTOMER" | "BOTH";
}

export const UserProfile = async (data: AuthUserData) => {
  const { id, email, role } = data;

  const user = await User.findById(id).select(
    "_id name rollNumber phoneNumber email role"
  );

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export const AllUsersProfile = async (data : any) => {

};

export const GetUserProfileById = async (data : any) => {

};

export const DeleteAllUsersProfile = async (data : any) => {

};

export const DeleteUserProfileById = async (data : any) => {

};



