import mongoose from "mongoose";

export const connectDB = async (req, res) => {
  const db =
    process.env.MONGO_URL ||
    "mongodb+srv://sajalpandey858_db_user:pushpraj@pennypilot.cmehnem.mongodb.net/?appName=PennyPilot";

  const { connection } = await mongoose.connect(db, { useNewUrlParser: true });

  console.log(`MongoDB Connected to ${connection.host}`);
};
