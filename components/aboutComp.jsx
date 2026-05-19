"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { CameraControls, OrbitControls } from '@react-three/drei'

function AboutComp() {

  const {gl , viewport } = useThree();
  const objectref = useRef(null);
  const[isRotating,setRotating] =  useState(false);
  const LastX = useRef(0);
  const rotationSpeed = useRef(0);

  const mouseDown = (e) =>{
      e.preventDefault();
      e.stopPropagation()
      
      setRotating(true);
      LastX.current = e.clientX
      setRotating(true)
    //   console.log(LastX.current)

  }


  const mouseMove = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    if(isRotating){

        const delta = (e.clientX-LastX.current)/viewport.width;
        objectref.current.rotation.y += delta * 0.01 * Math.PI
        LastX.current = e.clientX
        rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  const mouseUp = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    setRotating(false);
  }

  useEffect(()=>{
      const canvas = gl.domElement;
      canvas.addEventListener('pointerdown' , mouseDown);
      canvas.addEventListener('pointerup' , mouseUp);
      canvas.addEventListener('pointermove' , mouseMove)


      return ()=>{
        canvas.removeEventListener('pointerdown' , mouseDown);
        canvas.removeEventListener('pointerup' , mouseUp);
        canvas.removeEventListener('pointermove', mouseMove);

      }
    })

    useFrame(()=>{

        if(!isRotating){
            rotationSpeed.current *= 0.98
        }
        if(Math.abs(rotationSpeed.current) < 0.001){
            rotationSpeed.current = 0;  
        }
        objectref.current.rotation.y += rotationSpeed.current;
        console.log(objectref.current.rotation)
    })


  return (
   
        <mesh ref={objectref}>
          <boxGeometry args={[3,3,3]}/>
          <meshNormalMaterial/>
        </mesh>

  )
}

export default AboutComp