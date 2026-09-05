import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'

type SocialLinksProps = {
    links: { github: string, linkedIn: string }
    labels: { github: string, linkedIn: string }
    showLabels?: boolean
}

export default function SocialLinks({ links, labels, showLabels = false }: SocialLinksProps) {
    const items = [
        { href: links.github, label: labels.github, Icon: Github },
        { href: links.linkedIn, label: labels.linkedIn, Icon: Linkedin },
    ]

    return (
        <ul className='flex flex-row items-center gap-2'>
            {items.map(({ href, label, Icon }) => (
                <li key={href}>
                    <Link
                        href={href}
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label={showLabels ? undefined : label}
                        className={`
                          flex items-center gap-2 rounded-md text-sm
                          text-muted transition-colors duration-150
                          hover:text-fg
                          ${showLabels ? 'border border-line px-3 py-1.5 hover:border-line-strong' : 'p-1.5'}
                        `}
                    >
                        <Icon className='size-4 shrink-0' />
                        {showLabels && <span>{label}</span>}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
