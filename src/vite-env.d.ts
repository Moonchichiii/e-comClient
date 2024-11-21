/// <reference types="vite/client" />
/// <reference types="react" />
/// <reference types="react-dom" />

// Add type declarations for static assets if needed
declare module '*.svg' {
    import * as React from 'react'
    const SVGComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    export default SVGComponent
  }
  
  declare module '*.png'
  declare module '*.jpg'
  declare module '*.jpeg'
  declare module '*.gif'
  declare module '*.bmp'
  declare module '*.tiff'