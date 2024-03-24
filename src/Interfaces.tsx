import { ReactNode } from 'react'
/**
 * Component Interfaces
 */
interface CommonInterface {
  wrapperClassName?: string
}

type typeColor = 'primary' | 'secondary' 

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
  type: typeColor
  textButton?: string
  action?: () => void
  loading: boolean
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