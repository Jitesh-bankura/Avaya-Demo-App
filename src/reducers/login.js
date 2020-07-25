import { Switch } from "react-router-dom";
import { LOGIN_SUCCESS, LOGOUT_USER } from "../actions/login";

export default function loginReducer(state={},action){
        switch(action.type) {
        case LOGIN_SUCCESS:
            return {...state,loggedIn:true}
        case LOGOUT_USER:
            return{...state,loggedIn:false}
        default: return state
    }

}