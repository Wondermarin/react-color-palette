export function roundFloat(n: number, decimalPlaces: number): number {
  return Math.round(n * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces);
}
