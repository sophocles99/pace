import { MouseEventHandler } from "react";

type ButtonProps = {
  direction: string;
  onClick: MouseEventHandler;
};

export default function Button({ direction, onClick }: ButtonProps) {
  return <button onClick={onClick}></button>;
}
