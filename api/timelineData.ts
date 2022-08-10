import { TimelineType, EventTypes } from "../src/types/TimelineType";

const timelineData: TimelineType = {
  intervalDates: {
    dateStart: new Date("2022-01-01T00:00:00"),
    dateEnd: new Date("2022-01-02T00:00:00"),
  },
  events: [
    {
      dateStart: new Date("2022-01-01T01:00:00"),
      dateEnd: new Date("2022-01-01T02:00:00"),
      type: EventTypes.DANGEROUS,
    },
    {
      dateStart: new Date("2022-01-01T08:21:00"),
      dateEnd: new Date("2022-01-01T14:44:11"),
      type: EventTypes.DANGEROUS,
    },
    {
      dateStart: new Date("2022-01-01T22:11:00"),
      dateEnd: new Date("2022-01-01T23:50:00"),
      type: EventTypes.DANGEROUS,
    },
  ],
};

export default timelineData;
