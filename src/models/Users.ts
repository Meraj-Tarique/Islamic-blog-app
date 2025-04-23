import { Schema, Document } from "mongoose";
import * as mongoose from "mongoose";

export interface UsersDocument extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
}

const UserSchema: Schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: false },
  },
  { timestamps: true }
);

// const blogModel = mongoose?.models.Blog || model <BlogDocument>("UserS", BlogSchema);
const usersModel = mongoose?.models.Users || mongoose.model("Users", UserSchema);
export default usersModel;
