import mongoose from "mongoose";

export async function connect() {
  if (mongoose.connection.readyState >= 1) {
    console.log("MongoDB already connected.");
    return;
  }

  try {
    const mongoUri = process.env.MONGO_URI!; // Use correct variable
    console.log("Connecting to MongoDB:", mongoUri);

    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 20000, // 20s timeout
      socketTimeoutMS: 60000, // 60s timeout
    });

    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("Something went wrong in connecting to DB:", error);
    process.exit(1); // Exit to prevent further errors
  }

  const connection = mongoose.connection;

  connection.on("error", (err: Error) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

  connection.on("disconnected", () => {
    console.warn("MongoDB disconnected. Retrying...");
    setTimeout(connect, 5000); // Retry connection after 5s
  });

  mongoose.set("debug", true); // Enable debugging logs
}
