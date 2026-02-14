import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    type: {
      type: String,
      enum: ["scooty", "car"],
      required: true
    },

    brand: {
      type: String,
      trim: true
    },

    model: {
      type: String,
      trim: true
    },

    vehicleNumber: {
      type: String,
      unique: true,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Vehicle", vehicleSchema);