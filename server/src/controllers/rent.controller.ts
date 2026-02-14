import { Request, Response } from "express";
import { createRentService, getAllRentsService, getRentByIdService, updateRentService, deleteRentService } from "../services/rent.services";

export const createRent = async (req: Request, res: Response) => {
  try {
     
  } 
  catch (error: any) {
   res.status(400).json({message : error.message});
  }
};

export const getAllRents = async (req: Request, res: Response) => {
  try {
  } 
  catch (error: any) {
   res.status(400).json({message : error.message});
  }
};

export const getRentById = async (req: Request, res: Response) => {
  try {
  } 
  catch (error: any) {
   res.status(400).json({message : error.message});
  }
};

export const updateRent = async (req: Request, res: Response) => {
  try {
  } 
  catch (error: any) {
   res.status(400).json({message : error.message});
  }
};

export const deleteRent = async (req: Request, res: Response) => {
  try {
  } 
  catch (error: any) {
   res.status(400).json({message : error.message});
  }
};


