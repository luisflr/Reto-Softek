import { useState } from 'react'

import Card from '../../Components/Card/Card';
import BackButton from '../../Components/BackButton/BackButton'
import RadioButton from '../../Components/RadioButton/RadioButton'

import usePlans from './hooks/usePlans';

import iconUser from '../../assets/images/IconUser.png';
import iconAddUser from '../../assets/images/IconAddUser.png';
import iconHouse from '../../assets/images/IconHouse.png';
import iconHospital from '../../assets/images/IconHospital.png';

import './plans-page.scss'

const PlansPage = () => {

  const { handleBack } = usePlans();

  const [checked, setChecked] = useState(1)

  // const steps = ['planes y coberturas', 'resumen']
  return (
    <section className='plans-section'>
      <div className='plans-stepper'>
        <div className='plans-stepper__content'>
          <div className='stepper-checked'>
            1
          </div>
          <p className='stepper-text'>
            Planes y coberturas 
          </p>
        </div>
          - - -
        <div className='plans-stepper__content'>
          <div className='stepper-non-checked'>
            2
          </div>
          <p className='stepper-text-non-checked'>
            Resumen
          </p>
        </div>
      </div>
      <div className='container'>
        <div className='content'>
          <div className='button-container'>
            <BackButton textButton='Volver' back={()=> handleBack()}/>
          </div>
          <div className='content__title'>
            <h1 className='title-name'>Rocío ¿Para quién deseas cotizar?</h1>
            <p className='title-description'>Selecciona la opción que se ajuste más a tus necesidades.</p>
          </div>
          <div className='plan-check-container'>
            <RadioButton
              checked={checked == 1}
              onSetChecked={() => setChecked(1)}
              icon={iconUser}
              title='Para mí'
              description='Cotiza tu seguro de salud y agrega familiares si así lo deseas.'
            />
            <RadioButton
              checked={checked == 2}
              onSetChecked={() => setChecked(2)}
              icon={iconAddUser}
              title='Para alguien más'
              description='Realiza una cotización para uno de tus familiares o cualquier persona.'
            />
          </div>
          <div className='cards-plan-container'>
            <Card
              title='Plan en Casa'
              iconCard={iconHouse}
              coste='COSTO DEL PLAN'
              price='39'
              descriptionList={[
                'Médico general a domicilio por S/20 y medicinas cubiertas al 100%.',
                'Videoconsulta y orientación telefónica al 100% en medicina general + pediatría.',
                'Indemnización de S/300 en caso de hospitalización por más de un día.']}
              textButton='Seleccionar Plan'
              onClickButton={()=>{}}
            />
            <Card
              recommended={true}
              title='Plan en Casa y Clínica'
              iconCard={iconHospital}
              coste='COSTO DEL PLAN'
              price='99'
              descriptionList={[
                'Consultas en clínica para cualquier especialidad.',
                'Medicinas y exámenes derivados cubiertos al 80%.',
                'Atención médica en más de 200 clínicas del país.']}
              textButton='Seleccionar Plan'
              onClickButton={()=>{}}
            />
            <Card
              title='Plan en Casa + Chequeo'
              iconCard={iconHouse}
              coste='COSTO DEL PLAN'
              price='49'
              descriptionList={[
                'Un Chequeo preventivo general de manera presencial o virtual.',
                'Acceso a Vacunas en el Programa del MINSA en centros privados.',
                'Incluye todos los beneficios del Plan en Casa.']}
              textButton='Seleccionar Plan'
              onClickButton={()=>{}}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlansPage