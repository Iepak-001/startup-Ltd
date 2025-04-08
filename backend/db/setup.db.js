import pg from 'pg'
import { asyncHandler } from '../utils/asyncHandler.utils.js'
const {Client} =pg



const connectDB=async()=>{

    try {

        const client=new Client({
            connectionString:process.env.CONNECTION_STRING,
            ssl:{
                rejectUnauthorized:false
            }
        })

        const connectionInstance=await client.connect()
        console.log("Database connected \n")
    } catch (error) {
        console.log("PostSql connection FAIL!!! \n",error);
        process.exit(1);
    }

    
}

const disconnectDB=async()=>{
    try {
        const client=new Client({
            connectionString:process.env.CONNECTION_STRING,
            ssl:{
                rejectUnauthorized:false
            }
        })

        await client.end();
        console.log("Database DIS-connected \n")

    } catch (error) {
        console.log("Errror in Dis-connecting \n",error);
       
    }
}

export { connectDB, disconnectDB }

