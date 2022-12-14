import axios from "axios";
import {GET_CONTACTS_LOAD,GET_CONTACTS_FAIL,GET_CONTACTS_SUCCESS , GET_CONTACT} from "../constant/actionTypes"

export const getContacts = ()=>async(dispatch) =>{
    dispatch({type:GET_CONTACTS_LOAD})
    try {
        let result = await axios.get('/api/contact')
        console.log(result)
        dispatch({type:GET_CONTACTS_SUCCESS , payload : result.data.response , payMsg:result.data.message})
    } catch (error) {
        dispatch({type:GET_CONTACTS_FAIL,payload:error})
        console.log(error)
    }
}

export const deleteContact = (id)=>(dispatch)=>{
    axios.delete(`/api/contact/${id}`)
    .then(()=>dispatch(getContacts()))
    .catch((err)=>console.log(err))
}

export const getContact = (id)=>(dispatch)=>{
    axios.get(`/api/contact/${id}`)
    .then((res)=>dispatch({type:GET_CONTACT , payload:res.data.response}))
    .catch((err)=>console.log(err))
}

export const postContact = (user)=> async(dispatch)=>{
    try {
        await axios.post('/api/contact/user',user)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}

export const editContact = (id,user)=>async (dispatch)=>{
     try {
        await axios.put(`/api/contact/${id}`,user)
        dispatch(dispatch(getContacts()))
     } catch (error) {
        console.log(error)
     }

}