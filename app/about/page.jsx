"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { CameraControls, OrbitControls } from '@react-three/drei'
import AboutComp from '@/components/aboutComp';

function About() {


  return (
    <div>

    <Canvas camera={{position:[0,1,5]}} className="w-screen min-h-screen flex justify-center items-center bg-black" >
        <ambientLight position={[0,5,5]} intensity={2}/>
        <OrbitControls/>
        <AboutComp/>
    </Canvas>
    </div>
  )
}

export default About