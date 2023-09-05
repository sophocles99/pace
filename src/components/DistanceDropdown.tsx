import { useState } from "react";

function DistanceDropdown({ setDistance }) {
  const distanceNames = [
    "1 mile",
    "5K",
    "10K",
    "15K",
    "10 miles",
    "Half Marathon",
    "20 miles",
    "Marathon",
  ];
  const distanceLookup = {
    "1 mile": 1.609344,
    "5K": 5,
    "10K": 10,
    "15K": 15,
    "10 miles": 16.09344,
    "Half Marathon": 21.0975,
    "20 miles": 32.18688,
    "Marathon": 42.195
  };
  const [selectedDistance, setSelectedDistance] = useState("");

  function handleChange(e) {
    setSelectedDistance(e.target.value);
    setDistance(distanceLookup[e.target.value])
  }

  return (
    <select onChange={handleChange}>
      {distanceNames.map((distanceName) => (
        <option value={distanceName}>{distanceName}</option>
      ))}
    </select>
  );
}

export default DistanceDropdown;
