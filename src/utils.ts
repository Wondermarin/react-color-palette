import { Dispatch } from "react";

import { ColorObject } from "./types";

export const hsb2rgb = (
  hue: number,
  saturation: number,
  brightness: number
): [number, number, number] => {
  const h = hue;
  let s = saturation;
  let b = brightness;

  s /= 100;
  b /= 100;

  const i = Math.floor(h / 60);
  const f = h / 60 - i;
  const p = b * (1 - s);
  const q = b * (1 - s * f);
  const t = b * (1 - s * (1 - f));

  let R: number;
  let G: number;
  let B: number;

  switch (i) {
    case 0:
    case 6:
      R = b;
      G = t;
      B = p;
      break;
    case 1:
      R = q;
      G = b;
      B = p;
      break;
    case 2:
      R = p;
      G = b;
      B = t;
      break;
    case 3:
      R = p;
      G = q;
      B = b;
      break;
    case 4:
      R = t;
      G = p;
      B = b;
      break;
    case 5:
      R = b;
      G = p;
      B = q;
      break;
    default:
      R = b;
      G = t;
      B = p;
      break;
  }

  return [Math.round(R * 255), Math.round(G * 255), Math.round(B * 255)];
};

export const rgb2hex = (r: number, g: number, b: number): string =>
  `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

export const hex2rgb = (hex: string): [number, number, number] => {
  const hexInt = parseInt(hex.slice(1), 16);
  const R = (hexInt >> 16) & 255;
  const G = (hexInt >> 8) & 255;
  const B = hexInt & 255;

  return [R, G, B];
};

export const rgb2hsb = (
  r: number,
  g: number,
  b: number
): [number, number, number] => {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  const d = max - min;

  let H = 0;
  const S = max === 0 ? 0 : d / max;
  const B = max;

  if (max !== min) {
    switch (max) {
      case r:
        H = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        H = (b - r) / d + 2;
        break;
      case b:
        H = (r - g) / d + 4;
        break;
    }

    H /= 6;
  }

  return [H * 360, S * 100, B * 100];
};

export const isValidHex = (hex: string) =>
  hex.startsWith("#")
    ? hex.length === 4 || hex.length === 7
    : hex !== "" && !/\d/.test(hex);

export const color2colorObject = (
  color: [number, number, number] | string,
  inputted: boolean,
  model: string
): ColorObject => {
  const ctx = document.createElement("canvas").getContext("2d")!;
  let newColor: string = "#000000";

  switch (model) {
    case "HEX":
      if (typeof color === "string") {
        if (!color.startsWith("#")) {
          ctx.fillStyle = color;
          newColor = ctx.fillStyle;
        } else {
          if (color.length === 4) {
            ctx.fillStyle = color;
            newColor = ctx.fillStyle;
          } else if (color.length === 7) {
            newColor = color;
          }
        }
      }
      break;
    case "RGB":
      if (typeof color !== "string") newColor = rgb2hex(...color);
      break;
    default:
      break;
  }

  return {
    hsb: rgb2hsb(...hex2rgb(newColor)),
    rgb: hex2rgb(newColor),
    hex: newColor,
    inputted,
  };
};

export const changeColorType = (
  color: ColorObject,
  inputted: boolean = false
) => ({
  ...color,
  inputted,
});

export const moveAt = (
  horiz: boolean,
  x: number,
  shiftX: number,
  minX: number,
  maxX: number,
  setX: Dispatch<number>,
  y?: number,
  shiftY?: number,
  minY?: number,
  maxY?: number,
  setY?: Dispatch<number>
): number[] => {
  const X = x - shiftX;
  let Y: number | undefined;

  if (typeof y !== "undefined" && typeof shiftY !== "undefined")
    Y = y - shiftY!;

  const newX = X < minX ? minX : X > maxX ? maxX : X;
  let newY: number | undefined;

  if (
    !horiz &&
    typeof Y !== "undefined" &&
    typeof minY !== "undefined" &&
    typeof maxY !== "undefined"
  )
    newY = Y < minY ? minY : Y > maxY ? maxY : Y;

  setX(newX);
  if (!horiz && setY && typeof newY !== "undefined") {
    setY(newY);

    return [newX, newY];
  }

  return [newX];
};

export const changeHue = (
  newHue: number,
  currentHSB: number[],
  inputted: boolean
): ColorObject => {
  const newHSB: [number, number, number] = [
    newHue,
    currentHSB[1],
    currentHSB[2],
  ];

  return {
    hsb: newHSB,
    rgb: hsb2rgb(...newHSB),
    hex: rgb2hex(...hsb2rgb(...newHSB)),
    inputted,
  };
};

export const getColor = (
  hue: number,
  x: number = 0,
  y: number = 0,
  palette: HTMLCanvasElement,
  inputted: boolean
): ColorObject => {
  const X = palette.clientWidth / 100;
  const Y = palette.clientHeight / 100;
  const s = x <= 0 ? 0 : x >= palette.clientWidth ? 100 : x / X;
  const b = y <= 0 ? 0 : y >= palette.clientHeight ? 100 : y / Y;

  const saturation = s;
  const brightness = 100 - b;

  return {
    hsb: [hue, saturation, brightness],
    rgb: hsb2rgb(hue, saturation, brightness),
    hex: rgb2hex(...hsb2rgb(hue, saturation, brightness)),
    inputted,
  };
};

export const getColorCoordinates = (
  color: ColorObject,
  palette: HTMLCanvasElement
) => {
  const [h, s, b] = color.hsb;

  const X = palette.clientWidth / 100;
  const Y = palette.clientHeight / 100;
  const x = s * X;
  const y = (100 - b) * Y;

  return [h, x, y];
};

export const getHue = (x: number, width: number): number => {
  let h: number;

  if (x < 0) {
    h = 0;
  } else if (x > width) {
    h = 360;
  } else {
    h = (x / width) * 360;
  }

  return h;
};

export const getHueCoordinates = (
  hue: number,
  minX: number,
  maxX: number,
  width: number,
  cursorWidth: number
) => {
  let x: number;

  switch (hue) {
    case 0:
      x = minX;
      break;
    case 360:
      x = maxX;
      break;
    default:
      x = (hue / 360) * width + cursorWidth / 2;
      break;
  }

  return x;
};
