import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CANUDANCE — Underground Electronic Music / Marrakech',
    short_name: 'CANUDANCE',
    description: 'Independent underground electronic music and rave platform based in Marrakech, Morocco.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [{ src: '/canudance-logo.png', sizes: '1536x1536', type: 'image/png', purpose: 'any maskable' }],
  };
}
