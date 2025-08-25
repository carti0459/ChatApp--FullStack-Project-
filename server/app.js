import express from "express";
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env",
});

const mongoURI = process.env.MONGO_URI

connectDB(mongoURI);


const app = express();

app.use(express.json());

app.use('/user', userRoute);

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});