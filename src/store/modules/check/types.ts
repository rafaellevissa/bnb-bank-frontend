type OptionalProps<T> = {
  [P in keyof T]?: T[P];
};

export interface ActionTypesBase {
  CHECK_LIST_REQUEST: string;
  CHECK_LIST_SUCCESS: string;
  CHECK_LIST_FAILURE: string;

  CHECK_FIND_REQUEST: string;
  CHECK_FIND_SUCCESS: string;
  CHECK_FIND_FAILURE: string;

  CHECK_LIST_CONTROL_REQUEST: string;
  CHECK_LIST_CONTROL_SUCCESS: string;
  CHECK_LIST_CONTROL_FAILURE: string;

  CHECK_DEPOSIT_REQUEST: string;
  CHECK_DEPOSIT_SUCCESS: string;
  CHECK_DEPOSIT_FAILURE: string;

  CHECK_UPDATE_REQUEST: string;
  CHECK_UPDATE_SUCCESS: string;
  CHECK_UPDATE_FAILURE: string;
}

export interface Check {
  id: number;
  amount: number;
  description: string;
  picture: string;
  user_id: number;
  status: string;
  pictureBase64: string;
  created_at?: string;
  updated_at?: string;
}

export type UpdateCheck = OptionalProps<Check>;

export interface StateBase {
  item: string | Check | Check[] | null;
  itemEdit: string | Check | null;
  error: boolean;
  loading: boolean;
}

export interface Action {
  type: string;
  payload: any;
  meta: any;
  error: any;
}

export interface DepositCheck {
  amount: number;
  description: string;
  picture: File;
}
