import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv"
dotenv.config({
    path: "./env"
})

const PORT = process.env.PORT || 4000

connectDB()
.then(() => {
    app.on("error", (err) => {
        console.log("Error", err)
        throw err
    })
    app.listen(PORT, () => {
        console.log(`Server is Running on PORT: ${PORT}`)
    })
})
.catch((err) => {
    console.log("MongoDB Connection Failed !!", err)
})