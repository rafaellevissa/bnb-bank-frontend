export interface ActionTypesBase {
  PURCHASE_LIST_REQUEST: string;
  PURCHASE_LIST_SUCCESS: string;
  PURCHASE_LIST_FAILURE: string;

  PURCHASE_ADD_REQUEST: string;
  PURCHASE_ADD_SUCCESS: string;
  PURCHASE_ADD_FAILURE: string;
}

export interface Purchase {
  id: number;
  amount: number;
  description: string;
  date: string;
  user_id: number;
  created_at?: string;
  updated_at?: string;
}

export interface StateBase {
  item: string | Purchase | Purchase[] | null;
  itemEdit: string | Purchase | null;
  error: boolean;
  loading: boolean;
}

export interface Action {
  type: string;
  payload: string | Purchase | null;
  meta: any;
  error: any;
}
