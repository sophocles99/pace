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
    setNewDistance(String(distance));
  }, [distance]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    setNewDistance(newValue);
    changeDistance(Number(newValue));
  }

  function handleClick(increment: number) {
    return function () {
      changeDistance(distance + increment);
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
