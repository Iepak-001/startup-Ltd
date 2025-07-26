import {Founders} from "../models/founders.models.js";

export const insertFounder = async (req, res) => {
  const size = req.body.length;
  console.log("Size of the request body:", size);

  for (let i = 0; i < size; i++) {
    const { name } = req.body[i];

    const alreadyExistingEntry = await Founders.findOne({ name: name });

    if (alreadyExistingEntry) {
      console.log('====================================');
      console.log(`Founder with name ${name} already exists.`);
      console.log('====================================');
      continue;
    }

    const founder = await Founders.create(req.body[i]);

    console.log(founder);
  }

  return res.status(201).json("Successfully inserted");
};

export const fetchFounders=async(req,res)=>{

  const {limit,offset}=req.body;

  const result=await Founders.find().skip(offset).limit(limit);

  return res.status(201).json(result);
}

export const fetchOneFounder=async(req,res)=>{

  const {_id}=req.body;

  const result=await Founders.findOne({_id:_id});

  return res.status(201).json(result);
}
