import { action } from "typesafe-actions";
import { ActionTypes } from "./consts";

export function list() {
  return action(ActionTypes.TRANSACTION_LIST_REQUEST);
}
