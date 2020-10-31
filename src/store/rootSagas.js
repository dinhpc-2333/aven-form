import { all, fork } from "redux-saga/effects";
import marriageFormSagas from "./marriage-form/sagas";
import userSagas from "./user/sagas";

export default function* rootSagas() {
  yield all([fork(marriageFormSagas), fork(userSagas)]);
}
