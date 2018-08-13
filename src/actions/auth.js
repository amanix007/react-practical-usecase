export const AUTH = {
    OTP_PENDING: "OTP_PENDING",
    OTP_RESOLVED: "OTP_RESOLVED",
    OTP_REJECTED: "OTP_REJECTED",
    LOGIN_PENDING: "AUTH_LOGIN_PENDING",
    LOGIN_RESOLVED: "AUTH_LOGIN_RESOLVED",
    LOGIN_REJECTED: "AUTH_LOGIN_REJECTED",
    REGISTER_PENDING: "AUTH_REGISTER_PENDING",
    REGISTER_RESOLVED: "AUTH_REGISTER_RESOLVED",
    REGISTER_REJECTED: "AUTH_REGISTER_REJECTED",
    LOGOUT: "AUTH_LOGOUT"
};

export const otpResolved = (data) => ({ type: AUTH.OTP_RESOLVED, payload: data });

export const otpPending = () => ({ type: AUTH.OTP_PENDING });

export const otpRejected = (error) => ({ type: AUTH.OTP_REJECTED, payload: error });

export const loginResolved = (data) => ({ type: AUTH.LOGIN_RESOLVED, payload: data });

export const loginPending = () => ({ type: AUTH.LOGIN_PENDING });

export const loginRejected = (error) => ({ type: AUTH.LOGIN_REJECTED, payload: error });

export const registerResolved = (data) => ({ type: AUTH.REGISTER_RESOLVED, payload: data });

export const registerPending = () => ({ type: AUTH.REGISTER_PENDING });

export const registerRejected = (error) => ({ type: AUTH.REGISTER_REJECTED, payload: error });

export const logout = () => ({ type: AUTH.LOGOUT });
