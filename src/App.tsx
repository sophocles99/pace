import { Dispatch, useState } from "react";
import "./App.css";

import Distance from "./components/Distance";
import DistanceSelect from "./components/DistanceSelect";
import Time from "./components/Time";
import Pace from "./components/Pace";
import round from "./utils/round";

export default function App() {
  const [distance, setDistance] = useState(4); // Distance in km
  const [pace, setPace] = useState(480); // Pace in seconds per km
  const [time, setTime] = useState(1920); // Time in seconds
  const setRecentlyChanged = useState(["distance", "pace"])[1];

  const setFunctions: Record<string, Dispatch<React.SetStateAction<number>>> = {
    distance: setDistance,
    pace: setPace,
    time: setTime,
  };

  function changeValue(valueType: string, newValue: number) {
    setFunctions[valueType](newValue);
    setRecentlyChanged((currentRecentlyChanged) => {
      const newRecentlyChanged = [...currentRecentlyChanged];
      if (newRecentlyChanged[0] !== valueType) {
        newRecentlyChanged[1] = newRecentlyChanged[0];
        newRecentlyChanged[0] = valueType;
      }

      if (valueType === "distance") {
        if (newRecentlyChanged[1] === "pace") {
          setTime(round(newValue * pace, 1));
        } else {
          setPace(round(time / newValue, 1));
        }
      }

      if (valueType === "pace") {
        if (newRecentlyChanged[1] === "distance") {
          setTime(round(distance * newValue, 1));
        } else {
          setDistance(round(time / newValue, 2));
        }
      }

      if (valueType === "time") {
        if (newRecentlyChanged[1] === "distance") {
          setPace(round(newValue / distance, 1));
        } else {
          setDistance(round(newValue / pace, 2));
        }
      }

      return newRecentlyChanged;
    });
  }

  return (
    <div className="App">
      <Distance distance={distance} changeValue={changeValue} />
      <DistanceSelect distance={distance} changeValue={changeValue} />
      <Pace pace={pace} changeValue={changeValue} />
      <Time time={time} changeValue={changeValue} />
      <br />
      <p>Distance: {distance}</p>
      <p>Pace: {pace}</p>
      <p>Time: {time}</p>
    </div>
  );
}
