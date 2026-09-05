import { cookies } from 'next/headers'
import no from '@dictionaries/landing/no.json'
import en from '@dictionaries/landing/en.json'
import noContact from '@dictionaries/contact/no.json'
import enContact from '@dictionaries/contact/en.json'
import noPersonal from '@dictionaries/personal/no.json'
import enPersonal from '@dictionaries/personal/en.json'
import Hero from '@components/section/hero'
import Section from '@components/section/section'
import Skills from '@components/section/skills'
import Timeline from '@components/timeline/timeline'
import Contact from '@components/contact/contact'

export default async function Home() {
    const lang = (await cookies()).get('lang')?.value || 'no'
    const text: LandingPageDictionary = lang === 'no' ? no : en
    const contact: ContactDictionary = lang === 'no' ? noContact : enContact
    const personal = lang === 'no' ? noPersonal : enPersonal

    return (
        <>
            <Hero text={text} personal={personal} />

            <Section id='work' title={text.work.title}>
                <Timeline items={text.work.jobs} />
            </Section>

            <Section id='education' title={text.education.title}>
                <Timeline items={text.education.degrees} />
            </Section>

            <Section id='skills' title={text.skills.title}>
                <Skills text={text.skills} />
            </Section>

            <Section id='contact' title={contact.title}>
                <Contact text={contact} mail={personal.mail} />
            </Section>
        </>
    )
}
