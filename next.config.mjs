/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages:[
    'rc-util',
    'rc-input',
    '@ant-design',
    'rc-pagination',
    'rc-picker',
    'antd'
  ]
};

export default nextConfig;
