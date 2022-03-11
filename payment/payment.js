const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    kode : String,
    nama : String,
    alamat : String,
    notelepon :  String,
    total : String
})

const Payment = new mongoose.model('Payment',paymentSchema);

module.exports = Payment;