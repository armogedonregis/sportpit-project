'use client'
import dynamic from 'next/dynamic';

const DynamicModel = dynamic(() => import('./model'), { ssr: false })


export const HeaderLogo = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <DynamicModel />
        </>
    );
};