import Image from 'next/image'
import Link from 'next/link'
import { SidebarMenu } from './sidebar-menu'
import { SidebarFooter } from './sidebar-footer'

interface Props {
    sideBarActiveItemID: string;
}

export function Sidebar ({ sideBarActiveItemID } : Props) {

    return (
        <div className='drawer-side z-40'>
            <label htmlFor='my-drawer' className='drawer-overlay'></label>
            <aside className='px-2 pt-2 h-auto min-h-full w-[19rem] bg-base-200 text-base-content flex flex-col'>
                <div className='w-fit mx-auto mt-5 mb-6'>
                    <Link href='/'>
                        <div className='avatar transition ease-in-out hover:scale-[102%] block m-auto'>
                            <div className='w-[8.5rem]'>
                                <Image className='mask mask-circle' width={300} height={300} src={'/perfil.jpg'} alt='Profile image' priority={true} />
                                {/* <Image className='mask mask-circle' width={300} height={300} src={'https://res.cloudinary.com/dn0alzand/image/upload/v1708886246/img_public/xhtmh7wqcwhbaohavtl9.jpg'} alt='Profile image' priority={true} /> */}
                            </div>
                        </div>
                    </Link>
                </div>
                <SidebarMenu sideBarActiveItemID={sideBarActiveItemID} />
                <SidebarFooter />
            </aside>
        </div>
    )
}