import pg from 'pg'
import { asyncHandler } from '../utils/asyncHandler.utils.js'
const {Client} =pg

const getClient= async()=>{
    const client=new Client({
        connectionString:process.env.CONNECTION_STRING,
        ssl:{
            rejectUnauthorized:false
        }
    })
    console.log("Connecting to client \n");
    
    await client.connect();

    console.log("Successful connection \n");
    
    return client;
}


const connectDB=async()=>{

    try {

        const client=new Client({
            connectionString:process.env.CONNECTION_STRING,
            ssl:{
                rejectUnauthorized:false
            }
        })

        await client.connect()
        console.log("Database connected \n")

        const query={
            text:'create table startup(id int not null, name varchar(50) not null,mail varchar(50),city varchar(50),pincode int,launchDate date,startupStage varchar(20))'
        }
        const res=await client.query(query);
        console.log(res);
        
    
        const ans=await client.query('show tables');
        console.log(ans);


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

export { getClient ,connectDB, disconnectDB }

