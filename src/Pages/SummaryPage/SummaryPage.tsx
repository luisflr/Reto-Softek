
import BackButton from '../../Components/BackButton/BackButton'
import Stepper from '../../Components/Stepper/Stepper';


// import usePlans from './hooks/useSummary';
import useSummary from "./hooks/useSummary";

import { Steps } from '../PlansPage/utils/constants';
import './summary-page.scss'
import CardInfo from '../../Components/CardInfo/CardInfo';

const SummaryPage = () => {

  const { plan, handleBack } = useSummary();

  return (
    <section className='summary-section'>
      <Stepper steps={Steps} stepChecked={1}/>
      <div className='container'>
        <div className='summary-content'>
          <div className='button-container'>
            <BackButton textButton='Volver' onPress={()=> handleBack()}/>
          </div>
          <div className='summary-content__title'>
            <h1 className='summary-title'>Resumen del seguro</h1>
          </div>
          <div className='cards-plan-container'>
            <CardInfo priceOfPlan={plan.priceOfPlan} selectedPlan={plan.selectedPlan}/>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default SummaryPage