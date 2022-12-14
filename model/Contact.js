const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const contactSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone : String
})

module.exports = Contact = model("contacts",contactSchema)