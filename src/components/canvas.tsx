"use client";

import { type ReactNode, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  MeshTransmissionMaterial,
  ContactShadows,
  Environment,
} from "@react-three/drei";
import { easing } from "maath";
import { useStore } from "./store";

const modelPath = "/treadmill_machine_low.glb";

export const CanvasPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 40 }}
      eventPrefix="client"
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      eventSource={ref.current!}
    >
      <ambientLight intensity={0.7} />
      <spotLight
        castShadow
        angle={0.1}
        intensity={0.5}
        penumbra={1}
        position={[10, 15, -5]}
      />
      <Environment background blur={1} preset="city" />
      <ContactShadows
        blur={2}
        far={0.8}
        opacity={1}
        position={[0, -0.8, 0]}
        resolution={512}
        scale={10}
      />
      <Selector>
        <Model rotation={[0.3, Math.PI / 1.6, 0]} />
      </Selector>
    </Canvas>
  );
};

function Selector({ children }: { children: ReactNode }) {
  const ref = useRef<any>(null);
  const store = useStore();

  useFrame(({ viewport, camera, pointer }, delta) => {
    if (!ref.current) return;

    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, 3]);
    easing.damp3(
      ref.current.position,
      [(pointer.x * width) / 2, (pointer.y * height) / 2, 3],
      store.open ? 0 : 0.1,
      delta
    );
    easing.damp3(
      ref.current.scale,
      store.open ? 4 : 0.01,
      store.open ? 0.5 : 0.2,
      delta
    );
    easing.dampC(
      ref.current.material.color,
      store.open ? "#f0f0f0" : "#ccc",
      0.1,
      delta
    );
  });

  return (
    <>
      <mesh ref={ref}>
        <circleGeometry args={[1, 64, 64]} />
        <MeshTransmissionMaterial
          anisotropy={1}
          distortionScale={0}
          resolution={512}
          roughness={0.3}
          samples={1}
          temporalDistortion={0}
          thickness={0.1}
          toneMapped={true}
        />
      </mesh>
      <group
        onPointerDown={() => store.setOpen(true)}
        onPointerOut={() => store.setOpen(false)}
        onPointerOver={() => store.setOpen(true)}
        onPointerUp={() => store.setOpen(false)}
      >
        {children}
      </group>
    </>
  );
}

function Model(props: any) {
  const ref = useRef<any>(null);
  const model = useGLTF(modelPath);

  useFrame((state) => {
    if (!ref.current) return;

    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(
      Math.PI / 20 + Math.sin(t / 2) / 10,
      Math.PI / 2 + Math.sin(t / 2) / 10,
      Math.PI / 10 + Math.sin(t / 2) / 10
    );
    ref.current.position.y = (0.5 + Math.cos(t / 2)) / 7;
  });

  return (
    <group ref={ref}>
      <mesh castShadow receiveShadow scale={[0.5, 0.5, 0.5]} {...props}>
        <primitive object={model.scene} />
      </mesh>
    </group>
  );
}

useGLTF.preload(modelPath);
