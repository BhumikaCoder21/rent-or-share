import mongoose from "mongoose";

const vehicleRentalSchema = new mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    ownerName: {
      type: String,
      required: true,
      trim: true,
    },

    contact: {
      type: String,
      required: true,
    },

    vehicleNumber: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    pricePerHour: {
      type: Number,
      required: true,
      min: 1,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
    },

    availableFrom: {
      type: String,
      required: true,
    },

    availableTill: {
      type: String,
      required: true,
    },

    helmetIncluded: {
      type: Boolean,
      default: false,
    },

    fuelIncluded: {
      type: Boolean,
      default: false,
    },

    notes: {
      type: String,
      default: "",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("VehicleRental", vehicleRentalSchema);

