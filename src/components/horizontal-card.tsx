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

export function HorizontalCard ({ title, desc, img, url, target = '_blank', badge, tags }: Props) {

    const tag_url = url.split('/').slice(0, -1).join('/') + '/tag';

    return (
        <div className='rounded-lg bg-base-100 hover:shadow-xl transition ease-in-out hover:scale-[102%]'>
            <Link href={url} target={target}>
                    <div className='hero-content flex-col md:flex-row'>
                        {
                            img && (
                                <Image
                                    src={img}
                                    width={750}
                                    height={422}
                                    alt={title}
                                    className='max-w-full md:max-w-[13rem] rounded-lg'
                                    priority={true}
                                />
                            )
                        }
                        <div className='grow w-full'>
                            <h1 className='text-xl font-bold'>
                                {title}
                                {badge && <div className='badge badge-secondary mx-2'>{badge}</div>}
                            </h1>
                            <p className='py-1 text-1xl'>{desc}</p>
                            <div className='card-actions justify-end'>
                                {
                                    tags &&
                                    tags.map((tag) => (
                                        // <Link key={tag} href={`${tag_url}/${tag}`} className='badge badge-outline'>
                                        //     {tag}
                                        // </Link>
                                        <div key={tag} className='badge badge-outline'>
                                            {tag}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
            </Link>
        </div>
    )
}