import { Document } from "mongoose";

export interface UserInterface extends Document {
  id: number;
  user_github: string;
  email: string;
}
