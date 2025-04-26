import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ModelViewer } from './components/ModelViewer'

const Experience = () => {
  return (
    <Canvas style={{ width: '100%', height: '100vh', background: 'black' }}>
      <PerspectiveCamera makeDefault position={[3, 0, 0]} />
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <ModelViewer />
    </Canvas>
  )
}

export default Experience 