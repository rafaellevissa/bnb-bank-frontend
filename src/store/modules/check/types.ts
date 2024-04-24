export interface ActionTypesBase {
  CHECK_LIST_REQUEST: string;
  CHECK_LIST_SUCCESS: string;
  CHECK_LIST_FAILURE: string;

  CHECK_DEPOSIT_REQUEST: string;
  CHECK_DEPOSIT_SUCCESS: string;
  CHECK_DEPOSIT_FAILURE: string;
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
