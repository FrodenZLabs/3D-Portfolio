import * as THREE from "three";

const HeroLights = () => {
  return (
    <>
      {/* Lamp's light */}
      <spotLight
        position={[2, 5, 6]}
        angle={0.15}
        penumbra={0.2}
        intensity={100}
        color="white"
      />

      {/* Bluish overhead lamp */}
      <spotLight
        position={[4, 5, 4]}
        angle={0.3}
        penumbra={0.5}
        intensity={40}
        color="#fff"
      />

      {/* Puplish side fill */}
      <spotLight
        position={[-3, 5, 5]}
        angle={0.4}
        penumbra={1}
        intensity={60}
        color="#9d4edd"
      />

      {/* Area light for soft moody fill */}
      <primitive
        object={new THREE.RectAreaLight("#a259ff", 8, 3, 2)}
        position={[1, 3, 4]}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
        intensity={15}
      />

      {/* Subtle point light for atmosphere tone */}
      <pointLight position={[0, 1, 0]} intensity={10} color="#fff" />
      <pointLight position={[1, 2, -2]} intensity={10} color="#fff" />
    </>
  );
};

export default HeroLights;
