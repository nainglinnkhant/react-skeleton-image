import React, { useRef, useState } from 'react'

import FallbackIcon from '../FallbackIcon/FallbackIcon'
import './Image.css'

interface ImageProps extends React.HTMLProps<HTMLImageElement> {
  width?: number
  height?: number
  skeleton?: boolean
  skeletonClassName?: string
  inline?: boolean
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
    inline,
    ...imageProps
  } = props

  const imageClass = imageLoaded ? (inline ? 'inline-block' : 'block') : 'hidden'

  if (error)
    return (
      <div className='fallback' onClick={onClick} style={{ width, height }}>
        <FallbackIcon />
      </div>
    )

  return (
    <>
      <img
        ref={imageRef}
        {...imageProps}
        alt={imageProps.alt}
        onClick={onClick}
        onLoad={() => setImageLoaded(true)}
        onError={() => setError(true)}
        className={`image ${skeleton ? imageClass : ''} ${className}`}
        style={{ width, height, ...style }}
      />

      {skeleton && !imageLoaded && !error && (
        <div
          className={`skeleton ${skeletonClassName}`}
          onClick={onClick}
          style={{ width, height }}
        />
      )}
    </>
  )
}

export default Image
