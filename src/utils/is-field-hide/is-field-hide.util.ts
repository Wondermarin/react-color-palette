import { type IColor } from "@/services/color";

export function isFieldHide(hideInput: (keyof IColor)[] | boolean, field: keyof IColor) {
  return Array.isArray(hideInput) ? hideInput.includes(field) : hideInput;
}
