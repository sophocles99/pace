import { ChangeEvent, useEffect, useState } from "react";

type DurationProps = {
  duration: number;
  changeDuration: (newDuration: number) => void;
};

export default function Duration({ duration, changeDuration }: DurationProps) {
  const [newDuration, setNewDuration] = useState("");

  useEffect(() => {
    duration = Math.floor(duration)
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;
    const durationString = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    setNewDuration(durationString);
  }, [duration]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    let newValue = event?.target.value;
    newValue = newValue.replace(/\D/g, "");
    setNewDuration(newValue);
    changeDuration(Number(newValue));
  }

  function handleClick(increment: number) {
    return function () {
      changeDuration(duration + increment);
    };
  }

  return (
    <div className="input-container">
      <label>
        Duration
        <input value={newDuration} onChange={handleChange} />
      </label>
      <button onClick={handleClick(1)}>Up</button>
      <button onClick={handleClick(-1)}>Down</button>
    </div>
  );
}
