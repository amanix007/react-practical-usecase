import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';
import authReducer from './reducers/auth';

const reducer = combineReducers({
    router: routerReducer,
    auth: authReducer
    
});

export default reducer;
