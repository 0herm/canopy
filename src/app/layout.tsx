import type { Metadata, Viewport } from 'next'
import './globals.css'
import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed, IBM_Plex_Mono } from 'next/font/google'
import NavBar from '@components/nav/nav'
import Footer from '@components/footer/footer'
import { cookies } from 'next/headers'
import en from '@dictionaries/personal/en.json'
import enLanding from '@dictionaries/landing/en.json'
import noLanding from '@dictionaries/landing/no.json'

export const metadata: Metadata = {
    title: en.websiteTitle,
    description: en.websiteDescription,
}

export async function generateViewport(): Promise<Viewport> {
    const theme = (await cookies()).get('theme')?.value !== 'dark' ? 'light' : 'dark'
    return { themeColor: theme === 'light' ? '#dfe5ea' : '#0c1116' }
}

const plexSans = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
    variable: '--font-plex-sans',
    display: 'swap',
})

const plexCondensed = IBM_Plex_Sans_Condensed({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
    variable: '--font-plex-condensed',
    display: 'swap',
})

const plexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-plex-mono',
    display: 'swap',
})

export default async function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
    const Cookies = await cookies()
    const theme = Cookies.get('theme')?.value !== 'dark' ? 'light' : 'dark'
    const lang = (Cookies.get('lang')?.value || 'no') as Lang
    const text: LandingPageDictionary = lang === 'no' ? noLanding : enLanding

    return (
        <html lang={lang} className={theme} suppressHydrationWarning>
            <body className={`
              ${plexSans.variable}
              ${plexCondensed.variable}
              ${plexMono.variable}
              min-h-dvh font-sans antialiased
            `}>
                <a href='#main' className='
                  sr-only rounded-md bg-signal-fill px-4 py-2 font-medium text-on-fill
                  focus:not-sr-only focus:absolute focus:top-4 focus:left-4
                  focus:z-100
                '>{text.ui.skip}</a>

                <div className='mx-auto flex min-h-dvh w-full max-w-288 flex-col'>
                    <header className='
                      sticky top-0 z-50 border-b border-line bg-surface/90
                      backdrop-blur-md
                    '>
                        <NavBar />
                    </header>

                    <main id='main' className='flex-1'>
                        {children}
                    </main>

                    <footer className='border-t border-line'>
                        <Footer />
                    </footer>
                </div>
            </body>
        </html>
    )
}
