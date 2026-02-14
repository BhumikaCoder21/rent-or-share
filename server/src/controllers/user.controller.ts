import { Request, Response } from "express";
import { UserProfile } from "../services/user.service";

export const profile = async (req: Request, res: Response) => {
  try {
    const user = await UserProfile(req.body);

  res.status(200).json({
  message: "User Profile Successfully Fetched",
  user: {
    id: user._id,
    name: user.name,
    rollNumber: user.rollNumber,
    phoneNumber: user.phoneNumber,
    email: user.email,
    role: user.role
  }
});

  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};


export const getAllProfiles = async (req: Request, res: Response) => {
  try {
  }
 catch (error: any) {
  }
};

export const getProfileById = async (req: Request, res: Response) => {
  try {
  }
 catch (error: any) {
  }
};

export const deleteAllProfiles = async (req: Request, res: Response) => {
  try {
  }
 catch (error: any) {
  }
};

export const deleteProfileById = async (req: Request, res: Response) => {
  try {
  }
 catch (error: any) {
  }
};