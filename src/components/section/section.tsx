type SectionProps = {
    id: string
    title: string
    children: React.ReactNode
}

export default function Section({ id, title, children }: SectionProps) {
    return (
        <section id={id} className='
          border-t border-line px-6 py-14
          sm:px-10 sm:py-20
          lg:px-16
        '>
            <div className='
              grid gap-8
              md:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] md:gap-12
              lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]
            '>
                <div className='
                  md:sticky md:top-28 md:self-start
                '>
                    <h2 className='
                      font-display text-2xl font-semibold tracking-tight
                      sm:text-3xl
                    '>{title}</h2>
                    <div className='mt-4 h-px w-12 bg-signal' aria-hidden='true' />
                </div>

                <div className='min-w-0'>{children}</div>
            </div>
        </section>
    )
}
