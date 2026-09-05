'use client'

import { useState } from 'react'
import { setCookie } from '@utils/cookies'
import { useRouter } from 'next/navigation'

type LangToggleProps = {
    initial: Lang
    label: string
}

export default function LangToggle({ initial, label }: LangToggleProps) {
    const router = useRouter()
    const [lang, setLang] = useState<Lang>(initial)

    function handleClick() {
        const next: Lang = lang === 'no' ? 'en' : 'no'
        setCookie('lang', next, 365)
        setLang(next)
        router.refresh()
    }

    return (
        <button
            type='button'
            onClick={handleClick}
            aria-label={label}
            className='
              flex h-8 cursor-pointer items-center justify-center rounded-md
              px-2 font-mono text-xs text-muted transition-colors duration-150
              hover:bg-raised hover:text-fg
            '
        >
            {lang.toUpperCase()}
        </button>
    )
}
