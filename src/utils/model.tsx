import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react'

export default function Model() {
    const { scene } = useGLTF('/M.glb')
    const modelRef = useRef<THREE.Group>()
    const [isRotating, setIsRotating] = useState(false)
    const rotationTimeRef = useRef<number>(0)
    const startRotationRef = useRef<number>(0)
    const totalRotationRef = useRef<number>(0)
    const targetRotationRef = useRef<number>(0)

    useFrame((state, delta) => {
        if (modelRef.current) {
            if (isRotating) {
                const rotationSpeed = 1.3
                const rotationAmount = delta * rotationSpeed
                modelRef.current.rotation.y += rotationAmount
                rotationTimeRef.current += delta
                totalRotationRef.current += rotationAmount
                
                // Начинаем замедление за 1 секунду до остановки
                if (rotationTimeRef.current > 4) {
                    const fullRotations = Math.ceil(totalRotationRef.current / (2 * Math.PI))
                    targetRotationRef.current = startRotationRef.current + fullRotations * 2 * Math.PI
                }

                // Остановка вращения через 5 секунд
                if (rotationTimeRef.current > 5) {
                    setIsRotating(false)
                }
            } else if (modelRef.current.rotation.y !== targetRotationRef.current) {
                // Плавное замедление
                const remainingRotation = targetRotationRef.current - modelRef.current.rotation.y
                modelRef.current.rotation.y += remainingRotation * 0.1
                
                // Остановка, когда достигнуто целевое положение
                if (Math.abs(remainingRotation) < 0.001) {
                    modelRef.current.rotation.y = targetRotationRef.current
                }
            }
        }
    })

    const handleClick = () => {
        if (modelRef.current) {
            setIsRotating(true)
            rotationTimeRef.current = 0
            startRotationRef.current = modelRef.current.rotation.y
            totalRotationRef.current = 0
            targetRotationRef.current = modelRef.current.rotation.y
        }
    }

    useEffect(() => {
        if (!isRotating) {
            rotationTimeRef.current = 0
            totalRotationRef.current = 0
        }
    }, [isRotating])

    return <primitive 
        object={scene} 
        ref={modelRef} 
        scale={[1, 1, 1]} 
        onClick={handleClick}
    />
}