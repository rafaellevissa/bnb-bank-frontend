export interface ActionTypesBase {
  TRANSACTION_LIST_REQUEST: string;
  TRANSACTION_LIST_SUCCESS: string;
  TRANSACTION_LIST_FAILURE: string;
}

export interface TransactionList {
  transactions: Transaction[];
  incomingAmount: number;
  outcomingAmount: number;
  balance: number;
}

export interface Transaction {
  id: number;
  amount: number;
  description: string;
  type: "incoming" | "outcoming";
  created_at?: string;
  updated_at?: string;
}

export interface StateBase {
  item: string | Transaction | Transaction[] | TransactionList | null;
  itemEdit: string | Transaction | null;
  error: boolean;
  loading: boolean;
}

export interface Action {
  type: string;
  payload: string | Transaction | TransactionList | null;
  meta: any;
  error: any;
}
