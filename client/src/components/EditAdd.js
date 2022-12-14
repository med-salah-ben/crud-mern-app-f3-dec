import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react'
import { editContact, postContact } from '../JS/action/contactActions';

const EditAdd = () => {
    const dispatch = useDispatch();
    const [user , setUser] = useState({name:"",email:"",phone:""})
    const userReducer = useSelector(state=>state.contactReducer.user)

    const edit = useSelector(state=>state.editReducer.edit)

    useEffect(()=>{
        edit? setUser(userReducer) : setUser({name:"",email:"",phone:""})
    },[userReducer , edit])

    const handleContact = ()=>{
        if(!edit){
            dispatch(postContact(user))
        }else{
            dispatch(editContact(userReducer._id,user))
        }
    }

    const handleChange = (e)=>{
        e.preventDefault();
        setUser({...user,[e.target.name] : e.target.value})
    }

  return (
    <Form >
    <Form.Field>
      <label>Name</label>
      <input placeholder='Name'value={user.name} name='name'  onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' value={user.email} name='email'  onChange={handleChange}/>
    </Form.Field>
    <Form.Field>
      <label>Phone</label>
      <input placeholder='Phone' value={user.phone} name='phone'  onChange={handleChange}/>
    </Form.Field>
    <Link to="/contact_list"> <Button onClick={handleContact}> {edit ? "Edit" : "Save"} </Button></Link>
  </Form>
  )
}

export default EditAdd