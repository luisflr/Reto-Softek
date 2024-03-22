
interface CommonInterface {
  wrapperClassName?: string
}

type typeButton = 'primary' | 'secondary' 

export interface CheckBoxInterface extends CommonInterface{
  labelText: string;
}

export interface InputInterface extends CommonInterface{
  placeholder: string
}

export interface InputSelectInterface extends CommonInterface{
  placeholder: string
  options: string[]
}

export interface UnerlineButtonInterface extends CommonInterface{
  textButton: string
}

export interface ButtonInterface extends CommonInterface{
  type: typeButton
  textButton: string
}