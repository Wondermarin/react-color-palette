<div align="center">
  <h3><b>react-color-palette</b></h3>
  <p>Lightweight Color Picker component for <a href="https://github.com/facebook/react">React</a>.</p>
</div>

<div align="center">
  <a href="https://www.npmjs.com/package/react-color-palette">
    <img alt="npm" src="https://img.shields.io/npm/v/react-color-palette?style=for-the-badge" />
  </a>
  <a href="https://www.npmjs.com/package/react-color-palette">
    <img alt="downloads" src="https://img.shields.io/npm/dw/react-color-palette?style=for-the-badge" />
  </a>
  <a href="https://bundlephobia.com/result?p=react-color-palette">
    <img alt="size" src="https://img.shields.io/bundlephobia/min/react-color-palette?style=for-the-badge" />
  </a>
</div>

<div align="center">
  <a href="https://wondermarin.github.io/react-color-palette/">
    <img src="https://github.com/Wondermarin/react-color-palette/raw/master/public/demo.apng" />
  </a>
</div>

<div align="center">
  <a href="https://wondermarin.github.io/react-color-palette/">Live Demo →</a>
</div>

## Features

- Lightweight (3.5kb).
- No dependencies.
- Strict (written in TypeScript).

## Installation

### npm
```sh
npm install react-color-palette
```

### yarn
```sh
yarn add react-color-palette
```

## Usage

```tsx
import ColorPicker, { useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

export const App = () => {
  const [color, setColor] = useColor("hex", "#121212");

  return <ColorPicker width={456} height={228} color={color} onChange={setColor} hideHSV dark />;
};
```

## Overriding styles

If the default colors don't fit your project, you can always change them.

<details>
  <summary>Example for the Light theme</summary>

  ```css
  .rcp-light {
    --rcp-background: #ffffff;
    --rcp-input-text: #111111;
    --rcp-input-border: rgba(0, 0, 0, 0.1);
    --rcp-input-label: #717171;
  }
  ```
</details>

<details>
  <summary>Example for the Dark theme</summary>

  ```css
  .rcp-dark {
    --rcp-background: #181818;
    --rcp-input-text: #f3f3f3;
    --rcp-input-border: rgba(255, 255, 255, 0.1);
    --rcp-input-label: #999999;
  }
  ```
</details>

## API

### `ColorPicker` Props

| Name     | Type         | Default | Description                                                              |
| -------- | ------------ | ------- | ------------------------------------------------------------------------ |
| width    | `number`     |         | The width of the color picker.                                           |
| height   | `number`     | width   | The height of the color picker.                                          |
| color    | [`Color`][1] |         | The current [`Color`][1].                                                |
| onChange | `Function`   |         | A function to update [`Color`][1].                                       |
| hideHEX  | `bool`       | false   | Hide HEX input.                                                          |
| hideRGB  | `bool`       | false   | Hide RGB input.                                                          |
| hideHSV  | `bool`       | false   | Hide HSV input.                                                          |
| dark     | `bool`       | false   | Color theme.                                                             |

[1]: #color

### `useColor` Arguments

| Name         | Type                                 | Default | Description                                     |
| ------------ | ------------------------------------ | ------- | ----------------------------------------------- |
| format       | `"hex"` \| `"rgb"` \| `"hsv"`        |         | The color format.                               |
| initialColor | `string` \| `ColorRGB` \| `ColorHSV` |         | The initial color in the selected color format. |

### `toColor` Arguments

| Name   | Type                                 | Default | Description                             |
| ------ | ------------------------------------ | ------- | --------------------------------------- |
| format | `"hex"` \| `"rgb"` \| `"hsv"`        |         | The color format.                       |
| color  | `string` \| `ColorRGB` \| `ColorHSV` |         | The color in the selected color format. |

### `Color`

| Field | Type       |
| ----- | ---------- |
| hex   | `string`   |
| rgb   | `ColorRGB` |
| hsv   | `ColorHSV` |

### `ColorRGB`

| Field | Type     |
| ----- | -------- |
| r     | `number` |
| g     | `number` |
| b     | `number` |

### `ColorHSV`

| Field | Type     |
| ----- | -------- |
| h     | `number` |
| s     | `number` |
| v     | `number` |

## License

Code released under the [MIT](https://github.com/Wondermarin/react-color-palette/blob/master/LICENSE) license.
