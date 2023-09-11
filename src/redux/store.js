import {createStore} from 'redux'
// import counterReducer from './Counter/counterReducer'
import { rootReducer } from './rootReducer'

const store = createStore(rootReducer)

export default store