import { useGLTF , useAnimations } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'

function Plan({isRotating , ...props}) {
    const refScene = useRef();
    const {scene , animations} = useGLTF("/3d/plane.glb")
    const {actions} = useAnimations(animations,refScene);

    console.log(isRotating);
    useEffect(()=>{
      if(isRotating){
        actions["Take 001"].play();
      }
      else{
        actions["Take 001"].stop();
      }
    },[actions,isRotating])
    
  return (
    <mesh {...props} ref={refScene}
    >
        <primitive object={scene}/>
    </mesh>
  )
}

export default Plan


// position={[0, 0 ,-5]} scale={[3.5,3.5,3.5]} rotation={[0,Math.PI/2 ,0]}