import express from "express";
import { processFileUpload } from "../Middleware/multer.js";
import { sendmoney, displaymoneytranstions, displayallmoneytransactions,  } from "../controller/depositmoney.controller.js";
import { protectedroutes } from "../Middleware/protectedroutes.js";

const router = express.Router();

router.post("/sendmoney", protectedroutes, processFileUpload, sendmoney);
router.get("/getdata", protectedroutes, displaymoneytranstions);
router.get("/all/getdata", displayallmoneytransactions);

export default router;
