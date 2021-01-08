import { Color } from "../toColor";

/**
 * Converts the value to a valid HEX color.
 * @param value Converted value.
 */
export function toValidHEX(value: string): Color["hex"] {
  if (!value.startsWith("#") || value.length === 4) {
    const ctx = document.createElement("canvas").getContext("2d");

    if (!ctx) {
      throw new Error("2d context not supported or canvas already initialized");
    }

    ctx.fillStyle = value;

    return ctx.fillStyle;
  } else if (value.length === 7) {
    return value;
  } else {
    return "#000000";
  }
}
