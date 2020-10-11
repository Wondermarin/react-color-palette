/**
 * Checking the color in HSB for validity.
 * @param isHue The value is a hue?
 * @param value The value of hue, saturation, or brightness.
 */
export function isValidHsb(isHue: boolean, value: string): boolean {
  const condition = isHue ? 360 : 100;
  const result = (/\d/.test(value) && Number(value) <= condition) || (value === "" && !/\s/.test(value));

  return result;
}
