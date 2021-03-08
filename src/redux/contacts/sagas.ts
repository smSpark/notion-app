import { call, ForkEffect, put, StrictEffect, takeEvery } from "redux-saga/effects";
import { getContacts } from "../../assets/js/api";
import { ActionTypes } from "../../types/redux";
import { IUserInfo } from "../../types/users";
import { endLoading, setErrors, startLoading } from "../app/action";
import { setContacts } from "./action";
import { ContactActionType } from "./types";

function* fetchContacts(): Generator<StrictEffect, void, IUserInfo[]> {
  try {
    yield put<ActionTypes>(startLoading());
    const contacts = yield call(getContacts);
    yield put<ActionTypes>(setContacts(contacts));
  } catch (error) {
    yield put<ActionTypes>(setErrors(error.message));
  } finally {
    yield put<ActionTypes>(endLoading());
  }
}

export function* watchFetchContacts(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(ContactActionType.CONTACTS_FETCH, fetchContacts);
}
