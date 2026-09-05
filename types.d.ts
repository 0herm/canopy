type Lang = 'en' | 'no'

type TimelineEntry = {
    title: string
    subtitle: string
    period: string
    points?: string[]
}

type LandingPageDictionary = {
    title: string
    description: string
    experience: string
    education: {
        title: string
        degrees: {
            [key: string]: TimelineEntry
        }
    }
    work: {
        title: string
        jobs: {
            [key: string]: TimelineEntry
        }
    }
    skills: {
        title: string
        categories: {
            [key: string]: {
                title: string
                items: string[]
            }
        }
    }
}

type ContactDictionary = {
    title: string
    name: string
    namePlaceholder: string
    email: string
    emailPlaceholder: string
    subject: string
    subjectPlaceholder: string
    message: string
    messagePlaceholder: string
    submit: string
}

type FooterDictionary = {
    copyright: string
}
