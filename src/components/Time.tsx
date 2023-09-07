import { ChangeEvent, useEffect, useState } from "react";

type TimeProps = {
  time: number;
  changeValue: (valueType: string, newTime: number) => void;
};

export default function Time({ time, changeValue }: TimeProps) {
  const [newTime, setNewTime] = useState("");

  useEffect(() => {
    time = Math.floor(time)
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    const timeString = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    setNewTime(timeString);
  }, [time]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    let newValue = event?.target.value;
    newValue = newValue.replace(/\D/g, "");
    setNewTime(newValue);
    changeValue("time", Number(newValue));
  }

  function handleClick(increment: number) {
    return function () {
      changeValue("time", time + increment);
    };
  }

  return (
    <div className="input-container">
      <label>
        Time
        <input value={newTime} onChange={handleChange} />
      </label>
      <button onClick={handleClick(1)}>Up</button>
      <button onClick={handleClick(-1)}>Down</button>
    </div>
  );
}
