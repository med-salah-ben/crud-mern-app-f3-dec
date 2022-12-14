import {GET_CONTACTS_LOAD,GET_CONTACTS_FAIL,GET_CONTACTS_SUCCESS,GET_CONTACT , EDIT_CONTACT} from "../constant/actionTypes";

const initialState = {
    contacts:[],
    msg:"",
    user:{},
    loadContacts : false,
    errors:[],
    editContact:""
}

export const contactReducer = (state = initialState , {type , payload ,payMsg}) =>{
    switch (type) {
        case GET_CONTACTS_LOAD:
            return {...state , loadContacts:true}
        case GET_CONTACTS_SUCCESS: 
            return {...state , loadContacts:false , contacts:payload , msg:payMsg}
        case GET_CONTACTS_FAIL:
            return {...state, loadContacts:false , errors:payload }
        case GET_CONTACT:
            return {...state,  user:payload }
        // case EDIT_CONTACT:
        //     return {...state,  editContact:payload }
        default:
            return state
    }
}