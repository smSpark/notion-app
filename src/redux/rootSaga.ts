import { all, AllEffect, ForkEffect } from "redux-saga/effects";
import { watchFetchContacts } from "./contacts/sagas";

export function* rootSaga(): Generator<
  AllEffect<Generator<ForkEffect<never>, void, unknown>>,
  void,
  unknown
  > {
  yield all([watchFetchContacts()]);
}
