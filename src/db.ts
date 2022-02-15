import mongoose from "mongoose";

export async function connect(port: String): Promise<void> {
  mongoose.connect(`mongodb://localhost:${port}/references`);

  mongoose.connection.once("open", () => {
    console.log("Connection established successfully");
  });
}
