import type { Action, User } from "./types";
import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "./consts";
import api from "../../../services/api";

export function* increaseBalance({ payload }: Action): Generator {
  try {
    const url = `/api/admin/user/${payload.id}/increase-balance`;

    const response: unknown = yield call(api.put, url, payload);

    const { data, status } = response as AxiosResponse<User>;

    if (status !== 200) {
      throw response;
    }

    yield put({
      type: ActionTypes.INCREASE_BALANCE_SUCCESS,
      payload: data,
    });
  } catch (failed) {
    yield put({
      type: ActionTypes.INCREASE_BALANCE_FAILURE,
      payload: null,
    });
  }
}

export function* decreaseBalance({ payload }: Action): Generator {
  try {
    const url = `/api/admin/user/${payload.id}/decrease-balance`;

    const response: unknown = yield call(api.put, url, payload);

    const { data, status } = response as AxiosResponse<User>;

    if (status !== 200) {
      throw response;
    }

    yield put({
      type: ActionTypes.DECREASE_BALANCE_SUCCESS,
      payload: data,
    });
  } catch (failed) {
    yield put({
      type: ActionTypes.DECREASE_BALANCE_FAILURE,
      payload: null,
    });
  }
}

export default all([
  takeLatest(ActionTypes.INCREASE_BALANCE_REQUEST, increaseBalance),
  takeLatest(ActionTypes.DECREASE_BALANCE_REQUEST, decreaseBalance),
]);
