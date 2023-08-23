import './globals.css'
import {Inter} from 'next/font/google'
import Head from "next/head";
import {NextSeo} from "next-seo";
// import { DefaultSeo } from 'next-seo';

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'ИНВИРЕП',
    description: 'Invirep - ИНВИРЕП',
    url: 'https://invirep.vercel.app',
    image: 'https://invirep.vercel.app/INVIREP-logo.png',
    content: 'ИНВИРЕП',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <meta name="google-site-verification" content="EeNrX_Vhd4bMEJnslGv6D89shImpFKT1eTXHeeqUF8I"/>
            <link rel="canonical" href="https://www.invirep.uz/" />
            <meta property="og:url" content="https://invirep.uz/" />
            <meta property="og:title" content="ИНВИРЕП" />
            <meta property="og:description" content="ИНВИРЕП" />
            <meta property="og:image" content="https://invirep.vercel.app/INVIREP-logo.png" />
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="600" />
            <meta property="og:image" content="https://invirep.vercel.app/Invirep.png" />
            <meta property="og:image:width" content="900" />
            <meta property="og:image:height" content="800" />
            <meta property="og:image" content="https://invirep.vercel.app/Invirep.png" />
            <meta property="og:image" content="https://invirep.vercel.app/Invirep.png" />
            <meta property="og:site_name" content="ИНВИРЕП" />
            {/* Telegram */}
            <meta property="telegram:channel" content="@SpringPharmaceutic" />
            {/*Instagram*/}
            <meta property="instagram:account" content="@springpharmaceutic/" />
            {/*Facebook*/}
            <meta property="article:publisher" content="https://www.facebook.com/spring.pharm.3/" />
            {/*Email*/}
            <meta property="email" content="spring_pharmaceutic@gmail.com" />
        </head>
        <body className={inter.className}>
        {/*<DefaultSeo*/}
        {/*    title="Invirep"*/}
        {/*    description="Invirep"*/}
        {/*    openGraph={{*/}
        {/*        type: 'website',*/}
        {/*        url: 'https://invirep.vercel.app',*/}
        {/*        site_name: 'Invirep',*/}
        {/*    }}*/}
        {/*/>*/}
        {children}
        </body>
        </html>
)
}
