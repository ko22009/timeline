import { TimelineType } from "../../types/TimelineType";
import { Stage, Layer, Rect } from "react-konva";
import { useEffect, useRef, useState } from "react";
import Konva from "konva";
import { getPosition } from "../../utils/timeline";

type TimelineProps = {
  data: TimelineType;
};

const TIMELINE = {
  CORNER_RADIUS: 5,
  INNER_CORNER_RADIUS: 10,
  BACKGROUND_COLOR: "#4e5f7c",
  INNER_BACKGROUND_COLOR: "#434c5a",
  PADDING: 10,
  HEIGHT: 30,
} as const;

const Timeline = ({ data }: TimelineProps) => {
  const canvasRef = useRef<Konva.Stage>();
  const [sizes, setSizes] = useState({
    width: window.innerWidth,
    height: TIMELINE.HEIGHT,
  });
  useEffect(() => {
    setSizes({
      height: TIMELINE.HEIGHT,
      width: canvasRef.current.container().parentElement.offsetWidth,
    });
  }, []);
  return (
    <Stage ref={canvasRef} width={sizes.width} height={sizes.height}>
      <Layer>
        <Rect
          x={0}
          y={0}
          width={sizes.width}
          height={TIMELINE.HEIGHT}
          fill={TIMELINE.BACKGROUND_COLOR}
          cornerRadius={TIMELINE.CORNER_RADIUS}
        />
        <Rect
          x={TIMELINE.PADDING}
          y={TIMELINE.PADDING}
          width={sizes.width - TIMELINE.PADDING * 2}
          height={TIMELINE.HEIGHT - TIMELINE.PADDING * 2}
          fill={TIMELINE.INNER_BACKGROUND_COLOR}
          cornerRadius={TIMELINE.INNER_CORNER_RADIUS}
        />
        {data.events.map((event) => {
          const position = getPosition(
            data.intervalDates.dateStart,
            data.intervalDates.dateEnd,
            event.dateStart,
            event.dateEnd,
            sizes.width - TIMELINE.PADDING * 2
          );
          return (
            <Rect
              key={event.dateStart.getTime()}
              x={position.x + TIMELINE.PADDING}
              y={TIMELINE.PADDING}
              width={position.width}
              height={TIMELINE.HEIGHT - TIMELINE.PADDING * 2}
              fill={event.type}
              cornerRadius={TIMELINE.INNER_CORNER_RADIUS}
            />
          );
        })}
      </Layer>
    </Stage>
  );
};

export default Timeline;
