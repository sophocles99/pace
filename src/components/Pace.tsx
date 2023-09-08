import { ChangeEvent, useEffect, useState } from "react";
import round from "../utils/round";

type PaceProps = {
  pace: number;
  changeValue: (valueType: string, newPace: number) => void;
};

export default function PaceInput({ pace, changeValue }: PaceProps) {
  const [newPace, setNewPace] = useState("");

  useEffect(() => {
    console.log(pace)
    const minutes = Math.floor(pace / 60);
    const seconds = round(pace % 60, 1);
    const paceString = `${minutes}:${String(seconds).padStart(2, "0")}`;
    setNewPace(paceString);
  }, [pace]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let newValue = e.target.value;
    newValue = newValue.replace(/\D/g, "").padStart(4, "0");
    const newMinutes = newValue.slice(-4, -2);
    const newSeconds = newValue.slice(-2);
    setNewPace(`${newMinutes}:${newSeconds}`);
    changeValue("pace", Number(newMinutes) * 60 + Number(newSeconds));
  }

  function handleClick(increment: number) {
    return function () {
      changeValue("pace", pace + increment);
    };
  }

  return (
    <div className="input-container">
      <label>
        Pace
        <input value={newPace} onChange={handleChange} inputMode="numeric" />
      </label>
      <button onClick={handleClick(1)}>Up</button>
      <button onClick={handleClick(-1)}>Down</button>
    </div>
  );
}
