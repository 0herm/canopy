import SocialLinks from '@components/social/socialLinks'

type HeroProps = {
    text: LandingPageDictionary
    personal: {
        name: string
        links: { github: string, linkedIn: string }
    }
}

export default function Hero({ text, personal }: HeroProps) {
    return (
        <div className='
          hero-reveal px-6 pt-16 pb-16
          sm:px-10 sm:pt-24 sm:pb-24
          lg:px-16
        '>
            <p className='font-mono text-sm text-signal'>{text.title}</p>

            <h1 className='
              mt-5 font-display text-6xl leading-[0.92] font-semibold
              tracking-[-0.02em] text-balance
              sm:text-8xl
              lg:text-9xl lg:tracking-[-0.03em]
            '>{personal.name}</h1>

            <div className='mt-10 h-px w-full bg-line' aria-hidden='true' />

            <p className='
              mt-8 max-w-[60ch] text-lg leading-[1.75] text-muted
              lg:max-w-none lg:columns-2 lg:gap-16 lg:text-[1.0625rem]
              lg:leading-[1.8]
            '>{text.description}</p>

            <div className='mt-10'>
                <SocialLinks
                    links={personal.links}
                    labels={{ github: text.ui.github, linkedIn: text.ui.linkedIn }}
                    showLabels
                />
            </div>
        </div>
    )
}
