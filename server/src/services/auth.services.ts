import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import  User  from "../models/user.model";

export const registerUser = async (data: any) => {
  const { name, rollNumber, phoneNumber, email, password} = data;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }
 
  const hashedPassword = await bcrypt.hash(password, 10);


  const user = await User.create({
    name,
    rollNumber,
    phoneNumber,
    email,
    password: hashedPassword,
  });

  return user;
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid credentials");
  }
  if(user.password==null) throw new Error("Password not found")

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role
    },
    process.env.JWT_SECRET as string,
    { expiresIn: "7d" }
  );

  return token;
};