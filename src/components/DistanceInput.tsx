import { ChangeEvent, useEffect, useState } from "react";

type DistanceComponentProps = {
  distance: number;
  changeDistance: (newDistance: number) => void;
};

export default function DistanceInput({
  distance,
  changeDistance,
}: DistanceComponentProps) {
  const [newDistance, setNewDistance] = useState("");

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
    <label className="input-container">
      Distance
      <input value={newDistance} onChange={handleChange} type="number" />
    </label>
  );
}
