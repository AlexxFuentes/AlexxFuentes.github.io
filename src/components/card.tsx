import Image from 'next/image'
import Link from 'next/link'

interface Props {
    title: string;
    desc: string;
    img: string;
    url: string;
    target?: string;
    badge?: string;
    tags?: string[];
}

export function Card({ title, desc, img, url, target = '_blank', badge, tags }: Props) {

    return (
        <div className='md:w-1/3 w-full'>
            <Link href={url} target={target}>
                <div className='card bg-base-100 transition ease-in-out hover:shadow-xl mx-6 my-2 hover:scale-[102%]'>
                    <Image width={750} height={422} src={img} alt={title} priority={true} />
                    <div className='card-body'>
                        <h2 className='card-title'>
                            {title}
                            {badge && <div className='badge badge-secondary'>{badge}</div>}
                        </h2>
                        <p>{desc}</p>
                        <div className='card-actions justify-end'>
                            {tags && tags.map((tag, index) => <div key={index} className='badge badge-outline'>{tag}</div>)}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}