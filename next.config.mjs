/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    //reactStrictMode: true,
    images: {
        loader: 'custom',
        loaderFile: './my-loader.ts',
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         hostname: 'res.cloudinary.com',
        //         port: '',
        //         pathname: '/dn0alzand/image/upload/v1708886246/**',
        //     },
        // ],
    },
};

export default nextConfig;
