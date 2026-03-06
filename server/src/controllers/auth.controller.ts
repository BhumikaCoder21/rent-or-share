import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth.services";

export const register = async (req: Request, res: Response) => {
  try {
    console.log("request hits on register")
    const user = await registerUser(req.body);

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        email: user.email,
        role: user.role
      }
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const token = await loginUser(req.body.email, req.body.password);

    res.json({
      message: "Login successful",
      token
    });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};