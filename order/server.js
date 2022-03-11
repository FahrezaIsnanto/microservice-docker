const express = require('express');
const axios = require('axios');

const app = express();
const {
    PAYMENT_HOST,
    PAYMENT_PORT,
    PORT
} = process.env;
const paymentUri = `http://${PAYMENT_HOST}:${PAYMENT_PORT}/app/v1/payment`;
const port = PORT || 3081;


app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    next();
})


app.post("/app/v1/order",async (req,res)=>{
    try{
       const result = await axios.post(paymentUri);
       const msg = {
        status : "ok",
        data : result.data.data,
        error: null
       }
       res.status(200).json(msg);
    }catch(err){
        const msg = {
            status : "error",
            data : null,
            error: err
        }
        res.status(400).json(msg);
    }
})

app.listen(port, ()=>{
    console.log(`This payment app is running on port ${port}`);
})