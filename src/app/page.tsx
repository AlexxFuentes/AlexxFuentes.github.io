'use client'
import { HorizontalCard } from '@/components/horizontal-card'
import { Container } from '@/components/container'
import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

interface Project {
    title: string
    desc: string
    img: string
    url: string
    tech: string[]
}

export default function Home() {

    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        try {
            fetch('./data/my-projects.json')
                .then(response => response.json())
                .then(data => {
                    setProjects(data.projects)
                })
        } catch (error) {
            console.error('Error al cargar los proyectos:', error);
        }
    }, [])

    return (
        <Container key={uuid()} sideBarActiveItemID='home'>
            <div className='pb-12 mt-5'>
                <div className='text-xl py-1'>Hola a todos 👋</div>
                <div className='text-5xl font-bold'>Soy Alex Fuentes</div>
                <div className='text-3xl py-3 font-bold'>Ingeniero en sistemas</div>
                <div className='py-2'>
                    <p className='text-lg'>
                        Este es mi <b>potafolio web</b> donde muestro mis proyectos y habilidades en el desarrollo web. <br /> <br />
                        Soy ingeniero en sistemas, egresado de la Universidad Nacional Autónoma de Honduras (UNAH). Me apasiona por el desarrollo de soluciones tecnológicas. He adquirido habilidades técnicas en el desarrollo de software a través de mi programa de estudios. Además, también he adquirido habilidades técnicas en el desarrollo de forma autodidacta, lo que me ha permitido ampliar mi conocimiento y habilidades en el desarrollo de soluciones tecnológicas.<br /> <br />
                        Soy una persona proactiva, organizada y responsable. Siempre preparado para utilizar mis habilidades y cada vez aprender más.
                    </p>
                </div>
                {/* <div className='mt-8'>
                    <a className='btn' href='https://www.linkedin.com/in/alex-alfredo-fuentes-maldonado-0a56432ab/' target='_blank'> contactame!</a>
                    <a href='https://alexxfuentes.github.io/' target='_blank' className='btn btn-outline ml-5'>
                        Github
                    </a>
                </div> */}
            </div>
            <div>
                <div className='text-3xl w-full font-bold mb-2'>Mis proyectos {'</>'}</div>
            </div>

            <div className='divider my-0'></div>
            {
                projects?.map((project) => (
                    <div key={uuid()}>
                        <HorizontalCard
                            key={uuid()}
                            title={project.title}
                            img=''
                            desc={project.desc}
                            url={project.url}
                            tags={project.tech}
                        />
                        <div key={uuid()} className='divider my-0'></div>
                    </div>
                ))
            }
        </Container>
    );
}
