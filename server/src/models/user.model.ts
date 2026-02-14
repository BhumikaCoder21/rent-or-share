import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

     rollNumber: {
       type: Number,
       required: true,
       unique: true,
    },

     phoneNumber: {
      type: String,
      required: true
    },


    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

   
    password: {
      type: String,
      required: true
    },

    role: {
      type: String,
      enum: ["OWNER", "CUSTOMER", "BOTH"],
      default: "CUSTOMER"
    }
  }
);

export const User = model("User", userSchema);