import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Fox({currentAnimation , ...props}) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/3d/fox.glb')
  const { actions } = useAnimations(animations, group)
  // console.log(actions)


  const activeAnim = useRef(null)

useEffect(() => {
    if (actions['idle']){
      actions['idle'].play()
    } 
    activeAnim.current = 'idle'
  }, [actions])

  useFrame(() => {
    const desired = currentAnimation.current
    if (desired !== activeAnim.current && actions[desired]) {
      // Stop current, play new
      if (activeAnim.current && actions[activeAnim.current]) {
        actions[activeAnim.current].fadeOut(0.3)
      }
      actions[desired].reset().fadeIn(0.3).play()
      activeAnim.current = desired
    }
  })                             

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_11.skeleton}
        />
      </group>
    </group>
  )
}

export default Fox
