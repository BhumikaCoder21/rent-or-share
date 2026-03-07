import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log("Authentication Middleware")
  // console.log("Authorization header:", req.headers.authorization);
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  // console.log("Extracted token:", token);

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;
    // console.log("Decoded JWT payload:", decoded);
    req.body = decoded; 
    // console.log("Auth middleware passed, moving to next handler");
    next();
  } catch {
    // console.log("JWT verification failed");
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};