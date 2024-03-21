import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import blurPurple from './assets/images/blur-asset-purple.png';
import blurGreen from './assets/images/blur-asset-green.png';

import './app.scss';


function App() {
  return (
    <>
      <Header />
      <section className='login'>
        <img src={blurPurple} className='purple-blur' alt='blur purple'/>
        <img src={blurGreen} className='green-blur' alt='blur green'/>
      </section>
      <Footer />
    </>
  )
}

export default App
