import { combineReducers } from "@reduxjs/toolkit";
import timeline from "./slices/timelineSlice";

const rootReducer = combineReducers({
  timeline,
});

export default rootReducer;
