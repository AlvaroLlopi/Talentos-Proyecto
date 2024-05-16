/** @type {import('next').NextConfig} */
const nextConfig = {
  // agregar la configuracion de imagenes en next del siguiente dominio flagcdn.com
  images: {
    domains: ['flagpedia.net', 'flagcdn.com', 'upload.wikimedia.org', 'mainfacts.com'],
  },
};

export default nextConfig;
