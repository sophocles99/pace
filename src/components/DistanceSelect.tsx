import { useEffect, useState } from "react";
import Select, { ActionMeta, Options } from "react-select";
import styles from "../styles/distanceSelect"
import round from "../utils/round";

type DistanceProps = {
  distance: number;
  changeValue: (valueType: string, newDistance: number) => void;
};

type Option = {
  value: number;
  label: string;
};

const distanceOptions: Option[] = [
  { value: 1.609344, label: "1 mile" },
  { value: 5, label: "5K" },
  { value: 10, label: "10K" },
  { value: 15, label: "15K" },
  { value: 16.09344, label: "10 miles" },
  { value: 21.0975, label: "Half Marathon" },
  { value: 32.18688, label: "20 miles" },
  { value: 42.195, label: "Marathon" },
];

export default function DistanceSelect({
  distance,
  changeValue,
}: DistanceProps) {
  const [selectedDistance, setSelectedDistance] = useState<Option | null>(null);

  useEffect(() => {
    const matchingDistanceOption: Option | null =
      distanceOptions.find(
        (distanceOption) =>
          round(distance, 2) === round(distanceOption.value, 2)
      ) || null;
    setSelectedDistance(matchingDistanceOption);
  }, [distance]);

  const handleChange = (newOption: Option | null, actionMeta: ActionMeta<Option>) => {
    console.log(newOption, actionMeta);
    setSelectedDistance(newOption);
    if (newOption) {
      changeValue("distance", newOption.value);
    }
  };

  return (
    <section className="value-container">
      <div className="label-container">
        <label htmlFor="distanceSelect">Race Distance</label>
      </div>
      <div className="input-container">
        <div className="input-block distance-select">
          <Select
            inputId="distanceSelect"
            className="select-container"
            options={distanceOptions}
            onChange={handleChange}
            value={selectedDistance}
            placeholder="Choose Race Distance"
            styles={styles}
          />
        </div>
      </div>
    </section>
  );
}
