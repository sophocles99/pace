import { ChangeEvent, useEffect, useState } from "react";
import round from "../utils/round";

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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setNewDistance(newValue);
    changeValue("distance", Number(newValue));
  };

  const handleClick = (increment: number) => {
    return function () {
      changeValue(
        "distance",
        round(Math.floor(distance * 10) / 10 + increment, 2)
      );
    };
  };

  return (
    <section className="value-container">
      <label>
        Distance
        <input value={newDistance} onChange={handleChange} type="number" />
      </label>
      <button onClick={handleClick(0.1)}>Up</button>
      <button onClick={handleClick(-0.1)}>Down</button>
    </section>
  );
}
