import { useState, useEffect } from 'react'
import { UserInterface } from './Interfaces'

const INITIAL_STATE = {
  name: '',
  lastName: '',
  birthDay: ''
}

const useApp = () => {

  const [user, setUser] = useState<UserInterface>(INITIAL_STATE)
  useEffect(() => {
    if(localStorage.getItem('user')) {
      const userStorage = JSON.parse(localStorage.getItem('user') as string)
      setUser(userStorage)
    } 
  }, [])
  
  
  return { user }
}

export default useApp