import dotenv from "dotenv";
dotenv.config({
    path: 'backend/.env'
})

import { app } from "./app.js";


app.listen(process.env.APP_PORT || 8000, ()=>{
    console.log( `Server is running at port: ${process.env.APP_PORT} \n`);  
})

