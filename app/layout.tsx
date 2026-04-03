import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Montserrat } from 'next/font/google'

const _geist = Geist({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
})

export const metadata: Metadata = {
  title: 'EXORDIA | DERECHO Y LITIGIO HECHO DIFERENTE',
  description: 'Bufete de abogados con amplia experiencia en derecho corporativo, civil, penal y familiar. Consulta gratuita.',
  icons: {
    icon: [
      {
        url: '/Logo-Simple.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/Logo-Simple.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/Logo-Simple.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/Logo-Simple.svg.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#141414',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
