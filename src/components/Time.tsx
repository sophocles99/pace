import { ChangeEvent, useEffect, useState } from "react";
import Button from "./Button";

type TimeProps = {
  time: number;
  changeValue: (valueType: string, newTime: number) => void;
};

export default function Time({ time, changeValue }: TimeProps) {
  const [newTime, setNewTime] = useState("");

  useEffect(() => {
    time = Math.floor(time);
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    const timeString = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    setNewTime(timeString);
  }, [time]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newValue = event?.target.value;
    newValue = newValue.replace(/\D/g, "");
    setNewTime(newValue);
    changeValue("time", Number(newValue));
  };

  const makeHandleClick = (increment: number) => () => {
    changeValue("time", time + increment);
  };

  return (
    <section className="value-container">
      <div className="label-container">
        <label htmlFor="timeInput">Time</label>
      </div>
      <div className="input-container">
        <div className="input-block time">
          <Button direction="up" onClick={makeHandleClick(1)} />
          <input
            id="timeInput"
            className="time"
            value={newTime}
            onChange={handleChange}
          />
          <Button direction="down" onClick={makeHandleClick(-1)} />
        </div>
      </div>
    </section>
  );
}
