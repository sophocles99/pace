import { ChangeEvent, useEffect, useState } from "react";
import round from "../utils/round";

type PaceProps = {
  pace: number;
  changeValue: (valueType: string, newPace: number) => void;
};

export default function PaceInput({ pace, changeValue }: PaceProps) {
  const [newPace, setNewPace] = useState("");

  useEffect(() => {
    const minutes = Math.floor(pace / 60);
    const seconds = round(pace % 60, 1);
    const paceString = `${minutes}:${String(seconds).padStart(2, "0")}`;
    setNewPace(paceString);
  }, [pace]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    newValue = newValue.replace(/\D/g, "").padStart(4, "0");
    const newMinutes = newValue.slice(-4, -2);
    const newSeconds = newValue.slice(-2);
    setNewPace(`${newMinutes}:${newSeconds}`);
    changeValue("pace", Number(newMinutes) * 60 + Number(newSeconds));
  };

  const makeHandleClick = (increment: number) => () => {
    changeValue("pace", pace + increment);
  };

  return (
    <section className="value-container">
      <label htmlFor="paceInput">Pace</label>
      <div className="value">
        <button onClick={makeHandleClick(1)}>Up</button>
        <input
          id="paceInput"
          value={newPace}
          onChange={handleChange}
          inputMode="numeric"
        />
        <button onClick={makeHandleClick(-1)}>Down</button>
      </div>
    </section>
  );
}
