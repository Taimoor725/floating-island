import { Html } from '@react-three/drei'
import React from 'react'

function Loader() {
  return (
    <Html center>
      <div className="flex items-center justify-center gap-4">
        <div className="relative">
          {/* Outer glow */}

          {/* Spinner */}
          <div className="w-16 h-16 rounded-full border-4 border-blue-500/20 border-t-black/60 animate-spin" />
        </div>
      </div>
    </Html>
  )
}

export default Loader