type OptionalProps<T> = {
  [P in keyof T]?: T[P];
};

export interface ActionTypesBase {
  INCREASE_BALANCE_REQUEST: string;
  INCREASE_BALANCE_SUCCESS: string;
  INCREASE_BALANCE_FAILURE: string;

  DECREASE_BALANCE_REQUEST: string;
  DECREASE_BALANCE_SUCCESS: string;
  DECREASE_BALANCE_FAILURE: string;
}

export type Balance = number;

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  password: string;
  balance: Balance;
  remember_token: string;
  created_at?: string;
  updated_at?: string;
}

export type UpdateBalance = {
  balance: Balance;
  id: number;
};

export type UpdateUser = OptionalProps<User>;

export interface StateBase {
  item: string | User | User[] | UpdateBalance | null;
  itemEdit: string | User | UpdateBalance | null;
  error: boolean;
  loading: boolean;
}

export interface Action {
  type: string;
  payload: any;
  meta: any;
  error: any;
}
