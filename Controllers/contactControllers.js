const Contact = require("../model/Contact");

exports.postContact = async (req , res) =>{
    try {
        //create a new contact with the model Contact
        const newContact = new Contact(req.body)
        //test if user has an email
        if(!req.body.email){
            res.status(400).send({message:"email is required check again"})
            return;
        }
        if(!req.body.name){
            res.status(400).send({message:"name is required check again"})
            return;
        }
        //test 2  : if the email already exist = email should be unique
        const user = await Contact.findOne({email: req.body.email})
        if(user){
            res.status(400).send({message:"user already exist email, should be unique"})
            return;
        }
        //save Conact
        const response = await newContact.save();
        res.status(200).send({response:response , message:"user is saved"})
    } catch (error) {
        res.status(500).send({message:"can not save it"})
        console.log(error)
    }
}