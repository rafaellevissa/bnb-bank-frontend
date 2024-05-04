export interface ActionTypesBase {
  LOGIN_REQUEST: string;
  LOGIN_SUCCESS: string;
  LOGIN_FAILURE: string;

  SIGNUP_REQUEST: string;
  SIGNUP_SUCCESS: string;
  SIGNUP_FAILURE: string;

  LOGOUT_REQUEST: string;
  LOGOUT_SUCCESS: string;
  LOGOUT_FAILURE: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  balance: number;
}

export interface Auth {
  user: User;
  autorization: {
    type: string;
    token: string;
    expires_at: string;
  };
}

export interface Login {
  email: string;
  password: string;
}

export interface Signup {
  name: string;
  email: string;
  password: string;
}

export interface StateBase {
  item: Auth | Login | null;
  error: boolean;
  loading: boolean;
}

export interface Action {
  type: string;
  payload: Auth | Login | null;
  meta: any;
  error: any;
}
