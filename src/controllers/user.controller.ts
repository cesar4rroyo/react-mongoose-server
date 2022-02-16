import { Request, Response } from "express";
import User from "../models/user.model";

export async function show(req: Request, res: Response): Promise<void> {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    res.status(200).json({ message: "User found", user });
  } catch (error) {
    console.log("err", error);
    res.status(404).json({ message: "User not found" });
  }
}
export async function create(req: Request, res: Response): Promise<void> {
  try {
    const { user_github, email } = req.body;
    const user = await User.create({ user_github, email });
    res.status(201).json({ data: user });
  } catch (error) {
    res.status(404).json({ message: "User params not found" });
  }
}
export async function list(req: Request, res: Response): Promise<void> {
  try {
    const users = await User.find();

    if (!users) {
      throw new Error("Server Error");
    }

    res.status(200).json({ message: "Users list found", data: users });
  } catch (error) {
    console.log("err", error);
    res.status(404).json({ message: "User not found" });
  }
}
