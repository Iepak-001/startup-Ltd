import { Router } from "express";
import { customQuery } from "../controllers/testing.controllers.js";

const testingRouter=Router()

testingRouter.route("/query").post(customQuery);

export {testingRouter}