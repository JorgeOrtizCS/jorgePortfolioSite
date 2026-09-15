import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { MatrixRain } from '@/components/matrix-rain'
import { site } from '@/lib/content'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Cybersecurity & IT Systems`,
    template: `%s — ${site.name}`,
  },
  description:
    'Portfolio and field notes of Jorge Ortiz: SOC analyst in training, four years across enterprise IT, EDR tooling, and SIEM platforms.',
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
    title: `${site.name} — Cybersecurity & IT Systems`,
    description:
      'Portfolio and field notes of Jorge Ortiz: SOC analyst in training, four years across enterprise IT, EDR tooling, and SIEM platforms.',
    url: site.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Cybersecurity & IT Systems`,
    description: 'Portfolio and field notes. Security, systems, and detection work.',
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
  themeColor: '#030705',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a className="skip-link" href="#main">
          Skip to content
        </a>

        <MatrixRain />
        <div className="matrix-vignette" aria-hidden="true" />

        <div className="site-shell">
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </div>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
