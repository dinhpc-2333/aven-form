import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import * as types from "./types";
import * as services from "../../services";

function* fetchMarraigeForm() {
  try {
    const response = yield call(services.fetchMarriageForm);
    const data = yield response.json();
    yield put(actions.fetchMarriageFormSuccess(data));
  } catch (error) {
    yield put(actions.fetchMarriageFormFailure(error));
  }
}

export default function* marriageFormSagas() {
  yield takeLatest(types.FETCH_MARRIAGE_FORM.START, fetchMarraigeForm);
}
