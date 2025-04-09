import { getClient } from "./setup.db.js";


const createStartupTable=async()=>{

    const client=getClient();

    const query={
        text:'create table startup(id int not null, name varchar(50) not null,mail varchar(50),city varchar(50),pincode int,launchDate date,startupStage varchar(20))'
    }
    const res=await client.query(query);

    console.log(res);
}

const createFounderTable=async()=>{

    const client=getClient();

    const query={
        text:`create table founder(id int not null,
        firstName varchar(50) not null,
        lastName varchar(50),
        mail varchar(50),
        vision varchar(200)
        )`
    }

    const res=await client.query(query);
    console.log(res);
}

const createInvestorTable=async()=>{

    const client=getClient();

    const query={
        text:`create table investor(id int not null,
        companyName varchar(50) not null,
        location varchar(50),
        mail varchar(50),
        investedIn varchar(200)
        )`
    }

    const res=await client.query(query);
    console.log(res);
}

export {createFounderTable,
        createStartupTable
}