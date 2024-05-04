import { action } from "typesafe-actions";
import { ActionTypes } from "./consts";

export function list() {
  return action(ActionTypes.PURCHASE_LIST_REQUEST);
}

export function store(payload: any) {
  return action(ActionTypes.PURCHASE_ADD_REQUEST, payload);
}
