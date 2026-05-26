import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

function Bird() {
  const { scene, animations } = useGLTF('/3d/bird.glb')

  const birdRef = useRef()

  const { actions } = useAnimations(animations, birdRef)

  // movement direction
  const direction = useRef(1)

  // movement settings
  const speed = 5
  const limit = 50

  useEffect(() => {
    actions?.['Take 001']?.play()
  }, [actions])

  useFrame((state, delta) => {

    const bird = birdRef.current
    const cameraX = state.camera.position.x

    bird.position.x += direction.current * speed * delta
    bird.position.z -= direction.current * 2 * delta
    if (bird.position.x > cameraX + limit) {
      direction.current = -1
    }

    if (bird.position.x < cameraX - limit) {
      direction.current = 1
    }


    const targetRotation = direction.current === 1 ? 0 : Math.PI
    bird.rotation.y = THREE.MathUtils.lerp(
      bird.rotation.y,
      targetRotation,
      0.01
    )
  })

  return (
    <group
      ref={birdRef}
      position={[-10, 11, -20]}
      scale={[0.015, 0.015, 0.015]}
    >
      <primitive object={scene} />
    </group>
  )
}

export default Bird