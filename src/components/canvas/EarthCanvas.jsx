import React, {Suspense} from 'react';
import CanvaLoader from "../loader.jsx";
import {Canvas} from "@react-three/fiber";
import { OrbitControls, useGLTF } from '@react-three/drei';


const Earth = () => {

    const arth = useGLTF('./planet/scene.gtlf');
    return(

        <primitive
        object={arth.scene}
        scale={2.5}
        position-y={0}
        rotation-y={0}/>
    )
}


const EarthCanvas = () => {
  return (
    <Canvas
    shadows
    dpr={[1, 2]}
    frameloop="demand"
    gl={{preserveDrawingBuffer:true}}
    camera={{
        fov:45,
        near:0.1,
        far:200,
        position:[-4, 3, 6]
    }}>

        <Suspense fallback={<CanvaLoader/>}>
            <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle= {Math.PI / 2}
            />

        </Suspense>
      <Earth />
    </Canvas>
  )
}

export default EarthCanvas
