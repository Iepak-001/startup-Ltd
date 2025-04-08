import dotenv from "dotenv";
dotenv.config({
    path: 'backend/.env'
})

import { connectDB,disconnectDB } from "./db/setup.db.js"
import express from "express"
import cors from "cors"

connectDB();

setTimeout(disconnectDB,3000); 


