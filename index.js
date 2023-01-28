// const express = require('express')

import  express, { Router } from "express";
import connection from "./src/db/connection.js";

import cors from 'cors';

import Routes from "./routes/route.js";

import bodyParser from "body-parser";


const app = express();

app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}))
app.use(cors())
app.use('/', Routes);

const PORT = 8000;

connection();  

app.post('/hi', (req, res) => {
    res.send(req.body)
})

app.listen(PORT, () => {
    console.log(`Listening in http://localhost:${PORT}`)
})