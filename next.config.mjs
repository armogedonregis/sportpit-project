/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mamostong.kolotushins.tech',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https', 
                hostname: 'mamostong.com',
                port: '',
                pathname: '/**',
            },
        ],
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(glb|gltf)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/images',
                    outputPath: 'static/images/',
                },
            },
        })
        return config
    },
};

export default nextConfig;
