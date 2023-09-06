import { useState } from "react";
import "./App.css";

import DistanceSelect from "./components/DistanceSelect";
import PaceInput from "./components/PaceInput";

function App() {
  const [distance, setDistance] = useState(1.61); // Distance in km
  const [pace, setPace] = useState(360); // Pace in seconds per km
  const [duration, setDuration] = useState(0); // Duration in seconds
  const [lastChanged, setLastChanged] = useState("");

  const changeDistance = (newDistance: number) => {
    setDistance(newDistance)
    setDuration(newDistance * pace)
    setLastChanged("distance")
  }

  const paceString = `${Math.floor(pace / 60)}:${String(pace % 60).padStart(
    2,
    "0"
  )}/km`;

  return (
    <>
      <DistanceSelect distance={distance} changeDistance={changeDistance} />
      <PaceInput pace={pace} setPace={setPace} />
      <br />
      <p>Distance: {distance}km</p>
      <p>Pace: {paceString}</p>
      <p>Duration: {duration}</p>
    </>
  );
}

export default App;
