import { useState } from "react";
import "./App.css";

import DistanceInput from "./components/DistanceInput";
import DistanceSelect from "./components/DistanceSelect";
import PaceInput from "./components/PaceInput";

export default function App() {
  const [distance, setDistance] = useState(5); // Distance in km
  const [pace, setPace] = useState(360); // Pace in seconds per km
  const [duration, setDuration] = useState(0); // Duration in seconds
  const [lastChanged, setLastChanged] = useState("");

  const paceMinutes = Math.floor(pace / 60);
  const paceSeconds = pace % 60;
  const paceString = `${paceMinutes}:${String(paceSeconds).padStart(
    2,
    "0"
  )}min/km`;
  
  function changeDistance(newDistance: number) {
    setDistance(newDistance);
    setDuration(newDistance * pace);
    setLastChanged("distance");
  }

  function changePace(newPace: number) {
    setPace(newPace);
    setDuration(distance * newPace);
    setLastChanged("pace");
  }

  return (
    <div className="App">
      <DistanceInput distance={distance} changeDistance={changeDistance} />
      <DistanceSelect distance={distance} changeDistance={changeDistance} />
      <PaceInput pace={pace} changePace={changePace} />
      <br />
      <p>Distance: {distance}km</p>
      <p>Pace: {paceString}</p>
      <p>Duration: {duration}</p>
    </div>
  );
}
