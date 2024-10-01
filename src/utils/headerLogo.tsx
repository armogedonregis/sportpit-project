'use client'

import dynamic from 'next/dynamic';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Center } from '@react-three/drei';

const DynamicModel = dynamic(() => import('./model'), { ssr: false })

export const HeaderLogo = ({ isScrolled, scrollY }: { isScrolled: boolean, scrollY: number }) => {
    const groupRef = useRef<THREE.Group>(null);
    const lastScrollY = useRef(scrollY);

    useEffect(() => {
        if (isScrolled && groupRef.current) {
            const rotationAmount = (scrollY - lastScrollY.current) * 0.005;
            groupRef.current.rotation.y += rotationAmount;
            lastScrollY.current = scrollY;
        }
    }, [isScrolled, scrollY]);

    return (
        <group ref={groupRef} position={[0, -1, 0]}>
            <ambientLight intensity={5} />
            <spotLight position={[0, 0, 0]} angle={0.15} penumbra={1} />
            <Center> 
                <DynamicModel />
            </Center>
        </group>
    );
};