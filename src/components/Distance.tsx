import { ChangeEvent, useEffect, useState } from "react";

type DistanceProps = {
  distance: number;
  changeValue: (valueType: string, newDistance: number) => void;
};

export default function DistanceInput({
  distance,
  changeValue,
}: DistanceProps) {
  const [newDistance, setNewDistance] = useState("");

  useEffect(() => {
    setNewDistance(String(distance));
  }, [distance]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    console.log("handleChange", newValue)
    setNewDistance(newValue);
    changeValue("distance", Math.round(Number(newValue) * 1000) / 1000);
  }

  function handleClick(increment: number) {
    return function () {
      changeValue("distance", Math.round((distance + increment) * 1000) / 1000);
    };
  }

  return (
    <div className="input-container">
      <label>
        Distance
        <input value={newDistance} onChange={handleChange} type="number" />
      </label>
      <button onClick={handleClick(0.1)}>Up</button>
      <button onClick={handleClick(-0.1)}>Down</button>
    </div>
  );
}
