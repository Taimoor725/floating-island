import { useGLTF } from '@react-three/drei'
import React from 'react'

function Bird() {

    const {scene , animations} = useGLTF("/3d/bird.glb")    
  return (
    <mesh position={[-10 ,5,-20]} scale={[0.02,0.02,0.02]}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Bird