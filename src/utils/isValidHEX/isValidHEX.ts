/**
 * Checks the color in HEX format for correctness.
 * @param value Color in HEX format or HTML Color Names.
 */
export function isValidHEX(value: string): boolean {
  if (value.startsWith("#")) {
    value = value.slice(1);

    if (value.length <= 6) {
      return /[A-Fa-f0-9]/.test(value[value.length - 1]);
    } else {
      return false;
    }
  }

  return (/\w/.test(value) && !/\d/.test(value)) || value === "";
}
