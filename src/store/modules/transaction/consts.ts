import type { ActionTypesBase, StateBase } from "./types";

export const ActionTypes: ActionTypesBase = {
  TRANSACTION_LIST_REQUEST: "@oauth/TRANSACTION_LIST_REQUEST",
  TRANSACTION_LIST_SUCCESS: "@oauth/TRANSACTION_LIST_SUCCESS",
  TRANSACTION_LIST_FAILURE: "@oauth/TRANSACTION_LIST_FAILURE",
};

export const InitialState: StateBase = {
  item: null,
  itemEdit: null,
  error: false,
  loading: false,
};
