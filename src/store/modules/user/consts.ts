import type { ActionTypesBase, StateBase } from "./types";

export const ActionTypes: ActionTypesBase = {
  INCREASE_BALANCE_REQUEST: "@oauth/INCREASE_BALANCE_REQUEST",
  INCREASE_BALANCE_SUCCESS: "@oauth/INCREASE_BALANCE_SUCCESS",
  INCREASE_BALANCE_FAILURE: "@oauth/INCREASE_BALANCE_FAILURE",

  DECREASE_BALANCE_REQUEST: "@oauth/DECREASE_BALANCE_REQUEST",
  DECREASE_BALANCE_SUCCESS: "@oauth/DECREASE_BALANCE_SUCCESS",
  DECREASE_BALANCE_FAILURE: "@oauth/DECREASE_BALANCE_FAILURE",
};

export const InitialState: StateBase = {
  item: null,
  itemEdit: null,
  error: false,
  loading: false,
};
