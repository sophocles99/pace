import { ChangeEvent, useEffect, useState } from "react";

type PaceComponentProps = {
  pace: number;
  changePace: (newPace: number) => void;
};

export default function PaceInput({ pace, changePace }: PaceComponentProps) {
  const [newPace, setNewPace] = useState("");

  useEffect(() => {
    const minutes = Math.floor(pace / 60);
    const seconds = pace % 60;
    const paceString = `${minutes}:${String(seconds).padStart(2, "0")}`;
    setNewPace(paceString);
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let newValue = e.target.value;
    newValue = newValue.replace(/\D/g, "").padStart(4, "0");
    const newMinutes = newValue.slice(-4, -2);
    const newSeconds = newValue.slice(-2);
    setNewPace(`${newMinutes}:${newSeconds}`);
    changePace(Number(newMinutes) * 60 + Number(newSeconds));
  }

  const handleClick = (increment: number) => () => {
    changePace(pace + increment);
  }

  return (
    <>
      <label className="input-container">
        Pace
        <input value={newPace} onChange={handleChange} inputMode="numeric" />
      </label>
      <button onClick={handleClick(1)}>Up</button>
      <button onClick={handleClick(-1)}>Down</button>
    </>
  );
}
