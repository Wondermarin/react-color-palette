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
npm install react-color-palette styled-components
```

### yarn
```sh
yarn add react-color-palette styled-components
```

# Usage

```js
import React from "react";
import ColorPicker, { useColorObject } from "react-color-palette";

export const App = () => {
  const [color, setColor] = useColorObject("hex", "#121212");

  return <ColorPicker width={400} color={color} onChange={setColor} />;
};
```

# API

## ColorPicker

| Prop     | Type                           | Description                                                               |
| -------- | ------------------------------ | ------------------------------------------------------------------------- |
| width    | number                         | The width of the color picker.                                            |
| [height] | number                         | The height of the color picker.                                           |
| color    | `ColorObject`                  | Color in the `ColorObject`.                                               |
| onChange | (color: `ColorObject`) => void | The function that accepts the updated `ColorObject` as a single argument. |

## useColorObject(model, initialColor)

| Param        | Type                 | Description                                    |
| ------------ | -------------------- | ---------------------------------------------- |
| model        | `ColorModels`        | Color model.                                   |
| initialColor | `ColorObject[model]` | The initial color in the selected color model. |

# License
Code released under the MIT license.