import { SUBMIT_FORM } from "./fornmTypes"


export const submitForm = ({name,age}) =>{
    return{
        type:SUBMIT_FORM,
        payload: {name, age}
    }
}