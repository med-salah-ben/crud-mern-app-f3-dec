import { TOGGLE_FALSE, TOGGLE_TRUE } from "../constant/actionTypes";

export const toggleTrue = ()=>{
    return{
        type:TOGGLE_TRUE
    }
}

export const toggleFalse = ()=>{
    return{
        type:TOGGLE_FALSE
    }
}