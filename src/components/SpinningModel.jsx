import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function SpinningModel(props) {
  const ref = useRef();
  const { scene } = useGLTF('/model.glb'); // ✅ Put your GLB in public/

  // Rotate the model
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={ref} object={scene} {...props} />;
}
