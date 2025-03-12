import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import { DB_NAME } from "./constants.js";



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);


        console.log("Connected to MongoDB ✅");

        mongoose.connection.on("error", (err) => {
            console.error("MongoDB Connection Error:", err);
        });

        app.on("error", (error) => {
            console.error("Express App Error:", error);
            throw error;
        });

        app.listen(PORT, () => {
            console.log(`App is Listening on Port ${PORT} 🚀`);
        });
    } catch (error) {
        console.error("Database Connection Failed ❌", error);
        process.exit(1); // Exit the process if DB connection fails
    }
})();
