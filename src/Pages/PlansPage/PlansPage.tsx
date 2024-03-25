import React from "react"

import Card from '../../Components/Card/Card';
import BackButton from '../../Components/BackButton/BackButton'
import RadioButton from '../../Components/RadioButton/RadioButton'

import usePlans from './hooks/usePlans';

import iconUser from '../../assets/images/IconUser.png';
import iconAddUser from '../../assets/images/IconAddUser.png';
import iconHouse from '../../assets/images/IconHouse.png';
import iconHospital from '../../assets/images/IconHospital.png';

import './plans-page.scss'
import Loader from '../../Components/Loader/Loader';
import Stepper from '../../Components/Stepper/Stepper';
import { Steps } from './utils/constants';

const PlansPage = () => {

  const {
    checked, plans, isLoading,
    setChecked,
    handleBack, handleSelectPlan } = usePlans();

  return (
    <section className='plans-section'>
      <Stepper steps={Steps} stepChecked={0}/>
      <div className='container'>
        <div className='content'>
          <div className='button-container'>
            <BackButton textButton='Volver' onPress={()=> handleBack()}/>
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
              checked={checked === 2}
              onSetChecked={() => setChecked(2)}
              icon={iconAddUser}
              title='Para alguien más'
              description='Realiza una cotización para uno de tus familiares o cualquier persona.'
            />
          </div>
          {plans.length > 1
            ? 
            <div className='cards-plan-container'>
              {isLoading 
              ? <Loader wrapperClassName='plans-loader'/>
              : plans.map((plan, index) =>
                <React.Fragment key={`card-${index}`}>
                  <Card
                    recommended={index === 1}
                    title={plan.name}
                    iconCard={index % 2 === 0 ? iconHouse : iconHospital}
                    coste='COSTO DEL PLAN'
                    price={plan.price}
                    descriptionList={plan.description}
                    textButton='Seleccionar Plan'
                    onClickButtonCard={() => handleSelectPlan(plan)}
                    showDiscount={checked === 2}
                  />
                </React.Fragment>
               )}
          </div>
          : <></>
          }
          
        </div>
      </div>
    </section>
  )
}

export default PlansPage