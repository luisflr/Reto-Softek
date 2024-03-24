
const useApp = () => {

  const user: string = JSON.parse(localStorage.getItem('user') as string)
  return { user }
}

export default useApp