import {createStore} from 'redux'
import counterReducer from './Counter/counterReducer'

const store = createStore(counterReducer)

export default store