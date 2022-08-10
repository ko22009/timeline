import { getDataTimelineAction } from "./store/actions/timelineActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTimelineData } from "./store/slices/timelineSlice";
import Timeline from "./components/timeline";
import Container from "./components/container";

function App() {
  const dispatch = useDispatch();
  const dataTimeline = useSelector(getTimelineData);
  useEffect(() => {
    dispatch(getDataTimelineAction());
  }, []);
  return (
    <>
      <Container>{dataTimeline && <Timeline data={dataTimeline} />}</Container>
    </>
  );
}

export default App;
