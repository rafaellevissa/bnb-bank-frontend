import { combineReducers } from "redux";

import auth from "./auth/reducer";
import transaction from "./transaction/reducer";
import purchase from "./purchase/reducer";
import check from "./check/reducer";

export default combineReducers({
  auth,
  transaction,
  purchase,
  check,
});
