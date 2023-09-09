import { ChangeEvent, useEffect, useState } from "react";

type DistanceProps = {
  distance: number;
  changeValue: (valueType: string, newDistance: number) => void;
};

const raceDistances: Record<string, number> = {
  "1 mile": 1.609344,
  "5K": 5,
  "10K": 10,
  "15K": 15,
  "10 miles": 16.09344,
  "Half Marathon": 21.0975,
  "20 miles": 32.18688,
  Marathon: 42.195,
};

export default function DistanceSelect({
  distance,
  changeValue,
}: DistanceProps) {
  const [selectedDistance, setSelectedDistance] = useState("");

  useEffect(() => {
    const matchingDistanceName: string =
      Object.keys(raceDistances).find(
        (raceDistanceName) =>
          Math.round(distance * 100) / 100 ===
          Math.round(raceDistances[raceDistanceName] * 100) / 100
      ) || "";
    setSelectedDistance(matchingDistanceName);
  }, [distance]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newDistanceName = event.target.value;
    setSelectedDistance(newDistanceName);
    changeValue("distance", raceDistances[newDistanceName]);
  };

  return (
    <section className="value-container">
      <label htmlFor="distanceSelect">Race Distance</label>
      <div className="value">
        <select
          id="distanceSelect"
          onChange={handleChange}
          value={selectedDistance}
        >
          <option value="" disabled>
            Choose a distance
          </option>
          {Object.keys(raceDistances).map((raceDistanceName) => {
            return (
              <option value={raceDistanceName} key={raceDistanceName}>
                {raceDistanceName}
              </option>
            );
          })}
        </select>
      </div>
    </section>
  );
}
