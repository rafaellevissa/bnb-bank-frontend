import produce from "immer";

import type { Action, StateBase } from "./types";

import { ActionTypes, InitialState } from "./consts";

function reducer(state = InitialState, action: Action): StateBase {
  switch (action.type) {
    case ActionTypes.CHECK_LIST_REQUEST:
    case ActionTypes.CHECK_FIND_REQUEST:
    case ActionTypes.CHECK_LIST_CONTROL_REQUEST:
    case ActionTypes.CHECK_DEPOSIT_REQUEST:
    case ActionTypes.CHECK_UPDATE_REQUEST:
      return produce(state, (draft) => {
        draft.item = null;
        draft.loading = true;
        draft.error = false;
      });
    case ActionTypes.CHECK_LIST_SUCCESS:
    case ActionTypes.CHECK_FIND_SUCCESS:
    case ActionTypes.CHECK_LIST_CONTROL_SUCCESS:
    case ActionTypes.CHECK_DEPOSIT_SUCCESS:
    case ActionTypes.CHECK_UPDATE_SUCCESS:
      return produce(state, (draft) => {
        draft.item = action.payload;
        draft.loading = false;
        draft.error = false;
      });
    case ActionTypes.CHECK_LIST_CONTROL_SUCCESS:
    case ActionTypes.CHECK_LIST_FAILURE:
    case ActionTypes.CHECK_FIND_FAILURE:
    case ActionTypes.CHECK_DEPOSIT_FAILURE:
    case ActionTypes.CHECK_UPDATE_FAILURE:
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
