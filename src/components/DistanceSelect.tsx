import { Dispatch, SetStateAction, useState } from "react";

type DistanceSelectProps = {
  distance: number;
  setDistance: Dispatch<SetStateAction<number>>;
};

export default function DistanceSelect({
  distance,
  setDistance,
}: DistanceSelectProps) {
  const distanceNames: string[] = [
    "1 mile",
    "5K",
    "10K",
    "15K",
    "10 miles",
    "Half Marathon",
    "20 miles",
    "Marathon",
  ];
  const distanceLookup: Record<string, number> = {
    "1 mile": 1.609344,
    "5K": 5,
    "10K": 10,
    "15K": 15,
    "10 miles": 16.09344,
    "Half Marathon": 21.0975,
    "20 miles": 32.18688,
    Marathon: 42.195,
  };

  const matchingDistance: string | undefined = distanceNames.find(
    (distanceName) =>
      distance === Math.round(distanceLookup[distanceName] * 100) / 100
  );

  const [selectedDistance, setSelectedDistance] = useState(
    matchingDistance ? matchingDistance : ""
  );

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedDistance(e.target.value);
    setDistance(distanceLookup[e.target.value]);
  }

  return (
    <>
      <label>
        Distance
        <select onChange={handleChange} value={selectedDistance}>
          {distanceNames.map((distanceName) => (
            <option value={distanceName}>{distanceName}</option>
          ))}
        </select>
      </label>
    </>
  );
}
