import User from "@/model/User";
import { Request, Response } from 'express';

export async function sugnUp(req: Request, res: Response) {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      email ||
      password ||
      confirmPassword
    ) {
      return res.status(403).json({
        success: false,
        message: "All fields are required"
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and Confirm Password do not match, please try AGAIN"
      });
    }

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exist, sign in",
      });
    }
  } catch (error) {

  }
}
