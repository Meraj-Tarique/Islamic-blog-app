import { connect } from "@/dbConfig/dbConfig";
import usersModel from "@/models/Users";

import bcrypt from "bcryptjs";
// import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  // Protect the route (only admins can create admin users)
  // const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET! });
  // if (!session || session?.user?.role !== "admin") {
  //   return Response.json({ error: "Unauthorized" }, { status: 401 });
  // }

  // Parse the request body
  const { name, email, password } = await req.json();

  // Check if the user already exists
  await connect();
  const existingUser = await usersModel.findOne({ email });
  if (existingUser) {
    return Response.json({ error: "User already exists" }, { status: 400 });
  }

  // Create the admin user
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new usersModel({
    name,
    email,
    password: hashedPassword,
    role: "admin",
  });
  await user.save();

  return Response.json({ message: "Admin user created successfully" });
}
