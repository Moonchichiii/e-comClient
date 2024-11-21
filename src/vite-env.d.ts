/// <reference types="vite/client" />
/// <reference types="react" />
/// <reference types="react-dom" />

// SVG as React components
declare module '*.svg' {
  import * as React from 'react'
  const SVGComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default SVGComponent
}

// Modern image formats
declare module '*.webp'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

// Optional: If you use animated images
declare module '*.gif'