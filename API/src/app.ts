import express, { Router } from "express";
import cors from "cors";
import 'dotenv/config';
import dbConnect from "./confing/dbConnect";
import { router } from "./routes";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

dbConnect().then(()=>{
    console.log("coneccion exitosa")
});

app.listen(PORT, ()=>console.log(`corriendo por le puerto ${PORT}`));

