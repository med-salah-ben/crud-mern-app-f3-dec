import React , {useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import {getContacts} from "../JS/action/contactActions"
import Contact from './Contact';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state)=>state.contactReducer.contacts)
  const loadContacts = useSelector((state)=>state.contactReducer.loadContacts)

  // const msg = useSelector((state)=>state.contactReducer.msg)
  console.log("contacts" , contacts )
  // console.log("msg : " , msg )
  useEffect(()=>{
    dispatch(getContacts())
    //eslint-disable-next-line
  },[])
  return (
    <div>
      {loadContacts ? (
        <h2>loading........</h2>
      ):contacts.length === 0 ? (<h2>there is no contact</h2>)
      :contacts.map((el)=> <Contact contact={el} key={el._id} />)}
    </div>
  )
}

export default ContactList