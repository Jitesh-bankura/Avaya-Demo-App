import { Switch } from "react-router-dom";
import { LOGIN_SUCCESS } from "../actions/login";

export default function loginReducer(state={},action){
        switch(action.type) {
        case LOGIN_SUCCESS:
            return {...state,loggedIn:true}
            default: return state
    }

}