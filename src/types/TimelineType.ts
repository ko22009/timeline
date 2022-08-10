export enum EventTypes {
  NORMAL = "#04752c",
  DANGEROUS = "#d2c918",
  CRITICAL = "#b60f0f",
}

interface TimelineEvent {
  dateStart: Date;
  dateEnd: Date;
  type: EventTypes;
}

interface TimelineDates {
  dateStart: Date;
  dateEnd: Date;
}

export type TimelineType = {
  events: TimelineEvent[];
  intervalDates: TimelineDates;
};
