export function float(value: number, decimalPlaces: number) {
  return Math.round(value * 10 ** decimalPlaces) / 10 ** decimalPlaces;
}
