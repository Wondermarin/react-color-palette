import { MoveAtCoordinate } from "./moveAt.types";

/**
 * Moves the x-coordinate based on the shift.
 * @param x X-coordinate.
 */
export function moveAt(x: MoveAtCoordinate): [number];
/**
 * Moves the x and y coordinates based on the shift.
 * @param x X-coordinate.
 * @param y Y-coordinate.
 */
export function moveAt(x: MoveAtCoordinate, y: MoveAtCoordinate): [number, number];
/**
 * Moves the x and y coordinates based on the shift.
 * @param x X-coordinate.
 * @param y Y-coordinate.
 */
export function moveAt(x: MoveAtCoordinate, y?: MoveAtCoordinate): [number] | [number, number] {
  const X = x.value - x.shift;
  const newX = X < x.min ? x.min : X > x.max ? x.max : X;

  if (y) {
    const Y = y.value - y.shift;
    const newY = Y < y.min ? y.min : Y > y.max ? y.max : Y;

    return [newX, newY];
  }

  return [newX];
}
