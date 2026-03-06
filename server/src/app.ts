import express from "express";
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import vehicleRoutes from './routes/rent.routes';
import rideRoute from './routes/ride.routes'
import adminRoute from './routes/admin.routes';

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/vehicle", vehicleRoutes);
app.use("/api/ride", rideRoute);
app.use("/api/admin", adminRoute)

export default app;