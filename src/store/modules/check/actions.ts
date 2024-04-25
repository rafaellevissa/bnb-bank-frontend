import { action } from "typesafe-actions";
import { ActionTypes } from "./consts";

export function list() {
  return action(ActionTypes.CHECK_LIST_REQUEST);
}

export function listControl() {
  return action(ActionTypes.CHECK_LIST_CONTROL_REQUEST);
}

export function store(payload: FormData) {
  return action(ActionTypes.CHECK_DEPOSIT_REQUEST, payload);
}
