const hex = /[0-9A-F]/i;

export function validHex(value: string): boolean {
  if (value.startsWith("#")) {
    value = value.slice(1);

    return hex.test(value[value.length - 1]);
  }

  return (/\w/i.test(value) && !/\d/.test(value)) || value === "";
}
