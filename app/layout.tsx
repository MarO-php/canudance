import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = 'https://canudance.com';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'CANUDANCE — Underground Electronic Music / Marrakech', template: '%s | CANUDANCE' },
  description: 'CANUDANCE is an independent underground electronic music and rave platform based in Marrakech, Morocco. TRANSMISSION 001 — 26 September 2026.',
  applicationName: 'CANUDANCE',
  keywords: ['CANUDANCE','CANUDANCEEE','Marrakech rave','Marrakech techno','underground electronic music Morocco','techno Marrakech','CANUDANCE 001'],
  alternates: { canonical: '/' },
  openGraph: { type:'website', url:siteUrl, siteName:'CANUDANCE', title:'CANUDANCE — NO NOISE. JUST SIGNAL.', description:'Underground electronic music / Marrakech. TRANSMISSION 001 — 26.09.26.', images:[{url:'/og-image.png',width:1200,height:630,alt:'CANUDANCE'}], locale:'en_US' },
  twitter:{card:'summary_large_image',title:'CANUDANCE — NO NOISE. JUST SIGNAL.',description:'Underground electronic music / Marrakech.',images:['/og-image.png']},
  robots:{index:true,follow:true,googleBot:{index:true,follow:true,'max-image-preview':'large','max-snippet':-1,'max-video-preview':-1}},
  icons:{icon:[{url:'/canudance-logo.png',type:'image/png'}],apple:[{url:'/canudance-logo.png',type:'image/png'}]},
};
export const viewport: Viewport = { width:'device-width', initialScale:1, themeColor:'#000000', colorScheme:'dark' };

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><div className="grain"/><div className="scanlines"/>{children}</body></html>}
