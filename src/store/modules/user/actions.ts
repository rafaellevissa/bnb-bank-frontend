import { action } from "typesafe-actions";
import { ActionTypes } from "./consts";
import { UpdateBalance } from "./types";

export function incrementBalance(payload: UpdateBalance) {
  return action(ActionTypes.INCREASE_BALANCE_REQUEST, payload);
}

export function decrementBalance(payload: UpdateBalance) {
  return action(ActionTypes.DECREASE_BALANCE_REQUEST, payload);
}
