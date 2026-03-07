import express from "express";
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import vehicleRoutes from './routes/rent.routes';
import rideRoute from './routes/ride.routes'
import adminRoute from './routes/admin.routes';
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/vehicle", vehicleRoutes);
app.use("/api/rides", rideRoute);
app.use("/api/admin", adminRoute)

export default app;