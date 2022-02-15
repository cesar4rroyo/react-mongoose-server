require("dotenv").config();
import express from "express";
import { json } from "body-parser";
import cors from "cors";
import { connect } from "./db";
import UserRouter from "./routes/user.route";

const port = process.env.PORT || 4040;
const databaseport = process.env.DATABASE_PORT || 27017;
const app = express();
connect(databaseport.toString());

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", UserRouter);

app.listen(3000, () => {
  console.log(`Server is running on port ${port}`);
});
