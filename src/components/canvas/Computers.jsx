import React, { Suspense , useEffect, useState} from 'react';
import {OrbitControls, Preload, useGLTF} from "@react-three/drei" ;
import { Canvas } from '@react-three/fiber';
import CanvaLoader from '../loader';

const Computers = ({ IsMobile }) => {
  const computer = useGLTF('./desktop-pc/scene.gltf');

  return (
      <mesh>
        <hemisphereLight intensity={1} groundColor="black"/>
        <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
       />
       <pointLight intensity={1}/>
        <primitive
        object={computer.scene}
        scale={ IsMobile ? 0.7 : 0.75 }
        position={ IsMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>  
  )
}

const ComputerCanva = () => {
  const [IsMobile, setIsMobile] = useState(false);
  useEffect(() => {
  const MediaQuery = window.matchMedia("(max-width:500px)");
  setIsMobile(MediaQuery.matches);
  const handleMediaQueryChange = (event) => {
    setIsMobile(event.matches);

  };

  MediaQuery.addEventListener("change", handleMediaQueryChange);
  return () => {
    MediaQuery.removeEventListener("change", handleMediaQueryChange);
  };

}, []);

  return(
    <Canvas 
    frameloop='demand'
    shadows
    dpr={[1, 2]}
    camera={{ position:[20, 3, 5], fov:25 }}
    gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvaLoader />}>
      <OrbitControls
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      />
      <Computers IsMobile={IsMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanva
