import Link from 'next/link'
import { cookies } from 'next/headers'

export default async function NotFound() {
    const lang = (await cookies()).get('lang')?.value || 'no'

    const text = lang === 'no'
        ? { code: '404', title: 'Siden finnes ikke', body: 'Lenken er død eller adressen er skrevet feil.', back: 'Til forsiden' }
        : { code: '404', title: 'Page not found', body: 'The link is dead, or the address was mistyped.', back: 'Back to the front page' }

    return (
        <div className='
          flex min-h-[60vh] flex-col justify-center px-6 py-20
          sm:px-10
          lg:px-16
        '>
            <p className='font-mono text-sm text-signal'>{text.code}</p>
            <h1 className='
              mt-4 font-display text-4xl font-semibold tracking-tight
              sm:text-5xl
            '>{text.title}</h1>
            <p className='mt-4 max-w-[52ch] text-muted'>{text.body}</p>
            <Link href='/' className='
              mt-8 inline-flex w-fit items-center rounded-md border
              border-line px-4 py-2 text-sm text-muted transition-colors
              duration-150
              hover:border-line-strong hover:text-fg
            '>{text.back}</Link>
        </div>
    )
}
