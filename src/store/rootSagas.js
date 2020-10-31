import { all, fork } from "redux-saga/effects";
import formSagas from "./form/sagas";
import userSagas from "./user/sagas";

export default function* rootSagas() {
  yield all([fork(formSagas), fork(userSagas)]);
}
