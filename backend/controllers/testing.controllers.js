import { getClient } from "../db/setup.db.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";

const customQuery=asyncHandler(async(req , res )=>{

    console.log("Entered here \n");
    
    const {query,values}=req.body;

    const client= await getClient();

    const output=await client.query(query,values);

    console.log(output);

    return res.status(201).json({
        "didItWork":"yes ITS working !!",
        "messege":`${output}`
    });
    
})

export {customQuery}
