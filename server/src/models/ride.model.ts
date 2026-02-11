import mongoose from "mongoose";

const rideSchema = new mongoose.Schema(
  {
    route: {
      from: {
        type: String,
        required: true,
        trim: true
      },
      to: {
        type: String,
        required: true,
        trim: true
      }
    },

    schedule: {
      date: {
        type: Date,
        required: true
      },
      time: {
        type: String, 
        required: true
      }
    },

    rideInfo: {
      vehicleType: {
        type: String,
        enum: ["scooty", "car", "bike"],
        required: true
      },
      seatsAvailable: {
        type: Number,
        required: true,
        min: 1
      },
      pricePerSeat: {
        type: Number,
        required: true,
        min: 0
      }
    },

    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Ride", rideSchema);