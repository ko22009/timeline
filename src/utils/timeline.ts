export function getPosition(
  intervalDateStart: Date,
  intervalDateEnd: Date,
  dateStart: Date,
  dateEnd: Date,
  width: number
) {
  const interval = intervalDateEnd.getTime() - intervalDateStart.getTime();
  const deltaStart =
    (dateStart.getTime() - intervalDateStart.getTime()) / interval;
  const deltaEnd = (dateEnd.getTime() - intervalDateStart.getTime()) / interval;
  return {
    x: Math.floor(deltaStart * width),
    width: Math.floor((deltaEnd - deltaStart) * width),
  };
}
