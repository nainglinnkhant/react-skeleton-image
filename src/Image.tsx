import React, { useRef, useState } from 'react'

import FallbackIcon from './FallbackIcon'

interface ImageProps extends React.HTMLProps<HTMLImageElement> {
  width?: number
  height?: number
  skeleton?: boolean
  skeletonClassName?: string
}

const Image = (props: ImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [error, setError] = useState(false)

  const imageRef = useRef<HTMLImageElement>(null)

  const {
    skeleton = true,
    skeletonClassName = '',
    className = '',
    width = '',
    height = '',
    style = {},
    onClick,
    ...imageProps
  } = props

  const imageClass = imageLoaded ? 'block' : 'hidden'

  if (error)
    return (
      <div
        className='flex justify-center items-center w-full h-full bg-fallback cursor-pointer'
        onClick={onClick}
        style={{ width, height }}
      >
        <FallbackIcon />
      </div>
    )

  return (
    <>
      <img
        ref={imageRef}
        {...imageProps}
        alt={imageProps.alt}
        onLoad={() => setImageLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover object-center ${
          skeleton ? imageClass : ''
        } ${className}`}
        style={{ width, height, ...style }}
      />

      {skeleton && !imageLoaded && !error && (
        <div
          className={`bg-skeleton w-full h-full rounded-inherit cursor-pointer animate-skeleton ${skeletonClassName}`}
          onClick={onClick}
          style={{ width, height }}
        />
      )}
    </>
  )
}

export default Image
