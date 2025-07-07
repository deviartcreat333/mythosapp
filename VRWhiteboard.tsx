import { Engine, Scene } from 'react-babylonjs';
import { Vector3 } from '@babylonjs/core';

export function VRWhiteboard() {
  return (
    <Engine antialias adaptToDeviceRatio canvasId="vr-canvas">
      <Scene>
        <arcRotateCamera name="camera" target={Vector3.Zero()} alpha={Math.PI/2} beta={Math.PI/4} radius={10} />
        <hemisphericLight name="light" intensity={0.7} direction={Vector3.Up()} />
        <sphere name="avatar" diameter={1} segments={16} position={new Vector3(0, 1, 0)} />
      </Scene>
    </Engine>
  );
}