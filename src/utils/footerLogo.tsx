'use client'
import dynamic from 'next/dynamic';

const DynamicModel = dynamic(() => import('./footerModel'), { ssr: false })


export const FooterLogo = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <DynamicModel />
        </>
    );
};