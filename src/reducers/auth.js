import { AUTH } from "../actions/auth";

const defaultState = {
    data: {},
    loading: false,
    loggedIn: false,
    error: {}
};

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case AUTH.REGISTER_PENDING:
            return { ...state, loading: true };
        case AUTH.REGISTER_RESOLVED:
            return { ...state, loading: false, loggedIn: false, data: action.payload, error: {} };
        case AUTH.REGISTER_REJECTED:
            return { ...state, loading: false, loggedIn: false, data: {}, error: action.payload };

        case AUTH.LOGIN_PENDING:
            return { ...state, loading: true };
        case AUTH.LOGIN_RESOLVED:
            return { ...state, loading: false, loggedIn: true, data: action.payload, error: {} };
        case AUTH.LOGIN_REJECTED:
            return { ...state, loading: false, loggedIn: false, data: {}, error: action.payload };

        case AUTH.LOGOUT:
            return { ...state, data: {}, error: {}, loggedIn: false };

        default:
            return state;
    }
};

export default authReducer;
