import Button from "../Button/Button"

import './card.scss'

const Card = ({
  recommended,
  title,
  iconCard,
  coste,
  price,
  descriptionList,
  textButton
}: {
  recommended?: boolean,
  title: string,
  iconCard: string,
  coste: string,
  price: string,
  descriptionList: string[],
  textButton: string,
  onClickButton: () => void
}) => {
  return (
    <div className='card-plan'>
      {recommended && 
        <div className='badge'>Plan recomendado</div>
      }
      <div className='card-plan__content'>
        <div className='card-title'>
          <div className='card-title__text'>
            <p>{title}</p>
            <div className='card-description'>
              <p className='card-description__coste'>{coste}</p>
              <p className='card-description__price'>${price} al mes</p>
            </div>
          </div>
          <div className='card-title__icon'>
            <img src={iconCard} />
          </div>
        </div>
        <div className='line-separator'></div>
        <ul className='card-list'>
          {descriptionList.map(item => 
            <li className='card-list__item'>
              {item}
            </li>)
          }
        </ul>
        <Button wrapperClassName='card-button' loading={false} type='secondary' textButton={textButton}/>
      </div>
    </div>
  )
}

export default Card