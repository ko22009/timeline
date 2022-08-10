import { all } from "redux-saga/effects";
import timelineSagas from "./timelineSagas";

export default function* rootSaga() {
  yield all([...timelineSagas]);
}
