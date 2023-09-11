import { MouseEventHandler } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

type ButtonProps = {
  direction: string;
  onClick: MouseEventHandler;
};

export default function Button({ direction, onClick }: ButtonProps) {
  return (
    <button className={direction} onClick={onClick}>
      {direction === "up" && <FaChevronUp />}
      {direction === "down" && <FaChevronDown />}
    </button>
  );
}
