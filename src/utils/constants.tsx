import { PageContextInterface, UserInterface } from "../Interfaces";

export const INITIAL_STATE: UserInterface = {
  name: '',
  lastName: '',
  birthDay: ''
}

export const PageContextInitialState: PageContextInterface = {
  selectedPlan: '',
  priceOfPlan: 0,
}