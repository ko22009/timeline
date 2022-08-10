import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { TimelineType } from "../../types/TimelineType";

export interface TimelineSlice {
  data: TimelineType;
}

const initialState: TimelineSlice = {
  data: null,
};

export const timelineSlice = createSlice({
  name: "timelineSlice",
  initialState,
  reducers: {
    setTimelineData: (state, action: PayloadAction<TimelineType>) => {
      state.data = action.payload;
    },
  },
});

export const { setTimelineData } = timelineSlice.actions;
export const getTimelineData = (state: RootState) => state.timeline.data;

export default timelineSlice.reducer;
