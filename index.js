import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import fs from "fs";
import cripto from "crypto";
import * as dotenv from "dotenv";



dotenv.config();

const app = express();

const PORT = 3000;

const API_KEY = process.env.API_KEY;

const URL = 'https://api.openai.com/v1/images/generations'

//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

//middlewares
app.use(cors());

app.use(express.json());

app.use(express.static("public")); 


//rutas
app.get("/test", (req, res) => {
    res.send("hola mundo")
});

app.post("/generate-image", async (req, res) => {
    const prompt = req.body.prompt;

    Headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`  
    };
    try {
        if (!!!prompt){
            throw Error('no prompt found')
        }
        const response = await fetch()

    } catch (error) {
        console.log(`error generate image ${error.message}`);
        res.sendStatus(500)
    }
})




app.listen(PORT, () => {
    console.log("Servidor iniciado");
} )