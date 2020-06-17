import React from 'react';
import Group3d from "./utilities/Group3d";
import ArrowCta from "./utilities/ArrowCta.js";
import InfoParagraph from "./utilities/InfoParagraph.js";
import HeroForm from "./utilities/HeroForm.js";


const Projects = () =>{

      return (

        <React.Fragment>
          <section className="min-h-0 container-none lg:flex relative xl:min-h-screen">
            <div className="w-full lg:hidden">
              <img className="rounded-t-md" src="images/projects.jpg" alt="Proyectos"/>
            </div>


            <div className="bg-black p-4 rounded-b-md lg:w-11/12 xl:w-10/12 md:px-16 xl:min-h-0 xl:pb-10 xl:pt-32 lg:pt-10">
              <div className="text-white lg:w-1/3">
                <h4 className="text-sm">Proyectos selecionados</h4>
                <h2 className="text-3xl mt-4 lg:text-5xl lg:mt-5">MAP-IT</h2>
                <InfoParagraph
                  info="Fundado en el 2019 en la industria del Turismo es la primera plataforma ecommerce de experiencias inmersivas en Perú, ganadores de la Séptima generación(7G) de innóvate Perú, el reto fue reinventarnos y adaptarnos al covid-19 ofreciendo por primera vez un servicio de experiencias online."
                  textClass="md:text-sm md:leading-8 max-w-full text-xs"
                  containerClass="md:pr-4 md:my-10 mr-auto pr-4 my-5 mr-auto"
                  />
                <InfoParagraph
                  info={["Servicios:",<br></br>, "Branding, fotografía, experiencia de usuario y desarrollo a medida."]}
                  textClass="md:text-sm md:leading-8 max-w-full text-xs"
                  containerClass="md:pr-4 md:my-10 mr-auto pr-4 my-5 mr-auto"
                  />
              </div>
              <div className="hidden lg:block my-32 text-white xl:my-40">
                <a href="#this" target="_blank" className="cursor-pointer projects__arrow-cta">VISITAR WEB</a>
                <img src="images/arrow-2.png" alt="arrow-2"/>
              </div>
              <div className="mt-5 ml-auto text-white w-40 text-bold text-right lg:hidden">
                 <a href="#this" target="_blank" className="border-b border-black hover:border-white md:text-sm">VISITAR WEB</a>
              </div>
            </div>
              <div className="projects__image hidden lg:block absolute w-8/12 right-0">
                <img src="images/projects.jpg" alt="Proyectos"/>
              </div>
          </section>

          <div className="projects__form-container overflow-hidden relative w-full md:flex lg:justify-around pt-10 pb-6 lg:py-0 lg:pt-16 bg-blue-secondary">
            <Group3d polygon="polygon-gracias"/>
            <div className="relative my-index w-11/12 pl-2 mt-4 mb-20 mx-auto md:w-6/12 md:mt-20 lg:my-20 lg:mx-auto lg:w-6/12 xl:ml-auto xl:mr-0 xl:pl-24 xl:pr-24 xl:w-5/12 xl:my-0 sm:w-8/12">
              <h4 className= "my-h4 mx-auto sm:text-center md:text-left text-2xl md:text-4xl lg:text-5xl md:mb-20">Estás listo para vender por tu ecommerce?</h4>
              <ArrowCta  title="Llámanos por" containerClass="rounded-md hidden md:flex lg:w-32 mx-auto md:mx-0 sm:ml-6 bg-blue text-shadow " ctaClass="mr-auto" src="images/llamada.png" adapt={false} route="llamada"/>
            </div>
              <HeroForm formClass="bg-black min-h-0 py-1 px-4 rounded-t-md mx-auto" buttonId="projects-formButton" containerForm="relative my-index form-container md:px-4 mx-auto lg:w-auto lg:ml-0 lg:mr-16 sm:w-56"/>
          </div>

        </React.Fragment>
      )



}

export default Projects
