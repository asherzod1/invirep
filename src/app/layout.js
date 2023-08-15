import './globals.css'
import { Inter } from 'next/font/google'
import { DefaultSeo } from 'next-seo';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Invirep',
  description: 'Invirep remedy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <DefaultSeo
          title="Invirep"
          description="Invirep"
          openGraph={{
              type: 'website',
              url: 'https://invirep.vercel.app',
              site_name: 'Invirep',
          }}
      />
      {children}
      </body>
    </html>
  )
}
