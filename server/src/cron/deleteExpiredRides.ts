import cron from "node-cron";
import Ride from "../models/ride.model";

cron.schedule("* * * * *", async () => {
  try {
    const now = new Date();

    const today = now.toISOString().split("T")[0];
    const currentTime = now.toTimeString().slice(0, 5);

    const result = await Ride.deleteMany({
      $or: [
        { date: { $lt: today } },
        {
          date: today,
          time: { $lt: currentTime },
        },
      ],
    });

    if (result.deletedCount > 0) {
      console.log(`${result.deletedCount} expired rides deleted`);
    }
  } catch (error) {
    console.log("Cron error:", error);
  }
});
