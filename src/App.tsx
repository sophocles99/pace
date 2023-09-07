import { useState } from "react";
import "./App.css";

import Distance from "./components/Distance";
import DistanceSelect from "./components/DistanceSelect";
import Duration from "./components/Duration";
import Pace from "./components/Pace";

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

  function changeDuration(newDuration: number) {
    setDuration(newDuration)
  }

  return (
    <div className="App">
      <Distance distance={distance} changeDistance={changeDistance} />
      <DistanceSelect distance={distance} changeDistance={changeDistance} />
      <Pace pace={pace} changePace={changePace} />
      <Duration duration={duration} changeDuration={changeDuration}/>
      <br />
      <p>Distance: {distance}km</p>
      <p>Pace: {paceString}</p>
      <p>Duration: {duration}</p>
    </div>
  );
}
