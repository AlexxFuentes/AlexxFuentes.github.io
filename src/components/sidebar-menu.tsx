'use client'
import { useAuth } from '@/context/auth-context'
import { useEffect } from 'react'
import Link from 'next/link'

interface Props {
    sideBarActiveItemID: string;
}

const themes = ['dark', 'dracula', 'light', 'cupcake', 'forest']

export function SidebarMenu({ sideBarActiveItemID }: Props) {

    const { setTheme } = useAuth()

    const renderThemes = () => {
        return themes.map((theme) => {
            return (
                <li key={theme}>
                    <input onClick={() => setTheme(theme)} type='radio' name='theme-dropdown' className='theme-controller btn btn-sm btn-block btn-ghost justify-start' aria-label={theme} value={theme} />
                </li>
            )
        })
    }

    useEffect(() => {
        const activeItem = document.getElementById(sideBarActiveItemID);
        activeItem && activeItem.classList.add('bg-base-300');
    }, [sideBarActiveItemID]);

    return (
        <ul className='menu grow shrink menu-md overflow-y-auto'>
            <li><Link className='py-3 text-base' id='home' href='/'>Inicio</Link></li>
            <li><Link className='py-3 text-base' id='projects' href='/projects'>Projectos</Link></li>
            <li><Link className='py-3 text-base' id='cv' href='/cv'>CV</Link></li>
            <li>
                <Link
                    className='py-3 text-base'
                    href='mailto:contact.aafuentes2030@gmail.com'
                    target='_blank'
                    referrerPolicy='no-referrer-when-downgrade'
                >
                    Contactame
                </Link>
            </li>
            <div className='dropdown dropdown-hover flex justify-start'>
                <div tabIndex={0} role='button' className='btn m-1'>
                    Temas
                    <svg width='12px' height='12px' className='h-2 w-2 fill-current opacity-60 inline-block' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2048 2048'><path d='M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z'></path></svg>
                </div>
                <ul tabIndex={0} className='dropdown-content z-[1] menu p-2 shadow-2xl bg-base-300 rounded-box w-52'>
                    {renderThemes()}
                </ul>
            </div>
        </ul>
    )
}