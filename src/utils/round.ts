export default function round (number :number, decimals: number) {
  const multiplier = 10 ** decimals
  return Math.round(number * multiplier) / multiplier
}