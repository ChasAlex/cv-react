import Header from './Components/Header'
import { Canvas } from '@react-three/fiber'
import './App.scss'
import Intro from './Components/Intro'
import React, { Suspense, useEffect, useRef } from 'react'

import state from './Components/state'

const Lights = () => {

  return <>
    <ambientLight intensity={1} />
    <directionalLight position={[10, 10, 5]} intensity={2} />
    <directionalLight position={[0, 10, 0]} intensity={3} />
    <spotLight intensity={1} position={[10, 0, 0]} />


  </>
};


function App() {
  const domContent = useRef()

  // Onscroll function

  const scrollArea = useRef()
  const onScroll = (e) => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])




  return (
    <>
      <Header />

      <Canvas colormangement camera={{ position: [0, 0, 120], fov: 70 }}>
        <Lights />
        <Suspense fallback={null}>
          <Intro domContent={domContent} modelPath="/free_merc_hovercar/scene.gltf" position={[110, -10, 0]} contentPosition={[-50, -10, 0]} scale={50} BgColor={'#006d77'}>

            <h1 className="title">Alex</h1>
          </Intro>

          <Intro domContent={domContent} modelPath="/office_desk/scene.gltf" position={[110, -55, 0]} contentPosition={[-55, -245, 0]} scale={0.7} BgColor={'#83c5be'}>

            <h3 className="title">Cv</h3>

          </Intro>

        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ position: 'sticky', top: 0 }} ref={domContent}></div>
        <div style={{ height: `${state.sections * 100}vh` }}></div>
      </div>
    </>
  )
}

export default App
