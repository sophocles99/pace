import { ChangeEvent, useEffect, useState } from "react";

type PaceProps = {
  pace: number;
  changePace: (newPace: number) => void;
};

export default function PaceInput({ pace, changePace }: PaceProps) {
  const [newPace, setNewPace] = useState("");

  useEffect(() => {
    const minutes = Math.floor(pace / 60);
    const seconds = pace % 60;
    const paceString = `${minutes}:${String(seconds).padStart(2, "0")}`;
    setNewPace(paceString);
  }, [pace]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let newValue = e.target.value;
    newValue = newValue.replace(/\D/g, "").padStart(4, "0");
    const newMinutes = newValue.slice(-4, -2);
    const newSeconds = newValue.slice(-2);
    setNewPace(`${newMinutes}:${newSeconds}`);
    changePace(Number(newMinutes) * 60 + Number(newSeconds));
  }

  function handleClick(increment: number) {
    return function () {
      changePace(pace + increment);
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
