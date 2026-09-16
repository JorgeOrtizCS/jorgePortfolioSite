/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the project root. Without this Turbopack walks up looking for the
  // nearest lockfile and can land on one outside the repo.
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
