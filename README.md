# React Skeleton Image

A skeleton image component which handles an image's loading and error state.

> This is a simple React image component which abstracts away all the dirty work you have to do to handle loading and error state of images.

<br/>

## Installation

<br/>

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

<br/>

## Usage

<br/>

After installing the package, import `Image` component:

```js
import { Image } from 'react-skeleton-image'
```

Import the CSS file (This step will not be needed in the next release):

```js
import 'react-skeleton-image/dist/index.css'
```

<br/>

You need to specify both `width` and `height` for the proper image sizing.

```jsx
<Image
  src='https://rb.gy/fgpqyt'
  width={300}
  height={200}
/>
```

<br/>

You can also specify the width and height in a container and wrap the Image component with it.

```jsx
<div style={{ width: 300, height: 200 }}>
  <Image
    src='https://rb.gy/fgpqyt'
    width={300}
    height={200}
  />
</div>
```

<br/>

It is recommended to set css properties like `margin` and `padding` in the container instead of the Image component. 

```jsx
<div style={{ width: 300, height: 200, margin: 30 }}>
  <Image
    src='https://rb.gy/fgpqyt'
    width={300}
    height={200}
  />
</div>
```

<br/>

## Props

<br/>

| Name                | Type            | Description                                          |
| ------------------- | --------------- | ---------------------------------------------------- |
| width               | number          | The width of the image in `px`.                      |
| height              | number          | The height of the image in `px`.                     |
| skeleton            | boolean         | Show skeleton loading. Default: `true`               |
| skeletonClassName   | string          | The custom CSS class for skeleton loading.           |
