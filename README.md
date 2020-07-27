# react-color-palette
Color picker for React

[![npm](https://img.shields.io/npm/v/react-color-palette)](https://www.npmjs.com/package/react-color-palette)

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
import React, { useState } from "react";
import ColorPicker from "react-color-palette";

export const App = () => {
  const [color, setColor] = useState("#121212");

  return (
    <ColorPicker
      width={225}
      color={color}
      onChange={color => setColor(color.hex)}
    />
  );
};
```

# Props

### width
The width of the palette (since the palette is square, the same value will be used for the height).

### color
Initial color (HEX or HTML Color Name).

### onChange
A function that accepts an object of the updated color as a single argument. The object contains 3 color models: hex, rgb and hsb.

# License
Code released under the MIT license.