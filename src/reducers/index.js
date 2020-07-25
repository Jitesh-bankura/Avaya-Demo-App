import { combineReducers } from 'redux'
import loginReducer from './login'

const rootReducer = combineReducers({
  loginData: loginReducer,
})

export default rootReducer