import Link from 'next/link'
import { GithubIcon, LinkedinIcon } from './svg'

export function SidebarFooter () {

    return (
        <div className='block sticky bottom-10 bg-base-200 justify-center h-12 [mask-image:linear-gradient(transparent,#000000)]'>
            {/* pointer-events-none */}

            <div className='social-icons px-4 pb-5 pt-1 flex self-center justify-center sticky bottom-0 bg-base-200'>

            <Link href='https://github.com/AlexxFuentes' target='_blank' className='mx-3' aria-label='Github' title='Github'>
                <GithubIcon />
            </Link>

            <Link href='https://www.linkedin.com/in/alex-alfredo-fuentes-maldonado-0a56432ab/' target='_blank' className='mx-3' aria-label='Github' title='Github'>
                <LinkedinIcon />
            </Link>

            </div>
        </div>
    )
}