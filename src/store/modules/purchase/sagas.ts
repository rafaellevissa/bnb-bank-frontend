import type { Action, Purchase } from "./types";
import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "./consts";
import api from "../../../services/api";
import toast from "react-hot-toast";

export function* list(): Generator {
  try {
    const url = "/api/purchases";

    const response: unknown = yield call(api.get, url);

    const { data, status } = response as AxiosResponse<Purchase>;

    if (status !== 200) {
      throw response;
    }

    yield put({
      type: ActionTypes.PURCHASE_LIST_SUCCESS,
      payload: data,
    });
  } catch (failed) {
    const message =
      (failed as any)?.response?.data?.error?.message ??
      "Operation failed. Please try again later or contact the administrator.";
    toast.error(message);

    yield put({
      type: ActionTypes.PURCHASE_LIST_FAILURE,
      payload: null,
    });
  }
}

export function* store({ payload }: Action): Generator {
  try {
    const url = "/api/purchases";

    const response: unknown = yield call(api.post, url, payload);

    const { data, status } = response as AxiosResponse<Purchase>;

    if (status !== 200) {
      throw response;
    }

    toast.success("The record has been successfully saved.");

    yield put({
      type: ActionTypes.PURCHASE_ADD_SUCCESS,
      payload: data,
    });
  } catch (failed) {
    const message =
      (failed as any)?.response?.data?.error?.message ??
      "Operation failed. Please try again later or contact the administrator.";
    toast.error(message);

    yield put({
      type: ActionTypes.PURCHASE_ADD_FAILURE,
      payload: null,
    });
  }
}

export default all([
  takeLatest(ActionTypes.PURCHASE_LIST_REQUEST, list),
  takeLatest(ActionTypes.PURCHASE_ADD_REQUEST, store),
]);
