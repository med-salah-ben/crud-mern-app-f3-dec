const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        await mongoose.set('strictQuery', false).connect(process.env.MongoURI)
        console.log("database connected ...")
    } catch (error) {
        console.log(`can not connect to database ${error}`)
    }
}

module.exports = connectDB