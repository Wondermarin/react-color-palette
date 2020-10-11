/**
 * Checking the color in HEX for validity.
 * @param value The value in the HEX format or HTML Color Names.
 */
export function isValidHex(value: string): boolean {
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
