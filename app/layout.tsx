import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { MatrixRain } from '@/components/matrix-rain'
import { site } from '@/lib/content'
import './globals.css'

const description =
  'Jorge Ortiz is a computer science student and IT professional in South Florida working toward a SOC analyst role, with four years across enterprise IT, EDR tooling, and SIEM platforms.'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Cybersecurity & IT`,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    'Jorge Ortiz',
    'SOC analyst',
    'cybersecurity',
    'threat detection',
    'incident response',
    'Florida Atlantic University',
  ],
  authors: [{ name: site.name, url: site.linkedin }],
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} — Cybersecurity & IT`,
    description,
    url: site.url,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: `${site.name}. Blue team by trade, red team by curiosity.`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Cybersecurity & IT`,
    description,
    images: ['/og.png'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080c0a',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>

        <MatrixRain />
        <div className="bg-wash" aria-hidden="true" />

        <div className="site">
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </div>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
