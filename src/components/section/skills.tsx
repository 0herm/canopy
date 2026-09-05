import { Terminal } from 'lucide-react'

export default function Skills({ text }: { text: LandingPageDictionary['skills'] }) {
    return (
        <div>
            <h2 className='
              mb-12 flex items-center gap-3 text-xl font-bold
              sm:text-3xl
            '>
                <span className='
                  rounded-lg bg-linear-to-br from-amber-500/20 to-rose-500/20
                  p-2
                '>
                    <Terminal className='size-6 text-amber-400' />
                </span>
                {text.title}
            </h2>
            <div className='
              grid gap-6
              md:grid-cols-2
            '>
                {Object.entries(text.categories).map(([key, category]) => (
                    <div
                        key={key}
                        className='
                          rounded-xl border border-extralight bg-dark p-6
                          transition-colors duration-0
                          hover:border-amber-500 hover:bg-darker
                        '
                    >
                        <h3 className='
                          mb-4 flex items-center gap-2 text-base font-semibold
                          sm:text-lg
                        '>
                            <span className='font-mono text-amber-400'>&gt;</span>
                            {category.title}
                        </h3>
                        <ul className='flex flex-row flex-wrap gap-2'>
                            {category.items.map((item) => (
                                <li
                                    key={item}
                                    className='
                                      rounded-md border border-extralight
                                      bg-darker px-2 py-1 font-mono text-xs
                                      text-almostbright
                                      sm:text-sm
                                    '
                                >{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}
