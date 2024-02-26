import Link from 'next/link'

export function Footer () {
    const today = new Date();

    return (
        <footer className='footer footer-center block mb-5 pt-10'>
            <div className='pb-2'>
                &copy; {today.getFullYear()} Alex Fuentes
            </div>
            <div className='inline opacity-75'>
                <Link href='https://alexxfuentes.github.io/' target='_blank' className='font-bold'>
                Alex Fuentes
                </Link>
            </div>
        </footer>
    )
}