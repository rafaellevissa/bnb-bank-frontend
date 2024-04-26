import { action } from "typesafe-actions";
import { ActionTypes } from "./consts";

export function list() {
  return action(ActionTypes.CHECK_LIST_REQUEST);
}

export function find(id: string) {
  return action(ActionTypes.CHECK_FIND_REQUEST, { id });
}

export function listControl() {
  return action(ActionTypes.CHECK_LIST_CONTROL_REQUEST);
}

export function store(payload: FormData) {
  return action(ActionTypes.CHECK_DEPOSIT_REQUEST, payload);
}
