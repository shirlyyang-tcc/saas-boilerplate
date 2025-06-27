/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // 为了支持静态导出的动态路由，需要确保所有页面都被生成
  generateBuildId: async () => {
    return 'static-build-id'
  },
}

module.exports = nextConfig 