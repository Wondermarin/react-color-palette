# react-color-palette
Color picker for React

[![npm](https://img.shields.io/npm/v/react-color-palette)](https://www.npmjs.com/package/react-color-palette)
![downloads](https://img.shields.io/npm/dw/react-color-palette)
![size](https://img.shields.io/bundlephobia/min/react-color-palette)

# Demo
![demo](https://github.com/Wondermarin/react-color-palette/raw/master/public/demo.apng)

# Installation

### npm
```sh
npm install react-color-palette
```

### yarn
```sh
yarn add react-color-palette
```

# Usage

```tsx
import ColorPicker, { useColor } from "react-color-palette";

export const App = () => {
  const [color, setColor] = useColor("hex", "#121212");

  return <ColorPicker width={456} height={228} color={color} onChange={setColor} dark />;
};
```

# API

## Color
| Field | Type                                      |
| ----- | ----------------------------------------- |
| hex   | `string`                                  |
| rgb   | { r: `number`, g: `number`, b: `number` } |
| hsb   | { h: `number`, s: `number`, b: `number` } |

## ColorPicker Props
| Name     | Type                            | Default | Description                                                              |
| -------- | ------------------------------- | ------- | ------------------------------------------------------------------------ |
| width    | `number`                        |         | The width of the color picker.                                           |
| height   | `number`                        | width   | The height of the color picker.                                          |
| color    | [`Color`][1]                    |         | The current [`Color`][1].                                                |
| onChange | (color: [`Color`][1]) => void   |         | The function that accepts the updated [`Color`][1] as a single argument. |
| dark     | `bool`                          | false   | Color theme.                                                             |

[1]: https://github.com/Wondermarin/react-color-palette#color

## useColor Arguments
| Name         | Type                                 | Default | Description                                     |
| ------------ | ------------------------------------ | ------- | ----------------------------------------------- |
| format       | "hex" \| "rgb \| "hsb"               |         | The color format.                               |
| initialColor | `string` \| `ColorRGB` \| `ColorHSB` |         | The initial color in the selected color format. |

## toColor Arguments
| Name   | Type                                 | Default | Description                             |
| ------ | ------------------------------------ | ------- | --------------------------------------- |
| format | "hex" \| "rgb \| "hsb"               |         | The color format.                       |
| color  | `string` \| `ColorRGB` \| `ColorHSB` |         | The color in the selected color format. |

# License
Code released under the MIT license.
