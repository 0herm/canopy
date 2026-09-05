import LangToggle from '@components/langtoggle/langToggle'
import { CircleUser } from 'lucide-react'
import Link from 'next/link'
import ThemeToggle from '@components/themetoggle/themeToggle'

export default function NavBar() {
    return (
        <div className='
          flex size-full flex-row justify-between px-6
          sm:px-16
        '>
            <div className='
              flex items-center rounded-full border-[0.15rem] border-light
              bg-darker p-2
            '>
                <Link href='/'>
                    <CircleUser className='size-7'/>
                </Link>
            </div>
            <div className='
              flex flex-row items-center gap-2 rounded-full border-[0.15rem]
              border-light bg-darker p-2
            '>
                <ThemeToggle />
                <LangToggle />
            </div>
        </div>
    )
}
