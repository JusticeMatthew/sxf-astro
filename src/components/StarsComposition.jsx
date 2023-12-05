import { Vector3 } from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, CameraControls, Preload } from '@react-three/drei';

const Rig = () => {
  const { camera, pointer } = useThree();
  const vec = new Vector3();

  return useFrame(() => {
    camera.position.lerp(
      vec.set(pointer.x, pointer.y, camera.position.z),
      0.05,
    );
    camera.lookAt(0, 0, 4);
  });
};

const Composition = () => {
  return (
    <div className="fixed w-screen h-[110vh]">
      <Canvas camera={{ position: [0, 0, 0] }}>
        <CameraControls />
        <color attach="background" args={['#08090B']} />
        <Stars count={10000} radius={250} speed={0.1} />
        <Rig />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Composition;
