/**
 * Checking the color in RGB for validity.
 * @param value The value of red, green, or blue.
 */
export function isValidRgb(value: string): boolean {
  const result = (/\d/.test(value) && Number(value) <= 255) || (value === "" && !/\s/.test(value));

  return result;
}
