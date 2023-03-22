import React, { SVGProps } from 'react'

const FallbackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 15 15' fill='none' width='40' height='40' {...props}>
    <path
      d='M2.5 1h10A1.5 1.5 0 0 1 14 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5v-10A1.5 1.5 0 0 1 2.5 1Zm0 1a.5.5 0 0 0-.5.5v5.864l1.682-1.682a.45.45 0 0 1 .647.01l3.545 3.798 2.808-2.808a.45.45 0 0 1 .636 0L13 9.364V2.5a.5.5 0 0 0-.5-.5h-10ZM2 12.5V9.636l1.989-1.988 3.542 3.794L8.941 13H2.5a.5.5 0 0 1-.5-.5Zm10.5.5h-2.345l-1.672-1.847L11 8.636l2 2V12.5a.5.5 0 0 1-.5.5ZM6.65 5.5a.85.85 0 1 1 1.7 0 .85.85 0 0 1-1.7 0Zm.85-1.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z'
      fill='#868E96'
      fillRule='evenodd'
      clipRule='evenodd'
    />
  </svg>
)

export default FallbackIcon
