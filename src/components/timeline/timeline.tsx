import { isOngoing } from '@utils/period'

type TimelineProps = {
    items: { [key: string]: TimelineEntry }
}

export default function Timeline({ items }: TimelineProps) {
    return (
        <ol className='flex flex-col'>
            {Object.entries(items).map(([key, item]) => {
                const ongoing = isOngoing(item.period)

                return (
                    <li key={key} className='
                      grid gap-x-8 gap-y-2 border-t border-line py-7
                      first:border-t-0 first:pt-0
                      last:pb-0
                      sm:grid-cols-[10.5rem_minmax(0,1fr)]
                    '>
                        <p className={`
                          tabular flex items-center gap-2 self-start pt-1
                          font-mono text-xs leading-5
                          ${ongoing ? 'text-signal' : 'text-faint'}
                        `}>
                            {ongoing && (
                                <span className='
                                  size-1.5 shrink-0 rounded-full bg-signal
                                ' aria-hidden='true' />
                            )}
                            {item.period}
                        </p>

                        <div>
                            <h3 className='
                              font-display text-lg font-semibold
                              tracking-tight
                              sm:text-xl
                            '>{item.title}</h3>

                            <p className='mt-1 text-sm text-muted'>{item.subtitle}</p>

                            {item.points && item.points.length > 0 && (
                                <ul className='mt-4 flex flex-col gap-2.5'>
                                    {item.points.map((point) => (
                                        <li key={point} className='
                                          flex gap-3 text-[0.9375rem]
                                          leading-relaxed text-muted
                                        '>
                                            <span className='
                                              mt-[0.65em] h-px w-2.5 shrink-0
                                              bg-line-strong
                                            ' aria-hidden='true' />
                                            <span className='max-w-[70ch]'>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </li>
                )
            })}
        </ol>
    )
}
