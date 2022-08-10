import { takeEvery, call, put, fork } from "redux-saga/effects";
import { getTimelineDataType } from "../actions/timelineActions";
import { getTimelineData as getTimelineDataApi } from "../../../api";
import { TimelineType } from "../../types/TimelineType";
import { setTimelineData } from "../slices/timelineSlice";

function* getTimelineData() {
  try {
    const timelineData: TimelineType = yield call(getTimelineDataApi);
    yield put(setTimelineData(timelineData));
  } catch (error) {
    console.error(error);
  }
}

function* watchGetData() {
  yield takeEvery(getTimelineDataType, getTimelineData);
}

const timelineSagas = [fork(watchGetData)];

export default timelineSagas;
