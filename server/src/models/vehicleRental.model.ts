import mongoose from "mongoose";

const vehicleRentalSchema = new mongoose.Schema(
  {
    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
      required: true
    },

    pickupLocation: {
      type: String,
      required: true
    },

    pricePerHour: {
      type: Number,
      required: true,
      min: 1
    },

    availability: {
      fromDate: {
        type: Date,
        required: true
      },
      toDate: {
        type: Date,
        required: true
      },
      availableFromTime: {
        type: String,
        required: true
      },
      availableTillTime: {
        type: String,
        required: true
      }
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("VehicleRental", vehicleRentalSchema);