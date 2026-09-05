import no from '@dictionaries/footer/no.json'
import en from '@dictionaries/footer/en.json'
import noLanding from '@dictionaries/landing/no.json'
import enLanding from '@dictionaries/landing/en.json'
import noPersonal from '@dictionaries/personal/no.json'
import enPersonal from '@dictionaries/personal/en.json'
import { cookies } from 'next/headers'
import SocialLinks from '@components/social/socialLinks'

export default async function Footer() {
    const lang = (await cookies()).get('lang')?.value || 'no'
    const text: FooterDictionary = lang === 'no' ? no : en
    const landing: LandingPageDictionary = lang === 'no' ? noLanding : enLanding
    const personal = lang === 'no' ? noPersonal : enPersonal
    const year = new Date().getFullYear()
    const version = process.env.version || '1.0.0'

    return (
        <div className='
          flex flex-col items-start gap-6 px-6 py-8
          sm:flex-row sm:items-center sm:justify-between sm:px-10
          lg:px-16
        '>
            <p className='tabular text-sm text-faint'>
                {text.copyright} © {year} {personal.name}
            </p>

            <div className='flex items-center gap-4'>
                <SocialLinks
                    links={personal.links}
                    labels={{ github: landing.ui.github, linkedIn: landing.ui.linkedIn }}
                />
                <span className='tabular font-mono text-xs text-faint'>v{version}</span>
            </div>
        </div>
    )
}
