import Loader from '@/components/Loader'
import Island from '../../models/Island'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import { Sky } from '@/models/Sky'
import Bird from '../../models/Bird'
import Plan from '../../models/Plan'
import HomeInfo from '@/components/HomeInfo'

function Home() {

  const [isRotating, setRotating] = useState(false)
  const [currenStage, setCurrentStage] = useState(1)

  const adjustScreenPos = () => {
    let screenPosition = [0, -6.5, -43]
    let screenSize
    if (window.innerWidth <= 768) {
      screenSize = [0.9, 0.9, 0.9]
    } else {
      screenSize = [1, 1, 1]
    }
    return [screenPosition, screenSize]
  }

  const adjustPlan = () => {
    let screenPosition
    let screenSize
    if (window.innerWidth <= 768) {
      screenSize = [1.5, 1.5, 1.5]
      screenPosition = [0, -2, 0]
    } else {
      screenSize = [3.5, 3.5, 3.5]
      screenPosition = [0, -2, -4]
    }
    return [screenPosition, screenSize]
  }

  const [screenPosition, screenSize] = adjustScreenPos()
  const [planPosition, planSize] = adjustPlan()

  return (
    <section className="w-full h-screen relative overflow-hidden">

      {/* ── INFO OVERLAY ── */}
      {/* 
        Mobile  : full-width strip pinned to bottom, above the canvas
        Desktop : left-side card, vertically centered, offset from navbar
      */}
      <div className="
        absolute z-10 pointer-events-none
        bottom-6 left-0 right-0
        flex justify-center px-4
        sm:bottom-auto sm:top-[40%] sm:-translate-y-1/2
        sm:left-4 sm:right-auto sm:px-0
        sm:w-[380px]
        lg:left-[6.5rem] lg:top-48 lg:w-[420px]
      ">
        {/* re-enable pointer events only on the card itself */}
        <div className="pointer-events-auto w-full">
          {currenStage && <HomeInfo currenStage={currenStage} />}
        </div>
      </div>

      {/* ── THREE.JS CANVAS ── */}
      <Canvas
        className={`w-full h-full ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

          <Plan
            rotation={[0, 20, 0]}
            scale={planSize}
            position={planPosition}
            isRotating={isRotating}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={screenPosition}
            scale={screenSize}
            rotation={[0.1, 4.7, 0]}
            isRotating={isRotating}
            setRotating={setRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>

    </section>
  )
}

export default Home