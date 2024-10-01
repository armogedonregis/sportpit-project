import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useRef } from 'react'

export default function Model() {
    const { scene } = useGLTF('/M.glb')
    const modelRef = useRef<THREE.Group>()

    return <primitive 
        object={scene} 
        ref={modelRef} 
        scale={[1, 1, 1]} 
    />
}