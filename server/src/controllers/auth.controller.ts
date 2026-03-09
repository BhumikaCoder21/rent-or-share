import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth.services";

export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body);

    res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { token, user } = await loginUser(req.body.email, req.body.password);

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        name : user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        rollNumber : user.rollNumber,
        role: user.role
      },
    });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};
