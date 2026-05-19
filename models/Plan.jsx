import { useGLTF } from '@react-three/drei'
import React from 'react'

function Plan({isRotating , ...props}) {
    const {scene , animations} = useGLTF("/3d/plane.glb")
  return (
    <mesh {...props}
    >
        <primitive object={scene}/>
    </mesh>
  )
}

export default Plan


// position={[0, 0 ,-5]} scale={[3.5,3.5,3.5]} rotation={[0,Math.PI/2 ,0]}