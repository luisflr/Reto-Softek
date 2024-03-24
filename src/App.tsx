import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import { LoginPage, PlansPage, SummaryPage } from './Pages/index';

import { ProtectedRoutes } from './Routes/ProtectedRoutes';

import './app.scss';
import useApp from './useApp';

function App() {

  const { user } = useApp();

  console.log(user)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<LoginPage />}/>
        <Route element={<ProtectedRoutes isAuth={!!user} redirectTo='/plans'/>}>
          {/* <Route path='/' element={<LoginPage />}/> */}
          <Route path='/plans' element={<PlansPage />}/>
          <Route path='/summary' element={<SummaryPage />}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
