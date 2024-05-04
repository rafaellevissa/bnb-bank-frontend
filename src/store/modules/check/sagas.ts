import type { Action, Check } from "./types";
import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "./consts";
import api from "../../../services/api";
import toast from "react-hot-toast";

export function* find({ payload }: Action): Generator {
  try {
    const url = `/api/admin/checks/${payload.id}`;

    const response: unknown = yield call(api.get, url);

    const { data, status } = response as AxiosResponse<Check>;

    if (status !== 200) {
      throw response;
    }

    yield put({
      type: ActionTypes.CHECK_FIND_SUCCESS,
      payload: data,
    });
  } catch (failed) {
    const message =
      (failed as any)?.response?.data?.error?.message ??
      "Operation failed. Please try again later or contact the administrator.";
    toast.error(message);

    yield put({
      type: ActionTypes.CHECK_FIND_FAILURE,
      payload: null,
    });
  }
}

export function* list(): Generator {
  try {
    const url = "/api/checks";

    const response: unknown = yield call(api.get, url);

    const { data, status } = response as AxiosResponse<Check>;

    if (status !== 200) {
      throw response;
    }

    yield put({
      type: ActionTypes.CHECK_LIST_SUCCESS,
      payload: data,
    });
  } catch (failed) {
    const message =
      (failed as any)?.response?.data?.error?.message ??
      "Operation failed. Please try again later or contact the administrator.";
    toast.error(message);

    yield put({
      type: ActionTypes.CHECK_LIST_FAILURE,
      payload: null,
    });
  }
}

export function* listControl(): Generator {
  try {
    const url = "/api/admin/checks";

    const response: unknown = yield call(api.get, url);

    const { data, status } = response as AxiosResponse<Check>;

    if (status !== 200) {
      throw response;
    }

    yield put({
      type: ActionTypes.CHECK_LIST_CONTROL_SUCCESS,
      payload: data,
    });
  } catch (failed) {
    const message =
      (failed as any)?.response?.data?.error?.message ??
      "Operation failed. Please try again later or contact the administrator.";
    toast.error(message);

    yield put({
      type: ActionTypes.CHECK_LIST_CONTROL_FAILURE,
      payload: null,
    });
  }
}

export function* store({ payload }: Action): Generator {
  try {
    const url = "/api/checks";

    const response: unknown = yield call(api.post, url, payload);

    const { data, status } = response as AxiosResponse<Check>;

    if (status !== 200) {
      throw response;
    }

    toast.success("The record has been successfully saved.");

    yield put({
      type: ActionTypes.CHECK_DEPOSIT_SUCCESS,
      payload: data,
    });
  } catch (failed) {
    const message =
      (failed as any)?.response?.data?.error?.message ??
      "Operation failed. Please try again later or contact the administrator.";
    toast.error(message);

    yield put({
      type: ActionTypes.CHECK_DEPOSIT_FAILURE,
      payload: null,
    });
  }
}

export function* update({ payload }: Action): Generator {
  try {
    const url = `/api/admin/checks/${payload.id}`;

    const response: unknown = yield call(api.put, url, payload);

    const { data, status } = response as AxiosResponse<Check>;

    if (status !== 200) {
      throw response;
    }

    yield put({
      type: ActionTypes.CHECK_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (failed) {
    const message =
      (failed as any)?.response?.data?.error?.message ??
      "Operation failed. Please try again later or contact the administrator.";
    toast.error(message);

    yield put({
      type: ActionTypes.CHECK_UPDATE_FAILURE,
      payload: null,
    });
  }
}

export default all([
  takeLatest(ActionTypes.CHECK_LIST_REQUEST, list),
  takeLatest(ActionTypes.CHECK_FIND_REQUEST, find),
  takeLatest(ActionTypes.CHECK_LIST_CONTROL_REQUEST, listControl),
  takeLatest(ActionTypes.CHECK_DEPOSIT_REQUEST, store),
  takeLatest(ActionTypes.CHECK_UPDATE_REQUEST, update),
]);
