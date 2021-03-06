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
              <img className="rounded-t-md" src="images/projects.png" alt="Proyectos"/>
            </div>


            <div className="bg-black p-4 rounded-b-md lg:w-11/12 xl:w-10/12 md:px-16 xl:min-h-0 xl:pb-10 xl:pt-32 lg:pt-10">
              <div className="text-white lg:w-1/3">
                <h4 className="text-sm">Proyectos selecionados</h4>
                <h2 className="text-semibig mt-4 md:text-3xl lg:text-5xl lg:mt-5">NIUBIZ</h2>
                <InfoParagraph
                  info="Est occaecat cillum sit dolor anim esse elit adipisicing pariatur cillum ex aliquip esse aute. Velit tempor nisi qui cupidatat aliquip veniam id laborum cupidatat et. Incididunt fugiat aliquip et ut fugiat enim."
                  textClass="md:text-sm md:leading-8 max-w-full text-xs"
                  containerClass="md:pr-4 md:my-10 mr-auto pr-4 my-5 mr-auto"
                  />
              </div>
              <div className="hidden lg:block my-32 text-white xl:my-40">
                <h5 className="cursor-auto projects__arrow-cta">SIGUIENTE</h5>
                <img src="images/arrow-2.png" alt="arrow-2"/>
              </div>
              <div className="mt-5 ml-auto text-white w-40 text-xs text-bold text-right lg:hidden">
                 <a href="#this" className="border-b border-black hover:border-white md:text-sm">VISITAR WEB</a>
              </div>
            </div>
              <div className="projects__image hidden lg:block absolute w-8/12 right-0">
                <img src="images/projects.png" alt="Proyectos"/>
              </div>
          </section>

          <div className="projects__form-container relative w-full md:flex lg:justify-around pt-10 pb-6 lg:py-0 lg:py-16 bg-blue-secondary">
            <Group3d />
            <div className="relative my-index w-9/12 pl-5 mt-4 mb-12 mx-auto md:w-6/12 md:mt-20 lg:my-20 lg:mx-auto lg:w-6/12 xl:ml-auto xl:mr-0 xl:pl-24 xl:pr-24 xl:w-5/12 xl:my-0 sm:w-8/12">
              <h4 className= "my-h4 mx-auto sm:text-center md:text-left text-smibig sm:text-2xl md:text-4xl lg:text-5xl md:mb-20">Estás listo para vender por tu tienda virtual?</h4>
              <ArrowCta  title="Llámanos (+51)773 8905" containerClass="rounded-md hidden md:flex lg:w-32 mx-auto md:mx-0 sm:ml-6 bg-blue text-shadow " ctaClass="mr-auto" src="images/llamada.png" adapt={false}/>
            </div>
              <HeroForm formClass="bg-black min-h-0 py-1 px-2 rounded-t-md mx-auto" buttonId="projects-formButton" containerForm="relative my-index form-container md:px-4 mx-auto lg:w-auto lg:ml-0 lg:mr-16 sm:w-56"/>
          </div>

        </React.Fragment>
      )



}

export default Projects
