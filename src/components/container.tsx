'use client'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Sidebar } from '@/components/sidebar'
import { useAuth } from '@/context/auth-context'
import { useState } from 'react'

interface Props {
    children: React.ReactNode;
    sideBarActiveItemID: string;
}

const themes = ['dark', 'dracula', 'light', 'cupcake', 'forest']

export function Container({ children, sideBarActiveItemID }: Props) {

    const { setTheme, theme } = useAuth()

    const renderThemes = () => {
        return themes.map((theme) => {
            return (
                <li key={theme}>
                    <input onClick={() => setTheme(theme)} type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label={theme} value={theme} />
                </li>
            )
        })
    }

    return (
        <div className='bg-base-100 drawer lg:drawer-open' data-theme={theme}>
            <input id='my-drawer' type='checkbox' className='drawer-toggle' />
            <div className='drawer-content bg-base-100'>
                <Header />
                <div className='md:flex md:justify-center'>
                    <main className='p-6 pt-10 lg:max-w-[900px] max-w-[100w]'>
                        <div className="dropdown dropdown-hover flex justify-end ">
                            <div tabIndex={0} role="button" className="btn m-1">
                                Temas
                                <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-300 rounded-box w-52">                                
                                {renderThemes()}
                            </ul>
                        </div>
                        {children}
                    </main>
                </div>
                <Footer />
            </div>
            <Sidebar sideBarActiveItemID={sideBarActiveItemID} />
        </div>
    )
}