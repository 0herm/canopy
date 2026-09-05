import LangToggle from '@components/langtoggle/langToggle'
import ThemeToggle from '@components/themetoggle/themeToggle'
import Link from 'next/link'
import { cookies } from 'next/headers'
import no from '@dictionaries/landing/no.json'
import en from '@dictionaries/landing/en.json'
import noPersonal from '@dictionaries/personal/no.json'
import enPersonal from '@dictionaries/personal/en.json'

export default async function NavBar() {
    const store = await cookies()
    const lang = (store.get('lang')?.value || 'no') as Lang
    const theme = store.get('theme')?.value !== 'dark' ? 'light' : 'dark'
    const text: LandingPageDictionary = lang === 'no' ? no : en
    const personal = lang === 'no' ? noPersonal : enPersonal

    const sections = [
        { href: '#work', label: text.work.title },
        { href: '#education', label: text.education.title },
        { href: '#skills', label: text.skills.title },
        { href: '#contact', label: text.ui.contact },
    ]

    return (
        <div className='
          flex items-center justify-between gap-6 px-6 py-4
          sm:px-10
          lg:px-16
        '>
            <Link href='/' className='rounded-sm'>
                <span className='
                  font-display text-lg font-semibold tracking-tight
                '>{personal.name}</span>
            </Link>

            <div className='flex items-center gap-1'>
                <ul className='
                  hidden items-center
                  md:flex
                '>
                    {sections.map((section) => (
                        <li key={section.href}>
                            <Link
                                href={section.href}
                                className='
                                  block rounded-md px-3 py-1.5 text-sm
                                  text-muted transition-colors duration-150
                                  hover:text-fg
                                '
                            >{section.label}</Link>
                        </li>
                    ))}
                </ul>

                <div className='
                  ml-2 flex items-center gap-1 border-l border-line pl-3
                '>
                    <ThemeToggle initial={theme} label={text.ui.toggleTheme} />
                    <LangToggle initial={lang} label={text.ui.toggleLanguage} />
                </div>
            </div>
        </div>
    )
}
