import express from "express";
import cors from 'cors';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser'

import { connectDB} from './config/database.js';
import router from "./routes/routes.js";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json({limit : '10mb'}));

connectDB();

app.get("/", (req,res) => {
    res.status(200).json({'message': 'This is an Test extractor service'})
})

app.use("/api", router);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
