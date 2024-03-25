import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/useRedux'

const useSummary = () => {
  const [stepChecked, setStepChecked] = useState(0)
  
  const navigate = useNavigate()

  const plan = useAppSelector(state => state.plan)

  const handleBack = () => {
    setStepChecked(1)

    navigate('/plans')
  }
  return {
    /* States */
    stepChecked,
    plan,
    /* State Functions */
    /* Functions */
    handleBack 
  }
}

export default useSummary