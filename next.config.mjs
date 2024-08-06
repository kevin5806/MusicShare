/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.scdn.co",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "platform-lookaside.fbsbx.com",
                port: "",
                pathname: "/**",
            },
        ],

        unoptimized: true,
    },
};

export default nextConfig;
