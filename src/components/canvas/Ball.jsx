import React, {Suspense} from 'react';
import {Preload, useTexture, OrbitControls, Decal, Float } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import CanvaLoader from "../loader.jsx";

const Ball = (props) => {
    const [decal] = useTexture([props.imageUrl])
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({icon}) => {
    return(
        <Canvas
        frameloop='demand'
        gl={{ preserveDrawingBuffer: true }}>
             <Suspense fallback={<CanvaLoader />}>
             <OrbitControls enableZoom={false} />
                    <Ball imageUrl={icon}/>
             </Suspense>

             <Preload all/>
        </Canvas>

    )
}

export default BallCanvas
