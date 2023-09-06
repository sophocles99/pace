import { ChangeEvent, useEffect, useState } from "react";

type DistanceProps = {
  distance: number;
  changeDistance: (newDistance: number) => void;
};

export default function DistanceInput({
  distance,
  changeDistance,
}: DistanceProps) {
  const [newDistance, setNewDistance] = useState(String(distance));

  useEffect(() => {
    const distanceString = distance ? String(distance) : "";
    setNewDistance(distanceString);
  }, [distance]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    setNewDistance(newValue);
    changeDistance(Number(newValue));
  }

  return (
    <label>
      Distance
      <input value={newDistance} onChange={handleChange} type="number" />
    </label>
  );
}
