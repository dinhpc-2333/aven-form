import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import * as types from "./types";
import * as services from "../../services";

function* fetchUsers() {
  try {
    const response = yield call(services.fetchUsers);
    const data = yield response.json();
    yield put(actions.fetchUsersSuccess(data));
  } catch (error) {
    yield put(actions.fetchUsersFailure(error));
  }
}

export default function* formSagas() {
  yield takeLatest(types.FETCH_USERS.START, fetchUsers);
}
