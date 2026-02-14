import { Request, Response } from "express";

import { getProfileByIdService, getAllProfilesService, deleteAllProfilesService, deleteProfileByIdService, updateProfileByIdService } from "../services/user.services";
import { error } from "node:console";

export const getProfileById = async (req: Request, res: Response) => {
  try {
  const user = await getProfileByIdService(req.body);

  res.status(200).json({
  message: "User Profile Successfully Fetched",
  user
});

  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};


export const getAllProfiles = async (req: Request, res: Response) => {
  try {
    const usersProfile = await getAllProfilesService();

    res.status(200).json({
    message: "Users Profile Successfully Fetched",
    users : usersProfile
    });
    
  }
 catch (error: any) {
   res.status(400).json({ message: error.message });
  }
};


export const deleteAllProfiles = async (req: Request, res: Response) => {
  try {
     await deleteAllProfilesService();

    res.status(200).json({
      message: "All User Profiles Successfully Deleted"
    });
  }
 catch (error: any) {
   res.status(400).json({ message: error.message });
  }
};


export const deleteProfileById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if(!id || Array.isArray(id)) return error("Invalid Id");
    await deleteProfileByIdService(id);

    res.status(200).json({
      message: "User Profile Successfully Deleted"
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user profile" });
  }
};

export const updateProfileById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if(!id || Array.isArray(id)) return error("Invalid Id");
    const { name, rollNumber, phoneNumber, email } = req.body;

    const updatedUser = await updateProfileByIdService(id, {
      name,
      rollNumber,
      phoneNumber,
      email,
    });

    res.status(200).json({
      message: "User Profile Successfully Updated",
      user: updatedUser,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};