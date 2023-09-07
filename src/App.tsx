import { Dispatch, useState } from "react";
import "./App.css";

import Distance from "./components/Distance";
import DistanceSelect from "./components/DistanceSelect";
import Time from "./components/Time";
import Pace from "./components/Pace";

export default function App() {
  const [distance, setDistance] = useState(5); // Distance in km
  const [pace, setPace] = useState(360); // Pace in seconds per km
  const [time, setTime] = useState(1800); // Time in seconds
  const setRecentlyChanged = useState(["distance", "pace"])[1];

  const setFunctions: Record<string, Dispatch<React.SetStateAction<number>>> = {
    distance: setDistance,
    pace: setPace,
    time: setTime,
  };

  function changeValue(valueType: string, newValue: number) {
    console.log("valueType: ", valueType);
    setFunctions[valueType](newValue);
    setRecentlyChanged((currentRecentlyChanged) => {
      
      const newRecentlyChanged = [...currentRecentlyChanged];
      if (newRecentlyChanged[0] !== valueType) {
        newRecentlyChanged[1] = newRecentlyChanged[0];
        newRecentlyChanged[0] = valueType;
      }
      console.log(newRecentlyChanged);
      
      if ((valueType === "distance")) {
        if (newRecentlyChanged[1] === "pace") {
          setTime(newValue * pace);
        } else {
          setPace(time / newValue);
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
