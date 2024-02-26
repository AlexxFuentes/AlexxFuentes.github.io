'use client'
import { useEffect } from 'react'
import Link from 'next/link'

interface Props {
    sideBarActiveItemID: string;
}

export function SidebarMenu ({ sideBarActiveItemID } : Props) {

    useEffect(() => {
        const activeItem = document.getElementById(sideBarActiveItemID);
        activeItem && activeItem.classList.add('bg-base-300');        
    }, [sideBarActiveItemID]);


    return (
        <ul className='menu grow shrink menu-md overflow-y-auto'>
            <li><Link className='py-3 text-base' id='home' href='/'>Inicio</Link></li>
            <li><Link className='py-3 text-base' id='projects' href='/projects'>Projectos</Link></li>
            {/* <li><Link className='py-3 text-base' id='services' href='/services'>Servicios</Link></li> */}
            {/* <li><Link className='py-3 text-base' id='store' href='/store'>Tienda</Link></li> */}
            {/* <li><Link className='py-3 text-base' id='blog' href='/blog/'>Blog</Link></li> */}
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
        </ul>
    )
}