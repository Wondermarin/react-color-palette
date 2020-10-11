/**
 * Converts 3 digit HEX and HTML Color Names to 6 digit HEX.
 * @param color 3 digit HEX or HTML Color Names.
 */
export function toHex(color: string): string {
  const ctx = document.createElement("canvas").getContext("2d");

  if (!ctx) {
    throw new Error("2d context not supported or canvas already initialized");
  }

  ctx.fillStyle = color;

  return ctx.fillStyle;
}
