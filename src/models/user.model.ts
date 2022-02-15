import { model, Schema } from "mongoose";
import { UserInterface } from "../interfaces/user.interface";

const UserSchema = new Schema(
  {
    user_github: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const User = model<UserInterface>("User", UserSchema);

export default User;
