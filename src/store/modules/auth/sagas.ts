import type { Action, Auth } from "./types";
import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "./consts";
import api from "../../../services/api";
import storage from "redux-persist/lib/storage";
import toast from "react-hot-toast";

export function* login({ payload }: Action): Generator {
  try {
    const response: unknown = yield call(api.post, "/api/auth/login", payload);

    const { data, status } = response as AxiosResponse<Auth>;

    if (status !== 200) {
      throw response;
    }

    yield put({
      type: ActionTypes.LOGIN_SUCCESS,
      payload: data,
    });

    window.location.reload();
  } catch (failed) {
    toast.error("Login failed. Please check the provided credentials.");
    yield put({
      type: ActionTypes.LOGIN_FAILURE,
      payload: null,
    });
  }
}

export function* signup({ payload }: Action): Generator {
  try {
    const response: unknown = yield call(
      api.post,
      "/api/auth/register",
      payload
    );

    const { data, status } = response as AxiosResponse<Auth>;

    if (status !== 200) {
      throw response;
    }

    yield put({
      type: ActionTypes.SIGNUP_SUCCESS,
      payload: data,
    });

    window.location.reload();
  } catch (failed) {
    toast.error(
      "Registration failed. Please check the provided information and try again later."
    );
    yield put({
      type: ActionTypes.SIGNUP_FAILURE,
      payload: null,
    });
  }
}

export function* logout(): Generator {
  try {
    storage.removeItem("persist:@reactjschallenge");

    yield put({ type: ActionTypes.LOGOUT_SUCCESS });
  } catch (failed) {
    toast.error("Logout failed. Please contact the system administrator.");
    yield put({ type: ActionTypes.LOGOUT_FAILURE });
  }
}

export default all([
  takeLatest(ActionTypes.LOGIN_REQUEST, login),
  takeLatest(ActionTypes.SIGNUP_REQUEST, signup),
  takeLatest(ActionTypes.LOGOUT_REQUEST, logout),
]);
