# Changelog


## [7.1.1](https://github.com/Wondermarin/react-color-palette/compare/v7.1.0...v7.1.1) (2024-04-10)


### Bug Fixes

* Mark `.css` files as `sideEffect` ([#68](https://github.com/Wondermarin/react-color-palette/issues/68)) ([1acc892](https://github.com/Wondermarin/react-color-palette/commit/1acc892302f46bc3afe02adf4c34e88df6d3be6f))

## [7.1.0](https://github.com/Wondermarin/react-color-palette/compare/v7.0.4...v7.1.0) (2023-09-07)


### Features

* Add "individual visibility control for color inputs" support ([#62](https://github.com/Wondermarin/react-color-palette/issues/62)) ([157dbb1](https://github.com/Wondermarin/react-color-palette/commit/157dbb1b162d53dd0acfafebb7e238f969f1e894))

## [7.0.4](https://github.com/Wondermarin/react-color-palette/compare/v7.0.3...v7.0.4) (2023-08-12)


### Bug Fixes

* Add reposition support ([#60](https://github.com/Wondermarin/react-color-palette/issues/60)) ([8342bf3](https://github.com/Wondermarin/react-color-palette/commit/8342bf345215ed621f15936069ecb599a5f43d12))

## [7.0.3](https://github.com/Wondermarin/react-color-palette/compare/v7.0.2...v7.0.3) (2023-08-09)


### Bug Fixes

* Add resize support ([003f052](https://github.com/Wondermarin/react-color-palette/commit/003f05284a7a860d8e2a330c5c450df93b9dc441))

## [7.0.2](https://github.com/Wondermarin/react-color-palette/compare/v7.0.1...v7.0.2) (2023-08-04)


### Bug Fixes

* Add `touch-action: none` to prevent `pointercancel` ([be5bfd0](https://github.com/Wondermarin/react-color-palette/commit/be5bfd039a88a25a302438cd9557969ad4225209))

## [7.0.1](https://github.com/Wondermarin/react-color-palette/compare/v7.0.0...v7.0.1) (2023-08-04)


### Bug Fixes

* Add direct path to stylesheet ([#53](https://github.com/Wondermarin/react-color-palette/issues/53)) ([762f465](https://github.com/Wondermarin/react-color-palette/commit/762f4651ebc3bef4f4507c8fbc0ca59fe3ddbee2))

## [7.0.0](https://github.com/Wondermarin/react-color-palette/compare/v6.2.0...v7.0.0) (2023-08-03)


### ⚠ BREAKING CHANGES

* Remove `model` arg in `useColor()`
* Remove `width` prop in `<ColorPicker />` component
* Remove `onChangeComplete` prop in `<ColorPicker />` component
* Replace `hideHEX`, `hideRGB` and `hideHSV` to `hideInput` prop in `<ColorPicker />` component
* Replace `alpha` to `hideAlpha` prop in `<ColorPicker />` component
* Remove `dark` prop in `<ColorPicker />` component
* Replace `toColor()` to `ColorService`
* Rename `Color`, `ColorRGB` and `ColorHSV` types in `IColor`, `IColorRgb` and `IColorHsv`
* Replace `react-color-palette/lib/css/styles.css` to `react-color-palette/css`

### Features

* Add CSS-like values support in `useColor()` ([91d0ca6](https://github.com/Wondermarin/react-color-palette/commit/91d0ca63891272ef4153f8201a0dd81ef524d5d0))
* Add responsive support ([#22](https://github.com/Wondermarin/react-color-palette/issues/22)) ([91d0ca6](https://github.com/Wondermarin/react-color-palette/commit/91d0ca63891272ef4153f8201a0dd81ef524d5d0))
* Add RSC support (Next.js 13 App Router) ([91d0ca6](https://github.com/Wondermarin/react-color-palette/commit/91d0ca63891272ef4153f8201a0dd81ef524d5d0))
* Add touch support ([#20](https://github.com/Wondermarin/react-color-palette/issues/20)) ([91d0ca6](https://github.com/Wondermarin/react-color-palette/commit/91d0ca63891272ef4153f8201a0dd81ef524d5d0))
* Enable alpha-channel by default ([91d0ca6](https://github.com/Wondermarin/react-color-palette/commit/91d0ca63891272ef4153f8201a0dd81ef524d5d0))
* Export `<Saturation />`, `<Hue />` and `<Alpha />` components ([91d0ca6](https://github.com/Wondermarin/react-color-palette/commit/91d0ca63891272ef4153f8201a0dd81ef524d5d0))
* Implement update state from props in `useColor()` ([#38](https://github.com/Wondermarin/react-color-palette/issues/38)) ([91d0ca6](https://github.com/Wondermarin/react-color-palette/commit/91d0ca63891272ef4153f8201a0dd81ef524d5d0))
* Remove `dark` prop in `<ColorPicker />` component ([91d0ca6](https://github.com/Wondermarin/react-color-palette/commit/91d0ca63891272ef4153f8201a0dd81ef524d5d0))
* Remove `model` arg in `useColor()` ([91d0ca6](https://github.com/Wondermarin/react-color-palette/commit/91d0ca63891272ef4153f8201a0dd81ef524d5d0))
* Remove `onChangeComplete` prop in `<ColorPicker />` component ([91d0ca6](https://github.com/Wondermarin/react-color-palette/commit/91d0ca63891272ef4153f8201a0dd81ef524d5d0))
* Remove `width` prop in `<ColorPicker />` component ([91d0ca6](https://github.com/Wondermarin/react-color-palette/commit/91d0ca63891272ef4153f8201a0dd81ef524d5d0))
* Rename `Color`, `ColorRGB` and `ColorHSV` types in `IColor`, `IColorRgb` and `IColorHsv` ([91d0ca6](https://github.com/Wondermarin/react-color-palette/commit/91d0ca63891272ef4153f8201a0dd81ef524d5d0))
* Replace `alpha` to `hideAlpha` prop in `<ColorPicker />` component ([91d0ca6](https://github.com/Wondermarin/react-color-palette/commit/91d0ca63891272ef4153f8201a0dd81ef524d5d0))
* Replace `hideHEX`, `hideRGB` and `hideHSV` to `hideInput` prop in `<ColorPicker />` component ([91d0ca6](https://github.com/Wondermarin/react-color-palette/commit/91d0ca63891272ef4153f8201a0dd81ef524d5d0))
* Replace `react-color-palette/lib/css/styles.css` to `react-color-palette/css` ([91d0ca6](https://github.com/Wondermarin/react-color-palette/commit/91d0ca63891272ef4153f8201a0dd81ef524d5d0))
* Replace `toColor()` to `ColorService` ([91d0ca6](https://github.com/Wondermarin/react-color-palette/commit/91d0ca63891272ef4153f8201a0dd81ef524d5d0))


### Bug Fixes

* Add `types` in `exports` field ([#51](https://github.com/Wondermarin/react-color-palette/issues/51)) ([91d0ca6](https://github.com/Wondermarin/react-color-palette/commit/91d0ca63891272ef4153f8201a0dd81ef524d5d0))
* Add check for `NaN` alpha value in `hex2rgb()` ([#33](https://github.com/Wondermarin/react-color-palette/issues/33)) ([91d0ca6](https://github.com/Wondermarin/react-color-palette/commit/91d0ca63891272ef4153f8201a0dd81ef524d5d0))

## [6.2.0](https://github.com/Wondermarin/react-color-palette/compare/v6.1.0...v6.2.0) (2021-11-11)


### Features

* `onChangeComplete` callback. ([bd83997](https://github.com/Wondermarin/react-color-palette/commit/bd83997da178d79d9292264cf513f20b696a665e)), closes [#18](https://github.com/Wondermarin/react-color-palette/issues/18)


### Bug Fixes

* Infinite `useColor` re-renders ([#26](https://github.com/Wondermarin/react-color-palette/issues/26)) ([3dcc66b](https://github.com/Wondermarin/react-color-palette/commit/3dcc66bbe38615dea273e147bf379aa3f982f493))
* Sliders width ([#24](https://github.com/Wondermarin/react-color-palette/issues/24)) ([6c8fa99](https://github.com/Wondermarin/react-color-palette/commit/6c8fa999742e474a1d2f67877e8045d399a9f280))

## [6.1.0](https://github.com/Wondermarin/react-color-palette/compare/v6.0.0...v6.1.0) (2021-07-22)


### Features

* Add `alpha channel` ([#15](https://github.com/Wondermarin/react-color-palette/issues/15)) ([aa7c289](https://github.com/Wondermarin/react-color-palette/commit/aa7c289b971e02fe0c0740904202f80d39fd9bbd))

## [6.0.0](https://github.com/Wondermarin/react-color-palette/compare/v5.0.0...v6.0.0) (2021-06-26)


### ⚠ BREAKING CHANGES

* `hideHSB` -> `hideHSV` (#14)

### Bug Fixes

* `hideHSB` -> `hideHSV` ([#14](https://github.com/Wondermarin/react-color-palette/issues/14)) ([b6d8e8b](https://github.com/Wondermarin/react-color-palette/commit/b6d8e8b95f31bbd8269d5a4e9aa9f8fe0be336e1))
* Hue bar size ([#12](https://github.com/Wondermarin/react-color-palette/issues/12)) ([95084b1](https://github.com/Wondermarin/react-color-palette/commit/95084b148e37fc28cdaee7abc143161a0b7b9f6e))

## [5.0.0](https://github.com/Wondermarin/react-color-palette/compare/v4.1.0...v5.0.0) (2021-04-28)


### ⚠ BREAKING CHANGES

* Remove `ColorPicker` default export
* Rename `HSB` -> `HSV`

### Features

* Add `ESModule` support. ([e534a6d](https://github.com/Wondermarin/react-color-palette/commit/e534a6dacddb9b71a8a429cb8538d2a83ccb311c))
* Remove `ColorPicker` default export ([f51c337](https://github.com/Wondermarin/react-color-palette/commit/f51c33767f85165a7dc5506b9571028040bac192))
* Rename `HSB` -> `HSV` ([bf741e3](https://github.com/Wondermarin/react-color-palette/commit/bf741e3071115cadb738db6e26179d63192e6cd3))


### Bug Fixes

* Add `React 16` support ([#9](https://github.com/Wondermarin/react-color-palette/issues/9)) ([cd4c729](https://github.com/Wondermarin/react-color-palette/commit/cd4c72988e4e20e03c2cf2f31436d76385da6305))

## [4.1.0](https://github.com/Wondermarin/react-color-palette/compare/v4.0.0...v4.1.0) (2021-04-16)


### Features

* Now `Saturation` is a `div` ([5dd224a](https://github.com/Wondermarin/react-color-palette/commit/5dd224a78373b20c99a799e737824d7063b16991))

## [4.0.0](https://github.com/Wondermarin/react-color-palette/compare/v3.1.0...v4.0.0) (2021-04-03)


### Bug Fixes

* CSS Import ([#7](https://github.com/Wondermarin/react-color-palette/issues/7)) ([30ddf8e](https://github.com/Wondermarin/react-color-palette/commit/30ddf8e30ed4e84dacf2f1728eaae0fdafeecfd5))

## [3.1.0](https://github.com/Wondermarin/react-color-palette/compare/v3.0.0...v3.1.0) (2021-02-25)


### Features

* Hide color fields ([#4](https://github.com/Wondermarin/react-color-palette/issues/4)) ([3af0074](https://github.com/Wondermarin/react-color-palette/commit/3af0074d4fe3357d9ef6d3ceee03b42ba8e57a57))

### Bug Fixes

* Fixed the display of fields ([4ddc02f](https://github.com/Wondermarin/react-color-palette/commit/4ddc02ff2a30ae9689ff72effee7fd827de9db00))

## 3.0.0 (2021-01-08)


### Whats new?

* Rewritten and improved code. ([a58ea61](https://github.com/Wondermarin/react-color-palette/commit/a58ea610b2a9fdb23945f28a07deb3978bce57df))
