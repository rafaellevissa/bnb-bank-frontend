import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import transaction from "./transaction/sagas";
import purchase from "./purchase/sagas";
import check from "./check/sagas";

export default function* rootSaga(): Generator {
  yield all([auth, transaction, purchase, check]);
}
