const ContentSecurityPolicy = `
  default-src 'self' vitals.vercel-insights.com;
  script-src 'self'${process.env.NODE_ENV === 'development' ? " 'unsafe-eval'" : ''};
  child-src 'none';
  style-src 'self' 'unsafe-inline';
  font-src 'self';
  img-src 'self' data: https:;
`;

const securityHeaders = [{
  key: 'Content-Security-Policy',
  value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
}];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;

