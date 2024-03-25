import { ChangeEvent, ReactNode } from 'react'
/**
 * Component Interfaces
 */
interface CommonInterface {
  wrapperClassName?: string
}

type typeColor = 'primary' | 'secondary' 

export interface CheckBoxInterface extends CommonInterface{
  labelText: string
  isChecked: boolean
  error: boolean
  handleCheckedOption: () => void
}

export interface InputInterface extends CommonInterface{
  placeholder: string
  inputValue: string
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface InputSelectInterface extends CommonInterface{
  placeholder: string
  options: string[]
  inputValue: string
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface SpecialButtonInterface extends CommonInterface{
  textButton: string
  onPress?: () => void
}

export interface ButtonInterface extends CommonInterface{
  type: typeColor
  textButton?: string
  action?: () => void
  loading: boolean
}

export interface RadioButtonInterface extends CommonInterface{
  checked: boolean
  onSetChecked: () => void
  icon: string
  title: string
  description: string
}

export interface CardInterface extends CommonInterface{
  recommended?: boolean,
  showDiscount: boolean,
  title: string,
  iconCard: string,
  coste: string,
  price: number,
  descriptionList: string[],
  textButton: string,
  onClickButtonCard: () => void
}

/**
 * Page Interfaces
 */

export interface RimacUserInterface {
  birthDay: string
  documentNumber: string
  documentType: string
  lastName: string
  name: string
  phoneNumber: string
}

export interface UserInterface {
  name: string
  lastName: string
  birthDay: string
}

/**
 * Route Interfaces
 */

export interface ProtectedRouteInterface {
  children?: ReactNode, 
  isAuth: boolean, 
  redirectTo?: string
}

/**
 * Constant Interfaces
 */

export interface CheckboxOptionsInterface {
  isChecked: boolean
  text: string
}

 /** Hooks Interfaces */
export interface PlansInterface {
  name: string
  price: number
  description: string []
  age: number
}

export interface DataOfPlansInterface {
  list: PlansInterface[]
}