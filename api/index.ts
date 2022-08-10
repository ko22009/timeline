import timelineData from "./timelineData";
import { TimelineType } from "../src/types/TimelineType";

export function getTimelineData() {
  return Promise.resolve<TimelineType>(timelineData);
}
