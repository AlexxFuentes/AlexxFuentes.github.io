/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/dn0alzand/image/upload/v1708886246/img_public/**',
            },
        ],
    },
};

export default nextConfig;
