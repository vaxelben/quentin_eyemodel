import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export const ModelViewer = () => {
  // const modelPath = 'models/quentin nebulae test 2.glb'
  const modelPath = 'models/eye test sculpt on y va2 uv foireux decimated bordfelll.glb'
  const { scene, nodes, materials, animations } = useGLTF(modelPath)
  const modelRef = useRef<THREE.Group>(null)
  
  // Analyser le contenu du modèle une fois chargé
  useEffect(() => {
    if (modelRef.current) {
      const box = new THREE.Box3().setFromObject(modelRef.current)
      
      // Affichage des informations dans la console
      console.log('Modèle chargé:', modelPath)
      console.log('Dimensions:', {
        width: box.max.x - box.min.x,
        height: box.max.y - box.min.y,
        depth: box.max.z - box.min.z
      })
      console.log('Nodes:', nodes)
      console.log('Materials:', materials)
      console.log('Animations:', animations)
      
      // Lister tous les objets dans la scène
      console.log('Structure du modèle:')
      modelRef.current.traverse((object) => {
        console.log(`- ${object.type}: ${object.name}`)
      })
    }
  }, [modelRef, nodes, materials, animations])
  
  return (
    <group ref={modelRef}>
      <primitive object={scene} scale={1} position={[0, 0, 0]} />
    </group>
  )
}

// Précharger le modèle pour de meilleures performances
useGLTF.preload('models/eye test sculpt on y va2 uv foireux decimated bordfelll.glb') 