<div align="center">
  <img alt="react-color-palette" src="https://github.com/Wondermarin/react-color-palette/raw/master/public/logo.png" width="128px" height="128px" />
  <br />
  <a href="https://www.npmjs.com/package/react-color-palette">
    <img alt="npm" src="https://badgen.net/npm/v/react-color-palette?color=561ecb" />
  </a>
  <a href="https://www.npmjs.com/package/react-color-palette">
    <img alt="downloads" src="https://badgen.net/npm/dw/react-color-palette?color=561ecb" />
  </a>
  <a href="https://bundlephobia.com/result?p=react-color-palette">
    <img alt="size" src="https://badgen.net/bundlephobia/minzip/react-color-palette@latest?color=561ecb" />
  </a>
  <br />
  <h4>🎨 Lightweight &lt;ColorPicker /&gt; component for <a href="https://github.com/facebook/react">React</a>.</h4>
</div>

<div align="center">
  <a href="https://rcp.wondermarin.space">
    <img src="https://github.com/Wondermarin/react-color-palette/raw/master/public/demo.apng" />
  </a>
</div>

<div align="center">
  <a href="https://rcp.wondermarin.space">Live Demo →</a>
</div>

<hr />

## Features

- 🚀 **Lightweight**.
- 💨 **No dependencies**.
- 🛡️ **Strict**.

<hr />

## Installation

### npm
```sh
npm install react-color-palette
```

### yarn
```sh
yarn add react-color-palette
```

<hr />

## Usage

```tsx
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

export const App = () => {
  const [color, setColor] = useColor("hex", "#121212");

  return <ColorPicker width={456} height={228} color={color} onChange={setColor} hideHSV dark />;
};
```

<hr />

## Benchmarks

| Library | Minified | Gzipped | Dependencies | Tree Shaking | Type Declarations |
| :-----: | :------: | :-----: | :----------: | :----------: | :---------------: |
| **react-color-palette** | ![](https://badgen.net/bundlephobia/min/react-color-palette@latest?color=green&label=) | ![](https://badgen.net/bundlephobia/minzip/react-color-palette@latest?color=green&label=) | ![](https://badgen.net/bundlephobia/dependency-count/react-color-palette@latest?color=green&label=) | ![](https://badgen.net/bundlephobia/tree-shaking/react-color-palette@latest?label=) | ![](https://badgen.net/npm/types/react-color-palette?color=green&label=) |
| react-colorful | ![](https://badgen.net/bundlephobia/min/react-colorful@latest?color=orange&label=) | ![](https://badgen.net/bundlephobia/minzip/react-colorful@latest?color=green&label=) | ![](https://badgen.net/bundlephobia/dependency-count/react-colorful@latest?color=green&label=) | ![](https://badgen.net/bundlephobia/tree-shaking/react-colorful@latest?label=) | ![](https://badgen.net/npm/types/react-colorful?color=green&label=) |
| react-input-color | ![](https://badgen.net/bundlephobia/min/react-input-color@latest?color=red&label=) | ![](https://badgen.net/bundlephobia/minzip/react-input-color@latest?color=orange&label=) | ![](https://badgen.net/bundlephobia/dependency-count/react-input-color@latest?color=red&label=) | ![](https://badgen.net/bundlephobia/tree-shaking/react-input-color@latest?label=) | ![](https://badgen.net/npm/types/react-input-color?color=green&label=) |
| rc-color-picker | ![](https://badgen.net/bundlephobia/min/rc-color-picker@latest?color=red&label=) | ![](https://badgen.net/bundlephobia/minzip/rc-color-picker@latest?color=red&label=) | ![](https://badgen.net/bundlephobia/dependency-count/rc-color-picker@latest?color=red&label=) | ![](https://badgen.net/bundlephobia/tree-shaking/rc-color-picker@latest?label=) | ![](https://badgen.net/npm/types/rc-color-picker?color=red&label=) |
| react-color | ![](https://badgen.net/bundlephobia/min/react-color@latest?color=red&label=) | ![](https://badgen.net/bundlephobia/minzip/react-color@latest?color=red&label=) | ![](https://badgen.net/bundlephobia/dependency-count/react-color@latest?color=red&label=) | ![](https://badgen.net/bundlephobia/tree-shaking/react-color@latest?label=) | ![](https://badgen.net/npm/types/react-color?color=orange&label=) |

<hr />

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

<hr />

## API

### `ColorPicker` Props

| Name             | Type         | Default   | Description                                                                      |
| ---------------- | ------------ | --------- | -------------------------------------------------------------------------------- |
| width            | `number`     |           | The width of the color picker.                                                   |
| height           | `number`     | width     | The height of the color picker.                                                  |
| color            | [`Color`][1] |           | The current [`Color`][1].                                                        |
| onChange         | `Function`   |           | A function to update [`Color`][1].                                               |
| onChangeComplete | `Function`   | undefined | A callback is called every time the user stops changing a color (mouseup event). |
| hideHEX          | `bool`       | false     | Hide HEX input.                                                                  |
| hideRGB          | `bool`       | false     | Hide RGB input.                                                                  |
| hideHSV          | `bool`       | false     | Hide HSV input.                                                                  |
| alpha            | `bool`       | false     | Enable alpha channel.                                                            |
| dark             | `bool`       | false     | Color theme.                                                                     |

[1]: #color

### `useColor` Arguments

| Name         | Type                                 | Default | Description                                     |
| ------------ | ------------------------------------ | ------- | ----------------------------------------------- |
| model        | `"hex"` \| `"rgb"` \| `"hsv"`        |         | The color model.                                |
| initColor    | `string` \| `ColorRGB` \| `ColorHSV` |         | The initial color in the selected color model.  |

### `toColor` Arguments

| Name   | Type                                 | Default | Description                             |
| ------ | ------------------------------------ | ------- | --------------------------------------- |
| model  | `"hex"` \| `"rgb"` \| `"hsv"`        |         | The color model.                        |
| color  | `string` \| `ColorRGB` \| `ColorHSV` |         | The color in the selected color model.  |

### `Color`

| Field | Type       |
| ----- | ---------- |
| hex   | `string`   |
| rgb   | `ColorRGB` |
| hsv   | `ColorHSV` |

### `ColorRGB`

| Field | Type                    |
| ----- | ----------------------- |
| r     | `number`                |
| g     | `number`                |
| b     | `number`                |
| a     | `number` \| `undefined` |

### `ColorHSV`

| Field | Type                    |
| ----- | ----------------------- |
| h     | `number`                |
| s     | `number`                |
| v     | `number`                |
| a     | `number` \| `undefined` |

<hr />

## License

Code released under the [MIT](https://github.com/Wondermarin/react-color-palette/blob/master/LICENSE) license.
