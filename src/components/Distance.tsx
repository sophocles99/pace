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

  const makeHandleClick = (increment: number) => () => {
    changeValue(
      "distance",
      round(Math.floor(distance * 10) / 10 + increment, 2)
    );
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
          onChange={handleChange}
        />
        <button className="down" onClick={makeHandleClick(-0.1)}>
          Down
        </button>
      </div>
    </section>
  );
}
