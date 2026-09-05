'use client'
import { useState } from 'react'
import { Send } from 'lucide-react'

type ContactProps = {
    text: ContactDictionary
    mail: string
}

const field = `
  w-full rounded-md border border-line bg-raised px-3 py-2.5 text-sm
  text-fg transition-colors duration-150 placeholder:text-faint
  hover:border-line-strong
  focus:border-signal focus:outline-none
`

const label = 'mb-2 block text-sm font-medium text-fg'

export default function Contact({ text, mail }: ContactProps) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const body = `${name} <${email}>\n\n${message}`
        window.location.href = `mailto:${mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }

    return (
        <form onSubmit={handleSubmit} className='flex max-w-160 flex-col gap-6'>
            <div className='
              grid grid-cols-1 gap-6
              sm:grid-cols-2
            '>
                <div>
                    <label htmlFor='contact-name' className={label}>{text.name}</label>
                    <input
                        id='contact-name'
                        name='name'
                        type='text'
                        required
                        autoComplete='name'
                        placeholder={text.namePlaceholder}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={field}
                    />
                </div>

                <div>
                    <label htmlFor='contact-email' className={label}>{text.email}</label>
                    <input
                        id='contact-email'
                        name='email'
                        type='email'
                        required
                        autoComplete='email'
                        placeholder={text.emailPlaceholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={field}
                    />
                </div>
            </div>

            <div>
                <label htmlFor='contact-subject' className={label}>{text.subject}</label>
                <input
                    id='contact-subject'
                    name='subject'
                    type='text'
                    required
                    placeholder={text.subjectPlaceholder}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className={field}
                />
            </div>

            <div>
                <label htmlFor='contact-message' className={label}>{text.message}</label>
                <textarea
                    id='contact-message'
                    name='message'
                    required
                    rows={6}
                    placeholder={text.messagePlaceholder}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`
                      ${field}
                      resize-y
                    `}
                />
            </div>

            <div>
                <button
                    type='submit'
                    className='
                      inline-flex w-full items-center justify-center gap-2
                      rounded-md bg-signal-fill px-5 py-2.5 text-sm font-medium
                      text-on-fill transition-opacity duration-150
                      hover:opacity-85
                      sm:w-auto
                    '
                >
                    {text.submit}
                    <Send className='size-4' />
                </button>
            </div>
        </form>
    )
}
