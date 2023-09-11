import { SUBMIT_FORM } from "./fornmTypes"


const initialstate = {
    name : "empty",
    age : 0
}

export const formReducer = (state=initialstate, {type, payload}) =>{
    switch (type) {
        case SUBMIT_FORM :
            return{
                ...state,
                name : payload.name,
                age: payload.age

            }
    
        default:
            return state
    }
}