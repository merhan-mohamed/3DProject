import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const CanvaLoader = () => {
    const {progress} = useProgress();
    return(
    <Html>
        <span className='canvas-loader'></span>
        <p
          style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}>{progress.toFixed(2)}%</p>
    </Html>
    )

}

export default CanvaLoader
