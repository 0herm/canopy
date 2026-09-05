export default function Skills({ text }: { text: LandingPageDictionary['skills'] }) {
    return (
        <div className='flex flex-col'>
            {Object.entries(text.categories).map(([key, category]) => (
                <section key={key} className='
                  grid gap-x-8 gap-y-3 border-t border-line py-6
                  first:border-t-0 first:pt-0
                  last:pb-0
                  sm:grid-cols-[10.5rem_minmax(0,1fr)]
                '>
                    <h3 className='
                      self-start pt-0.5 font-display text-base font-semibold
                      tracking-tight text-fg
                    '>{category.title}</h3>

                    <ul className='flex flex-wrap gap-1.5'>
                        {category.items.map((item) => (
                            <li
                                key={item}
                                className='
                                  rounded-[3px] border border-line px-2 py-0.5
                                  font-mono text-xs leading-5 text-muted
                                '
                            >{item}</li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    )
}
