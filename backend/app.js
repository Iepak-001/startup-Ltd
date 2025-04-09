import express from "express";
import cors from "cors"
// import cookieParser from "cookie-parser"
const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));

//JSON file jo recieve ho rha uska limit
app.use(express.json({
    limit:"64kb"
}))
// app.use(cookieParser())

import {testingRouter} from "./routes/testing.routes.js"

app.use("/testing",testingRouter);



export {app}
