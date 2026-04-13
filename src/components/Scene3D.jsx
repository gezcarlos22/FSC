import React, { useRef, useEffect } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Suspense } from 'react'
import Model from '../../public/Scene.jsx'
import { Vector3 } from 'three'

function SceneController({ scrollProgress = 0 }) {
  const controlsRef = useRef()
  const modelRef = useRef()
  const { camera } = useThree()
  const originalPos = useRef(new Vector3(70, 20, 80))
  const target = useRef(new Vector3(0, 0, 0))

  useEffect(() => {
    camera.position.copy(originalPos.current)
    camera.lookAt(target.current)
  }, [camera])

  useFrame(() => {
    const targetCamera = new Vector3(
      70 + scrollProgress * 30,
      20 + scrollProgress * 5,
      80 - scrollProgress * 25
    )

    camera.position.lerp(targetCamera, 0.05)
    camera.lookAt(target.current)

    if (controlsRef.current) {
      controlsRef.current.target.lerp(target.current, 0.08)
      controlsRef.current.update()
    }

    if (modelRef.current) {
      const baseRotation = 0.5
      modelRef.current.rotation.y = baseRotation + scrollProgress * Math.PI * 0.7
      modelRef.current.position.x = scrollProgress * 20
      modelRef.current.position.y = -20 + scrollProgress * 12
      modelRef.current.position.z = scrollProgress * -15
    }
  })

  return (
    <>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <ambientLight intensity={1} />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <directionalLight position={[12, 90, 2]} intensity={100} />
      <OrbitControls ref={controlsRef} enableDamping={true} enableZoom={false} enablePan={false} enableRotate={false} />
      <Suspense fallback={null}>
        <Model
          ref={modelRef}
          scale={80}
          position={[0, -20, 0]}
        />
      </Suspense>
    </>
  )
}

const Scene3D = ({ scrollProgress = 0 }) => {
  return (
    <Canvas className="w-[600px] h-[800px]" camera={{ position: [20, 20, 100] }}>
      <SceneController scrollProgress={scrollProgress} />
    </Canvas>
  )
}
export default Scene3D
