import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { authUser } from '../../../redux/userSlice';
import { INITIAL_STATE } from '../../../utils/constants';

const usePlans = () => {
  const user = useAppSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  console.log(user)
  const handleBack = () => {
    localStorage.removeItem('user')
    if (user.name.length > 0) dispatch(authUser(INITIAL_STATE))

    navigate('/')
  }
  return { 
    /* States */
    /* State Functions */
    /* Functions */
    handleBack 
  }
}

export default usePlans