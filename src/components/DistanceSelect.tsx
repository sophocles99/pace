import { ChangeEvent, useState } from "react";

type DistanceSelectProps = {
  distance: number;
  changeDistance: (newDistance: number) => void;
};

type DistancePair = [string, number];

export default function DistanceSelect({
  distance,
  changeDistance,
}: DistanceSelectProps) {
  const raceDistances: Record<string, number> = {
    "1 mile": 1.609344,
    "5K": 5,
    "10K": 10,
    "15K": 15,
    "10 miles": 16.09344,
    "Half Marathon": 21.0975,
    "20 miles": 32.18688,
    "Marathon": 42.195
  };

  const matchingDistancePair: DistancePair | undefined = Object.entries(raceDistances).find(
    (raceDistancePair) => distance === Math.round(raceDistancePair[1] * 100) / 100
  );

  const matchingDistanceName = matchingDistancePair
    ? matchingDistancePair[0]
    : "";

  const [selectedDistance, setSelectedDistance] =
    useState(matchingDistanceName);

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const newDistance = raceDistances[e.target.value]
    changeDistance(newDistance)
  }

  return (
    <>
      <label>
        Distance
        <select onChange={handleChange} value={selectedDistance}>
          {Object.keys(raceDistances).map((raceDistanceName) => {
            return (
              <option value={raceDistanceName} key={raceDistanceName}>
                {raceDistanceName}
              </option>
            );
          })}
        </select>
      </label>
    </>
  );
}
