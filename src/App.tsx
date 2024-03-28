import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import { ProtectedRoutes } from './Routes/ProtectedRoutes';
import { Login, Plans, Summary } from './Pages/index';

import useApp from './hooks/useApp';

import './app.scss';

function App() {

  const { user } = useApp();

  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route index element={<Login />}/>
          <Route path='/' element={<Login />}/>
          <Route element={<ProtectedRoutes isAuth={user.name.length > 0} redirectTo='/'/>}>
              <Route path='/plans' element={<Plans />}/>
              <Route path='/summary' element={<Summary />}/>
          </Route>
          
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
