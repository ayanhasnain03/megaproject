const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL).then((data) => {
        console.log("db connected")
    }).catch((e)=>{
        console.log("db diconnected")
    })
}

module.exports = connectDatabase;