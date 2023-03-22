# React Skeleton Image

A skeleton image component which handles an image's loading and error states.

> This is a simple React image component which abstracts away all the dirty work you have to do to handle loading and error states of images.

## Installation

```bash
npm i react-skeleton-image
```

or

```bash
yarn add react-skeleton-image
```

or

```bash
pnpm add react-skeleton-image
```

## Usage

After installing the package, import `Image` component:

```js
import { Image } from 'react-skeleton-image'
```

You need to specify both `width` and `height` for the proper image sizing.

```jsx
<Image src='https://rb.gy/fgpqyt' width={300} height={200} />
```

You can also specify the width and height in a container and wrap the Image component with it.

```jsx
<div style={{ width: 300, height: 200 }}>
  <Image src='https://rb.gy/fgpqyt' />
</div>
```

It is recommended to set css properties like `margin`, `padding` and `border-radius` in the container instead of the `Image` component.

```jsx
<div style={{ width: 300, height: 200, margin: 30 }}>
  <Image src='https://rb.gy/fgpqyt' />
</div>
```

## Props

| Name              | Type    | Description                                                         |
| ----------------- | ------- | ------------------------------------------------------------------- |
| width             | number  | The width of the image in `px`.                                     |
| height            | number  | The height of the image in `px`.                                    |
| skeleton          | boolean | Show skeleton loading. Default: `true`.                             |
| skeletonClassName | string  | The custom CSS class for skeleton loading.                          |
| inline            | boolean | Set Image's `display` property to `inline-block`. Default: `false`. |
