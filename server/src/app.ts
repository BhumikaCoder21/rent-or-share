import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import vehicleRoutes from "./routes/rent.routes";
import rideRoute from "./routes/ride.routes";
import adminRoute from "./routes/admin.routes";

import "./cron/deleteExpiredRides";

const app = express();


app.use(express.json());

app.use(
  cors({
    origin: "https://rent-and-share.vercel.app/",
    credentials: true,
  }),
);


app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/rent", vehicleRoutes);
app.use("/api/rides", rideRoute);
app.use("/api/admin", adminRoute);

export default app;
