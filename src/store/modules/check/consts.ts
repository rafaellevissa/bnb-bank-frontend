import type { ActionTypesBase, StateBase } from "./types";

export const ActionTypes: ActionTypesBase = {
  CHECK_LIST_REQUEST: "@oauth/CHECK_LIST_REQUEST",
  CHECK_LIST_SUCCESS: "@oauth/CHECK_LIST_SUCCESS",
  CHECK_LIST_FAILURE: "@oauth/CHECK_LIST_FAILURE",

  CHECK_FIND_REQUEST: "@oauth/CHECK_FIND_REQUEST",
  CHECK_FIND_SUCCESS: "@oauth/CHECK_FIND_SUCCESS",
  CHECK_FIND_FAILURE: "@oauth/CHECK_FIND_FAILURE",

  CHECK_LIST_CONTROL_REQUEST: "@oauth/CHECK_LIST_CONTROL_REQUEST",
  CHECK_LIST_CONTROL_SUCCESS: "@oauth/CHECK_LIST_CONTROL_SUCCESS",
  CHECK_LIST_CONTROL_FAILURE: "@oauth/CHECK_LIST_CONTROL_FAILURE",

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
