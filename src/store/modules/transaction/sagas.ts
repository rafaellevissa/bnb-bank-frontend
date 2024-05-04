import type { TransactionList } from "./types";
import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "./consts";
import api from "../../../services/api";
import toast from "react-hot-toast";

export function* list(): Generator {
  try {
    const url = "/api/transactions";

    const response: unknown = yield call(api.get, url);

    const { data, status } = response as AxiosResponse<TransactionList>;

    if (status !== 200) {
      throw response;
    }

    yield put({
      type: ActionTypes.TRANSACTION_LIST_SUCCESS,
      payload: data,
    });
  } catch (failed) {
    const message =
      (failed as any)?.response?.data?.error?.message ??
      "Operation failed. Please try again later or contact the administrator.";
    toast.error(message);

    yield put({
      type: ActionTypes.TRANSACTION_LIST_FAILURE,
      payload: null,
    });
  }
}

export default all([takeLatest(ActionTypes.TRANSACTION_LIST_REQUEST, list)]);
