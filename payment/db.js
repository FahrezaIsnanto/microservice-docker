const mongoose = require('mongoose');

const {
    MONGO_HOST,
    MONGO_PORT,
    MONGO_DB
} = process.env;

const uri = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;

mongoose.connect(uri)
.then(res => {
    console.log("success connect");
})
.catch(err => {
    throw err;
})