import produce from "immer";

import type { Action, StateBase } from "./types";

import { ActionTypes, InitialState } from "./consts";

function reducer(state = InitialState, action: Action): StateBase {
  switch (action.type) {
    case ActionTypes.PURCHASE_LIST_REQUEST:
    case ActionTypes.PURCHASE_ADD_REQUEST:
      return produce(state, (draft) => {
        draft.item = action.payload;
        draft.loading = true;
        draft.error = false;
      });
    case ActionTypes.PURCHASE_LIST_SUCCESS:
    case ActionTypes.PURCHASE_ADD_SUCCESS:
      return produce(state, (draft) => {
        draft.item = action.payload;
        draft.loading = false;
        draft.error = false;
      });
    case ActionTypes.PURCHASE_LIST_FAILURE:
    case ActionTypes.PURCHASE_ADD_FAILURE:
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
