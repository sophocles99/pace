import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

type PaceInputProps = {
  pace: number;
  setPace: Dispatch<SetStateAction<number>>;
};

export default function PaceInput({ pace, setPace }: PaceInputProps) {
  const [currentPace, setCurrentPace] = useState(pace);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const newPace = parseFloat(e.target.value);
    setCurrentPace(newPace);
    setPace(newPace);
  }
  return (
    <label>
      Pace
      <input value={currentPace} onChange={handleChange} type="number" />
    </label>
  );
}
