import Loader from '@/components/Loader'
import Island from '../../models/Island'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Sky } from '@/models/Sky'
import Bird from '../../models/Bird'
import Plan from '../../models/Plan'
import HomeInfo from '@/components/HomeInfo'

function Home() {

  const [isRotating , setRotating ] = useState(false);
  const [currenStage , setCurrentStage] = useState(1);

  const adjustScreenPos = ()=>{
    let screenPosition=[0,-6.5,-43];
    let screenSize;
    if(window.innerWidth  <= 786 ){
      screenSize =[0.9,0.9,0.9]
    }
    else {
      screenSize=[1,1,1]
    }
    return[screenPosition,screenSize]
  }



  const adjustPlan = ()=>{
    let screenPosition;
    let screenSize;
    if(window.innerWidth  <= 786 ){
      screenSize =[1.5,1.5,1.5]
      screenPosition=[0,-2,0]
    }
    else {
      screenSize=[3.5,3.5,3.5]
      screenPosition=[0,-2,-4]
    }
    return[screenPosition,screenSize]
  }

  const [screenPosition,screenSize]=adjustScreenPos();
  const [planPosition , planSize ] = adjustPlan();
  return (
    <section className='w-full h-screen relative'>


      <div className='absolute top-10 flex items-center justify-center left-1/2 -translate-x-1/2 z-50'>
        {currenStage && <HomeInfo currenStage={currenStage}/>}
      </div>
        <Canvas className={`w-full h-screen _bg-black ${isRotating ? "cursor-grabbing":"cursor-grab"} z-0`}
        camera={{near:0.1,far:1000}}>
          <Suspense fallback={<Loader/>}>
              <directionalLight position={[1,1,1]} intensity={2}/>
              <ambientLight intensity={0.5}/>
              <hemisphereLight skyColor="#b1e1ff"  groundColor="#000000" intensity={1}/>
              {/* <OrbitControls/> */}
              <Plan rotation={[0,20,0]} scale={planSize} position={planPosition} isRotating={isRotating}/>
              <Bird/>
              <Sky isRotating={isRotating}/>
              <Island 
                position={screenPosition} scale={screenSize} rotation={[0.1,4.7,0]}
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