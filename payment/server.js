const express = require('express');
require('./db');
const Payment = require('./payment');
const getPaymentData = require('./funcpayment');

const app = express();
const port = process.env.PORT || 3080;


app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    next();
})

app.get("/app/v1/payment",async (req,res)=>{
    try{
        const result = await Payment.find();
        console.log('GET PAYMENT',result);
        const msg = {
            status : "ok",
            data : result,
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

app.post("/app/v1/payment",async (req,res)=>{
    try{
        const paymentData = getPaymentData();
        const newPayment = new Payment(paymentData);
        const result = await newPayment.save(); 
        console.log('POST PAYMENT',result);
        const msg = {
            status : "ok",
            data : {result},
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