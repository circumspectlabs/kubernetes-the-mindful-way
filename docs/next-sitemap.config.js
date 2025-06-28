/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://kubernetes.the-mindful-way.io',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/',
      },
    ],
  },
  output: 'export',
  outDir: "dist",
}
