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
    setNewPace(`${minutes}:${String(seconds).padStart(2, "0")}`);
  }, [pace]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setNewPace(newValue);
    const newMinutes = parseInt(newValue.split(":")[0]);
    const newSeconds = parseInt(newValue.split(":")[1]);
    console.log(newMinutes, newSeconds);
    changePace(newMinutes * 60 + newSeconds);
  }
  return (
    <label className="input-container">
      Pace
      <input value={newPace} onChange={handleChange} />
      {/* <input value={currentPace} onChange={handleChange} type="number" /> */}
    </label>
  );
}
