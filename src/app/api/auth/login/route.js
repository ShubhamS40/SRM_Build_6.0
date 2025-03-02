import { connectDB } from "../../../../lib/mongoose";
import User from "../../../../lib/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return Response.json({ success: false, message: "Invalid credentials" }, { status: 401 });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return Response.json({ success: false, message: "Invalid credentials" }, { status: 401 });
    }

    // Generate JWT Token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    return Response.json({ 
      success: true, 
      user: { firstName: user.firstName, lastName: user.lastName, email: user.email }, 
      token 
    }, { status: 200 });
  } catch (error) {
    return Response.json({ success: false, message: error.message }, { status: 500 });
  }
}
