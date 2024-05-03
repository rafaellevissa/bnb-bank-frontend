import produce from "immer";

import type { Action, StateBase } from "./types";

import { ActionTypes, InitialState } from "./consts";

function reducer(state = InitialState, action: Action): StateBase {
  switch (action.type) {
    case ActionTypes.DECREASE_BALANCE_REQUEST:
    case ActionTypes.INCREASE_BALANCE_REQUEST:
      return produce(state, (draft) => {
        draft.item = null;
        draft.loading = true;
        draft.error = false;
      });

    case ActionTypes.DECREASE_BALANCE_SUCCESS:
    case ActionTypes.INCREASE_BALANCE_SUCCESS:
      return produce(state, (draft) => {
        draft.item = action.payload;
        draft.loading = false;
        draft.error = false;
      });

    case ActionTypes.DECREASE_BALANCE_FAILURE:
    case ActionTypes.INCREASE_BALANCE_FAILURE:
      return produce(state, (draft) => {
        draft.item = action.payload;
        draft.loading = false;
        draft.error = true;
      });

    default:
      return state;
  }
}

export default reducer;
