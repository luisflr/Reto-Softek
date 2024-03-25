import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { authUser } from '../../../redux/userSlice';
import { INITIAL_STATE } from '../../../utils/constants';
import { useEffect, useState } from 'react';
import { getPlans } from '../../../Services/PlanServices';
import { DataOfPlansInterface, PlansInterface } from '../../../Interfaces';
import { PlansInitialState } from '../utils/constants';

const usePlans = () => {
  const [checked, setChecked] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(false)
  const [plans, setPlans] = useState<PlansInterface[]>(PlansInitialState)
  const [stepChecked, setStepChecked] = useState(0)

  const user = useAppSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleBack = () => {
    localStorage.removeItem('user')
    if (user.name.length > 0) dispatch(authUser(INITIAL_STATE))

    navigate('/')
  }

  const hadleCheckPlan = async () => {
    setIsLoading(true)
    try {
      const data: DataOfPlansInterface = await getPlans()
      setPlans(data.list)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }

  }

  const handleSelectPlan = () => {
    console.log('entro')
    setStepChecked(1)
  }
  useEffect(() => {
    if (checked > 0) hadleCheckPlan()
  },[checked])

  return { 
    /* States */
    checked,
    plans,
    isLoading,
    stepChecked,
    /* State Functions */
    setChecked,
    /* Functions */
    handleBack ,
    handleSelectPlan
  }
}

export default usePlans