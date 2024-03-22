import blurPurple from '../../assets/images/blur-asset-purple.png';
import blurGreen from '../../assets/images/blur-asset-green.png';
import blurPurpleMobile from '../../assets/images/blur-asset-purple-mobile.png';
import blurGreenMobile from '../../assets/images/blur-asset-green-mobile.png';
import familyImage from '../../assets/images/family.png';

import './login.scss'
import InputSelect from '../../Components/InputSelect/InputSelect';
import Input from '../../Components/Input/Input';
import Checkbox from '../../Components/CheckBox/Checkbox';
import UnderlineButton from '../../Components/UnderlineButton/UnderlineButton';
import Button from '../../Components/Button/Button';


function Login() {
  const options: string[] = ['DNI', 'RUC']
  const checkBoxOptions: string[] = ['Acepto la Política de Privacidad', 'Acepto la Política Comunicaciones Comerciales']

  return (
    <section className='login'>
      <div className='container'>

        <div className='image-container'>
          <img src={familyImage} alt='image family'/>
        </div>

        <div className='text-container'>
          <div className='form-header'>
            <div>
              <span className='tag-seguro'>Seguro Salud Flexible</span>
              <h1 className='title-seguro'>Creado para ti y tu familia</h1>
            </div>
            <div className='image-tablet'>
              <img src={familyImage}/>
            </div>
          </div>
          <hr />
          <h2 className='description-seguro'>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online</h2>

          <form className='form-login'>
            <InputSelect placeholder='Nro. de documento' options={options}/>
            <Input placeholder='Celular'/>
            <div className='checkboxes-login'>
              {checkBoxOptions.map(checkbox => 
                <Checkbox labelText={checkbox} />
              )}
            </div>
            <UnderlineButton wrapperClassName='underline-button-login' textButton='Aplican Términos y condiciones'/>
            <Button wrapperClassName='button-login' textButton='Cotiza aqui' type='primary' />
          </form>

        </div>
      </div>

      <img src={blurPurple} className='purple-blur' alt='blur purple'/>
      <img src={blurGreen} className='green-blur' alt='blur green'/>
      <img src={blurGreenMobile} className='green-blur-tablet' alt='blur green'/>
      <img src={blurPurpleMobile} className='purple-blur-tablet' alt='blur green'/>
    </section>
  )
}

export default Login