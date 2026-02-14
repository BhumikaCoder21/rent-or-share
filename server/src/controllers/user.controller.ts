import { Request, Response } from "express";
import { error } from "node:console";

import { UserProfile, AllUsersProfile, GetUserProfileById, DeleteAllUsersProfile, DeleteUserProfileById } from "../services/user.services";

export const profile = async (req: Request, res: Response) => {
  try {
  const user = await UserProfile(req.body);

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
    const usersProfile = await AllUsersProfile(req.body);

    res.status(200).json({
    message: "Users Profile Successfully Fetched",
    users : usersProfile
    });
    
  }
 catch (error: any) {
   res.status(400).json({ message: error.message });
  }
};

export const getProfileById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const user = await GetUserProfileById(id);

    res.status(200).json({
      message: "user Profile Successfully Fetched",
      user
    })
  }
 catch (error: any) {
   res.status(400).json({ message: error.message });
  }
};

export const deleteAllProfiles = async (req: Request, res: Response) => {
  try {
     await DeleteAllUsersProfile(req.body);

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
    await DeleteUserProfileById(id);

    res.status(200).json({
      message: "User Profile Successfully Deleted"
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user profile" });
  }
};