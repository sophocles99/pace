import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
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

  const handleKeyDown = (event: KeyboardEvent) => {
    if (["e", "E", "+", "-"].includes(event.key)) event.preventDefault();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = round(Number(event.target.value), 2);
    updateDistance(newValue);
  };

  const makeHandleClick = (increment: number) => () => {
    const newValue = round(Math.floor(distance * 10) / 10 + increment, 1);
    updateDistance(newValue);
  };

  const updateDistance = (newValue: number) => {
    if (newValue >= 0 && newValue < 1000) {
      setNewDistance(String(newValue));
      changeValue("distance", newValue);
    }
  };

  return (
    <section className="value-container">
      <label htmlFor="distanceInput">Distance</label>
      <div className="value">
        <button className="up" onClick={makeHandleClick(0.1)}>
          Up
        </button>
        <input
          id="distanceInput"
          type="number"
          value={newDistance}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
        <button className="down" onClick={makeHandleClick(-0.1)}>
          Down
        </button>
      </div>
    </section>
  );
}
