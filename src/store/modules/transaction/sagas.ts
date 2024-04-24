import type { TransactionList } from "./types";
import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "./consts";
import api from "../../../services/api";

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
    yield put({
      type: ActionTypes.TRANSACTION_LIST_FAILURE,
      payload: null,
    });
  }
}

export default all([takeLatest(ActionTypes.TRANSACTION_LIST_REQUEST, list)]);
