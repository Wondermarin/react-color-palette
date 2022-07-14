const hex = /[0-9A-F]/i;

export function validHex(value: string): boolean {
  if (value.startsWith("#")) {
    value = value.slice(1);

    return hex.test(value[value.length - 1]);
  }

  return false;
}

export function sanitiseHexInput(value: string): string {
  const hashAmount = [...value.matchAll(/#/gi)].length;
  const multipleHashes = hashAmount > 1;
  const noHash = hashAmount === 0;

  value = multipleHashes ? `#${value.replaceAll("#", "")}` : value;
  value = noHash ? `#${value}` : value;

  const hexLength = value.length;

  value = hexLength > 7 ? value.slice(0, 7) : value;

  return value;
}
