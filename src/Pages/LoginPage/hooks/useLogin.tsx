import { useEffect, useState, ChangeEvent } from "react"
import { useNavigate } from "react-router-dom";

import { UserInterface } from "../../../Interfaces"
import { getUser } from "../../../Services/AuthServices"

const useLogin = () => {
  const [user, setUser] = useState<UserInterface>()
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState(false)

  const navigate = useNavigate()

  const handleSearch = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(true)
  }

  const handleSearchUser = async () => {
    setIsLoading(true)
    try {
      const data = await getUser()
      setUser(data)
      localStorage.setItem('user', JSON.stringify(data))
      setIsLoading(false)
      setSearch(false)
      navigate('/plans')
    } catch (error) {
      console.error('Error:', error)
      setIsLoading(false)
      setSearch(false)
    }
  }

  useEffect(() => {
    if(search) handleSearchUser()
  }, [search])

  return {
    /* States */
    user,
    isLoading,
    /* State Functions */
    /* Functions */
    handleSearch,
  }
}

export default useLogin