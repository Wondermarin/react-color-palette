export function clamp(value: number, max: number, min: number): number {
  return value > max ? max : value < min ? min : value;
}
