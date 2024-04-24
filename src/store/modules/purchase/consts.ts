import type { ActionTypesBase, StateBase } from "./types";

export const ActionTypes: ActionTypesBase = {
  PURCHASE_LIST_REQUEST: "@oauth/PURCHASE_LIST_REQUEST",
  PURCHASE_LIST_SUCCESS: "@oauth/PURCHASE_LIST_SUCCESS",
  PURCHASE_LIST_FAILURE: "@oauth/PURCHASE_LIST_FAILURE",

  PURCHASE_ADD_REQUEST: "@oauth/PURCHASE_ADD_REQUEST",
  PURCHASE_ADD_SUCCESS: "@oauth/PURCHASE_ADD_SUCCESS",
  PURCHASE_ADD_FAILURE: "@oauth/PURCHASE_ADD_FAILURE",
};

export const InitialState: StateBase = {
  item: null,
  itemEdit: null,
  error: false,
  loading: false,
};
