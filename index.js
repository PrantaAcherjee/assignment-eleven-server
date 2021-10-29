const express=require('express');
const { MongoClient } = require('mongodb');
const app=express();
const cors=require('cors');
const port=process.env.PORT||5000;
require('dotenv').config();
// middle ware 
app.use(cors());
app.use(express.json());
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rrj86.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

console.log(uri);

app.get('/',(req,res)=>{
    res.send('server run on')
})
app.listen(port,()=>{
    console.log('runingggggggg',port)
})