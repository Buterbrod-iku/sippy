/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    output: 'export',
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
        formats: ['image/avif', 'image/webp'],
        domains: ['static.tildacdn.com', 'm-files.cdnvideo.ru', "localhost", 'xn--90acjaljepkhcinjb.xn--p1ai', 'en22.ru'],
    }
};

export default nextConfig;
