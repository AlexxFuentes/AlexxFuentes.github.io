'use client'
import { useState, useEffect } from 'react'
import { Container } from '@/components/container'
import { HorizontalCard } from '@/components/horizontal-card'
import { v4 as uuid } from 'uuid'

interface Project {
    title: string
    desc: string
    img: string
    url: string
    tech: string[]
}

export default function Page() {

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
        <Container key={uuid()} sideBarActiveItemID='projects'>
            <div>
                <div className="text-3xl w-full font-bold mb-2">Mis proyectos {"</>"}</div>
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
    )
}
