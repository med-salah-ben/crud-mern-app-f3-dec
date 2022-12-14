const express = require('express')
const router = express.Router();
const controllers = require('../Controllers/contactControllers');
const Contact = require('../model/Contact');

//test Routing
router.get('/hello',(req,res)=>{
    res.send('hello routing..')
})

//add Contact
//method post
//params Body
//path :http://localhost:7001/api/contact/user
router.post("/user",controllers.postContact)

//get Contacts
//method get
//path :http://localhost:7001/api/contact
router.get("/",async(req,res)=>{
    try {
        const result = await Contact.find()
        res.status(200).send({response:result , message:"geting contacts seccessfully"})
    } catch (error) {
        res.send({message:"can not get contacts"})
    }
})

//get One Contact
//method get
//path :http://localhost:7001/api/contact/:id
router.get("/:id",async(req,res)=>{
    try {
        const result = await Contact.findOne({_id:req.params.id})
        if(result){
            res.status(200).send({response:result , message:"geting contact by ID seccessfully"})
        }else{
            res.status(400).send({message:"there is no contact with this id"})
        }
    } catch (error) {
        res.send({message:"can not get contact"})
    }
})

//Delete  Contact
//method delete
//path :http://localhost:7001/api/contact/:id
router.delete("/:id",async(req,res)=>{
    try {
        const result = await Contact.deleteOne({_id:req.params.id})
        // if(result){
        //     res.status(200).send({response:result , message:"delete contact by ID seccessfully"})
        // }else{
        //     res.status(400).send({message:"there is no contact with this id"})
        // }
        res.status(200).send({response:result , message:"delete contact by ID seccessfully"})
    } catch (error) {
        res.send({message:"can not delete contact"})
    }
})

//Update One Contacts
//method put
//path :http://localhost:7001/api/contact/:id
router.put("/:id",async(req,res)=>{
    try {
        const result = await Contact.updateOne({_id:req.params.id},{$set:{...req.body}})
        if(result){
            const newResult = await Contact.findOne({_id:req.params.id})
            res.status(200).send({response:newResult , message:"update contact by ID seccessfully"})
        }else{
            res.status(400).send({message:"there is no contact with this id"})
        }
    } catch (error) {
        console.log(error)
        res.send({message:"can not update contact"})
    }
})

module.exports =router