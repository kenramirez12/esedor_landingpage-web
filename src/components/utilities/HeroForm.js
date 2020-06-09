import React, { useState} from 'react'

import { Redirect } from 'react-router-dom';

import ArrowCta from './ArrowCta'
// import { ClickHandler } from './ModalForm';

const HeroForm = ({buttonId,formClass, containerForm = "form-container"}) =>{

  const [ruta, setRuta] = useState('base')
  const [failed, setFailed] = useState(false)


const data = [
    {
      label:'Nombre',
      value: ''
    },
    {
      label:'Correo',
      value: ''
    },
    {
      label:'Celular',
      value: ''
    },
    {
      label:'Mensaje',
      value: ''
    }
  ]


  const handleSubmit = async (formData) =>{

    const endpoint = 'https://esedor-1.nocrm.io/api/v2/leads'
    const apiKey = 'ae5cd80d2b804ad65c2c2578fb2bf47bb1e6840fcfe25be0'

    const dataSubmit = {
        'title': formData[0].value,
        'description': `Email: ${formData[1].value}, Teléfono: ${formData[2].value}, Mensaje: ${formData[3].value}`
    }

        const requestOptions = {
            method: 'POST',
            headers: {
              'X-API-KEY': apiKey,
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(dataSubmit)
        };

        // this.setState({ isLoading: true })

        fetch(endpoint, requestOptions)
          .then(response => {
            console.log('HeroForm.handleSubmit', response)
            const dataFetch = await response.json();
            console.log(dataFetch)

            setRuta('base')

              // setState({ isLoading: false })
              // setState({ firstname: '' })
              // setState({ email: '' })
              // Redireccionar a gracias
              return <Redirect />
          })
          .catch(error => {
              // setState({ isLoading: false })
              console.error('HeroForm.handleSubmit', error)
              setFailed(true)
          });
      }

      return(
        <div className={ containerForm} action="?" method="POST" >
      <form className={formClass + " -ml-1 sm:ml-0 sm:w-56 relative"} onSubmit={(e) => e.preventDefault( )}>
        {data.map(({label}, index)=>{

          return(
            <div key={index * (10 * 2)} className="input-container relative container-none my-4">
              <label className="absolute text-xs">{label}</label>
              <input
                onChange={(e) => {data[index].value = e.target.value; console.log(data[index].value)} }
                className="block mx-auto rounded-t-md w-full h-12 text-sm pl-2 mt-6 pt-4"/>
            </div>
          )
        })}
        {failed && <h4 className="text-xs text-yellow-700 ml-3 -mt-3 mb-4">Ocurrió un error</h4>}
        <div id="recaptcha_image" className="g-recaptcha" data-sitekey="6LcTh_8UAAAAAOHlUrf8L26iAVs-8AoJR1N4UAkY">
        </div>
      </form>
      <ArrowCta onClick={()=> handleSubmit(data)} id={buttonId} title="CONVERSEMOS" src="images/arrow_meet.png" containerClass="-ml-1 sm:ml-0 bg-blue py-2 pt-2 pl-5 sm:w-56 rounded-b-md" adapt={true} cta="ml-1" route={ruta}/>
    </div>
  )
  }

export default HeroForm
