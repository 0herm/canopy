'use client'

import { useState } from 'react'
import { setCookie } from '@utils/cookies'
import { Moon, Sun } from 'lucide-react'

type ThemeToggleProps = {
    initial: 'dark' | 'light'
    label: string
}

export default function ThemeToggle({ initial, label }: ThemeToggleProps) {
    const [theme, setTheme] = useState(initial)

    function toggleTheme() {
        const next = theme === 'dark' ? 'light' : 'dark'
        setCookie('theme', next, 365)
        setTheme(next)
        document.documentElement.classList.remove('dark', 'light')
        document.documentElement.classList.add(next)
    }

    return (
        <button
            type='button'
            onClick={toggleTheme}
            aria-label={label}
            className='
              flex size-8 cursor-pointer items-center justify-center rounded-md
              text-muted transition-colors duration-150
              hover:bg-raised hover:text-fg
            '
        >
            {theme === 'dark'
                ? <Moon className='size-4' />
                : <Sun className='size-4' />}
        </button>
    )
}
