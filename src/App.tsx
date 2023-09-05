import { useState } from "react";
import "./App.css";

import DistanceDropdown from "./components/DistanceDropdown";

function App() {
  const [distance, setDistance] = useState(10); // Distance in km
  const [pace, setPace] = useState(360); // Pace in seconds per km
  const [duration, setDuration] = useState(0); // Duration in seconds

  return (
    <>
      <DistanceDropdown distance={distance} setDistance={setDistance} />
      <p>Selected distance: {distance}km</p>
    </>
  );
}

export default App;
