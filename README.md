<div align="center">
  <p>
    <img alt="react-color-palette" src="https://github.com/Wondermarin/react-color-palette/raw/main/public/logo.png" width="128px" height="128px" />
  </p>
  <p>🎨 Lightweight &lt;ColorPicker /&gt; component for <a href="https://github.com/facebook/react">React</a>.</p>
  <p>
    <a href="https://www.npmjs.com/package/react-color-palette">
      <img alt="npm" src="https://badgen.net/npm/v/react-color-palette?color=561ecb" />
    </a>
    <a href="https://www.npmjs.com/package/react-color-palette">
      <img alt="downloads" src="https://badgen.net/npm/dw/react-color-palette?color=561ecb" />
    </a>
    <a href="https://bundlephobia.com/result?p=react-color-palette">
      <img alt="size" src="https://badgen.net/bundlephobia/minzip/react-color-palette@latest?color=561ecb" />
    </a>
  </p>
  <p>
    <img src="https://github.com/Wondermarin/react-color-palette/raw/main/public/demo.apng" />
  </p>
</div>

## Installation

### yarn
```sh
yarn add react-color-palette
```

### npm
```sh
npm install react-color-palette
```

## Usage

```tsx
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

export function App() {
  const [color, setColor] = useColor("#561ecb");

  return <ColorPicker color={color} onChange={setColor} />;
}
```

## Examples

### Usage <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb">`rgb()`</a> in <a href="#usecolor">`useColor()`</a>
```tsx
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

export function App() {
  const [color, setColor] = useColor("rgb(86 30 203)");

  return <ColorPicker color={color} onChange={setColor} />;
}
```

### Usage <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/named-color">`<named-color>`</a> in <a href="#usecolor">`useColor()`</a>
```tsx
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

export function App() {
  const [color, setColor] = useColor("cyan");

  return <ColorPicker color={color} onChange={setColor} />;
}
```

### Custom Layout
```tsx
import { Saturation, Hue, useColor } from "react-color-palette";
import "react-color-palette/css";

export function App() {
  const [color, setColor] = useColor("hsl(120 100% 50% / .5)");

  return (
    <div className="custom-layout">
      <Saturation height={300} color={color} onChange={setColor} />
      <Hue color={color} onChange={setColor} />
    </div>
  );
}
```

### HEX input only
```tsx
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

export function App() {
  const [color, setColor] = useColor("#123123");

  return <ColorPicker hideInput={["rgb", "hsv"]} color={color} onChange={setColor} />
}
```

### onChangeComplete optional callback
```tsx
import { ColorPicker, useColor, type IColor } from "react-color-palette";
import "react-color-palette/css";

export function App() {
  const [color, setColor] = useColor("#123123");

  const onChangeComplete = (color: IColor) => localStorage.setItem("color", color.hex);

  return <ColorPicker hideInput={["rgb", "hsv"]} color={color} onChange={setColor} onChangeComplete={onChangeComplete} />
}
```

## API

### `<ColorPicker />`
<p>The main component, which includes: <a href="#saturation">&lt;Saturation /&gt;</a>, <a href="#hue">&lt;Hue /&gt;</a>, <a href="#alpha">&lt;Alpha /&gt;</a> and &lt;Fields /&gt; components for instant use.<br />If you need a custom layout, then you can use <a href="#saturation">&lt;Saturation /&gt;</a>, <a href="#hue">&lt;Hue /&gt;</a> and <a href="#alpha">&lt;Alpha /&gt;</a> components separately, which are also exported from the library.</p>

<table>
  <tr>
    <th>Prop</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>height</td>
    <td>number</td>
    <td>200</td>
    <td>Height of the <a href="#saturation">Saturation</a> component in pixels.</td>
  </tr>
  <tr>
    <td>hideAlpha</td>
    <td>boolean</td>
    <td>false</td>
    <td>Hides the <a href="#alpha">Alpha</a> component.</td>
  </tr>
  <tr>
    <td>hideInput</td>
    <td>(keyof <a href="#icolor">IColor</a>)[] | boolean</td>
    <td>false</td>
    <td>If boolean: hides all inputs if true or displays all inputs if false. If array: hides all inputs listed in the array.</td>
  </tr>
  <tr>
    <td>color</td>
    <td><a href="#icolor">IColor</a></td>
    <td></td>
    <td>Current <a href="#icolor">color</a>.</td>
  </tr>
  <tr>
    <td>onChange</td>
    <td>Function</td>
    <td></td>
    <td>Сallback function will be fired when <a href="#icolor">color</a> changes.</td>
  </tr>
  <tr>
    <td>onChangeComplete</td>
    <td>Function</td>
    <td></td>
    <td>Callback function will be fired when the interaction is complete with the color picker.</td>
  </tr>
</table>

### `<Saturation />`

<table>
  <tr>
    <th>Prop</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>height</td>
    <td>number</td>
    <td></td>
    <td>Height of the saturation element in pixels.</td>
  </tr>
  <tr>
    <td>color</td>
    <td><a href="#icolor">IColor</a></td>
    <td></td>
    <td>Current <a href="#icolor">color</a>.</td>
  </tr>
  <tr>
    <td>onChange</td>
    <td>Function</td>
    <td></td>
    <td>Сallback function will be fired when <a href="#icolor">color</a> changes.</td>
  </tr>
  <tr>
    <td>onChangeComplete</td>
    <td>Function</td>
    <td></td>
    <td>Callback function will be fired when the interaction is complete with the saturation picker.</td>
  </tr>
</table>

### `<Hue />`

<table>
  <tr>
    <th>Prop</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>color</td>
    <td><a href="#icolor">IColor</a></td>
    <td></td>
    <td>Current <a href="#icolor">color</a>.</td>
  </tr>
  <tr>
    <td>onChange</td>
    <td>Function</td>
    <td></td>
    <td>Сallback function will be fired when <a href="#icolor">color</a> changes.</td>
  </tr>
  <tr>
    <td>onChangeComplete</td>
    <td>Function</td>
    <td></td>
    <td>Callback function will be fired when the interaction is complete with the hue picker.</td>
  </tr>
</table>

### `<Alpha />`

<table>
  <tr>
    <th>Prop</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>color</td>
    <td><a href="#icolor">IColor</a></td>
    <td></td>
    <td>Current <a href="#icolor">color</a>.</td>
  </tr>
  <tr>
    <td>onChange</td>
    <td>Function</td>
    <td></td>
    <td>Сallback function will be fired when <a href="#icolor">color</a> changes.</td>
  </tr>
  <tr>
    <td>onChangeComplete</td>
    <td>Function</td>
    <td></td>
    <td>Callback function will be fired when the interaction is complete with the alpha picker.</td>
  </tr>
</table>

### `useColor()`

<table>
  <tr>
    <th>Arg</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>initialColor</td>
    <td><a href="#tcolor">TColor</a></td>
    <td></td>
    <td>Initial <a href="#tcolor">сolor</a>.</td>
  </tr>
</table>

### `TColor`
<p>Value can be specified using one of the methods listed below:</p>

- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/named-color">`<named-color>`</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color">`<hex-color>`</a>
- <a href="https://en.wikipedia.org/wiki/SRGB">sRGB</a> color space: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl">`hsl()`</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hwb">`hwb()`</a> or <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb">`rgb()`</a>

### `IColor`

<table>
  <tr>
    <th>Field</th>
    <th>Type</th>
  </tr>
  <tr>
    <td>hex</td>
    <td>string</td>
  </tr>
  <tr>
    <td>rgb</td>
    <td><a href="#icolorrgb">IColorRgb</a></td>
  </tr>
  <tr>
    <td>hsv</td>
    <td><a href="#icolorhsv">IColorHsv</a></td>
  </tr>
</table>

### `IColorRgb`

<table>
  <tr>
    <th>Field</th>
    <th>Type</th>
  </tr>
  <tr>
    <td>r</td>
    <td>number</td>
  </tr>
  <tr>
    <td>g</td>
    <td>number</td>
  </tr>
  <tr>
    <td>b</td>
    <td>number</td>
  </tr>
    <tr>
    <td>a</td>
    <td>number</td>
  </tr>
</table>

### `IColorHsv`

<table>
  <tr>
    <th>Field</th>
    <th>Type</th>
  </tr>
  <tr>
    <td>h</td>
    <td>number</td>
  </tr>
  <tr>
    <td>s</td>
    <td>number</td>
  </tr>
  <tr>
    <td>v</td>
    <td>number</td>
  </tr>
    <tr>
    <td>a</td>
    <td>number</td>
  </tr>
</table>

## License

<p>Code released under the <a href="https://github.com/Wondermarin/react-color-palette/blob/master/LICENSE">MIT</a> license.</p>
