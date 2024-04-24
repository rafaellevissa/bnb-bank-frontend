import type { ActionTypesBase, StateBase } from "./types";

export const ActionTypes: ActionTypesBase = {
  CHECK_LIST_REQUEST: "@oauth/CHECK_LIST_REQUEST",
  CHECK_LIST_SUCCESS: "@oauth/CHECK_LIST_SUCCESS",
  CHECK_LIST_FAILURE: "@oauth/CHECK_LIST_FAILURE",

  CHECK_DEPOSIT_REQUEST: "@oauth/CHECK_DEPOSIT_REQUEST",
  CHECK_DEPOSIT_SUCCESS: "@oauth/CHECK_DEPOSIT_SUCCESS",
  CHECK_DEPOSIT_FAILURE: "@oauth/CHECK_DEPOSIT_FAILURE",
};

export const InitialState: StateBase = {
  item: null,
  itemEdit: null,
  error: false,
  loading: false,
};
