import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Sidebar } from '@/components/sidebar'

interface Props {
    children: React.ReactNode;
    sideBarActiveItemID: string;
}

export function Container ({ children, sideBarActiveItemID } : Props) {

    return (
        <div className='bg-base-100 drawer lg:drawer-open'>
            <input id='my-drawer' type='checkbox' className='drawer-toggle' />
            <div className='drawer-content bg-base-100'>
                <Header />
                <div className='md:flex md:justify-center'>
                    <main className='p-6 pt-10 lg:max-w-[900px] max-w-[100w]'>
                        {children}
                    </main>
                </div>
                <Footer />
            </div>
            <Sidebar sideBarActiveItemID={sideBarActiveItemID} />
        </div>
    )
}