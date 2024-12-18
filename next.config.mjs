/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mamostong.kolotushins.tech",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mamostong.com",
        port: "",
        pathname: "/**",
      },
    ],
    // Использовать Sharp вместо Squoosh
    loader: "default",
    // Форматы вывода
    formats: ["image/avif", "image/webp"],
    // Размеры устройств для респонсивных изображений
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Размеры изображений
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/images",
          outputPath: "static/images/",
        },
      },
    });
    return config;
  },
};

export default nextConfig;
