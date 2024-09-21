import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useRef } from 'react'

export default function Model() {
    const { scene } = useGLTF('/M.glb')
    const modelRef = useRef<THREE.Group>()

    useFrame((state, delta) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += delta * 0.5
        }
    })

    return <primitive object={scene} ref={modelRef} scale={[1, 1, 1]} />
}