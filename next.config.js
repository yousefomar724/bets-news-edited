const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  images: {
    domains: [
      "localhost",
      "images.unsplash.com",
      "static.gotsby.org",
      "static.ghost.org",
      "gatsby.ghost.io",
      "ghost.org",
      "repository-images.githubusercontent.com",
      "www.gravatar.com",
      "github.githubassets.com",
      "bets.ghost.io",
      "ghost.bets.com.br",
      "bets.com.br",
      "www.bets.com.br",
      "app.bets.com.br",
      "bets-blog-bets.vercel.app",
      "nextjs-blog.bets.workers.dev",
      "lh1.googleusercontent.com",
      "lh2.googleusercontent.com",
      "lh3.googleusercontent.com",
      "lh4.googleusercontent.com",
      "lh5.googleusercontent.com",
      "lh6.googleusercontent.com",
      ...(process.env.IMAGE_DOMAINS || "").split(","),
    ],
    
    deviceSize: [320, 400, 600, 768, 992, 1140, 1600, 2000, 2400],
    imageSizes: [300, 300, 240, 220, 320, 400, 350, 450, 850],
    formats: ['image/avif', 'image/webp']
   
  },
  
  basePath: '/artigos',
  assetPrefix: '/artigos',
})
