import { DECREMENT, INCREMENT, INCREMENTBY5 } from "./counterTypes";

const initialstate = {
    count:0,
    count2:10
}

const counterReducer = (state = initialstate, action) => {
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count : state.count +1
            }
        case DECREMENT:
            return{
                ...state,
                count : state.count - 1
            }
        
        case INCREMENTBY5:
            return{
                ...state,
                count2: state.count2 + 5
            }
            
    
        default:
            return state
    }
}

export default counterReducer