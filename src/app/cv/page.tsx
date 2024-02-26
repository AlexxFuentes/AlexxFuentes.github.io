import { Container } from '@/components/container'
import { TimeLine } from '@/components/time-line'

export default function Page() {

    return (
        <Container sideBarActiveItemID='cv'>
            <div className='mb-5'>
                <div className='text-3xl w-full font-bold'>Perfil</div>
            </div>
            <div className='mb-10 text-justify'>
            Soy una persona proactiva, organizada y responsable. Siempre preparado para utilizar mis habilidades y cada vez aprender más.
            </div>

            <div className='mb-5'>
                <div className='text-3xl w-full font-bold'>Educación</div>
            </div>

            <div className='time-line-container grid gap-4 mb-10'>
                <TimeLine
                    title='Educación media'
                    subtitle='2015 - 2017 en Centro de Investigación e Innovación Educativas (CIIE), Tegucigalpa, Honduras'
                >
                    
                    Bachillerato técnico profesional en contaduría y finanzas
                </TimeLine>
                <TimeLine
                    title='Educacion superior'
                    subtitle='2018 - 2023 en la Universidad Nacional Autónoma de Honduras (UNAH), Tegucigalpa, Honduras'
                >
                    Ingeniería en sistemas
                </TimeLine>
            </div>

            <div className='mb-5'>
                <div className='text-3xl w-full font-bold'>Experiencia</div>
            </div>

            <div className='time-line-container grid gap-4 mb-10'>
                <TimeLine
                    title='Ingelmeco'
                    subtitle='septiembre/2023 - diciembre/2023'
                >
                    Aplicación web donde se da a conocer la empresa Ingelmeco y además permite mostrar los productos de la misma de forma interactiva con el modulo de administrador.Se utilizo next en el lado del cliente para un mejor SEO.
                </TimeLine>
                <TimeLine
                    title='Tigershare'
                    subtitle='enero/2023 - abril/2023'
                >
                    Aplicación web que permite la elaboración de código de html, js y css de forma colaborativa.
                </TimeLine>
                <TimeLine
                    title='ERP - Velneo'
                    subtitle='enero/2023 - abril/2023'
                >
                   Implementación de ERP para PYMES y ONG, el sistema permite la edición y creacion de nuevos modulos mediante el framework Velneo.
                </TimeLine>
            </div>

            {/* <div className='mb-5'>
                <div className='text-3xl w-full font-bold'>Certifications</div>
            </div>

            <ul className='list-disc mx-6 mb-10 grid gap-2'>
                <li>
                    <a href='#' target='_blank'> Certification Name (with link)</a>
                </li>
                <li>
                    <a href='#' target='_blank'> Certification Name (with link)</a>
                </li>
            </ul> */}

            <div className='mb-5'>
                <div className='text-3xl w-full font-bold'>Skills</div>
            </div>

            <ul className='list-disc md:columns-5 columns-2 mx-6'>
                <li>React.js</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Tailwinscss</li>
                <li>Bootstrap</li>
                <li>Node.js</li>
                <li>Git</li>
                <li>SQL</li>
                <li>MongoDB</li>
            </ul>
        </Container>
    )
}
