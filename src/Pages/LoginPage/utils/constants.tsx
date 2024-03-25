import { CheckboxOptionsInterface, RimacUserInterface } from "../../../Interfaces"

export const options: string[] = ['DNI', 'RUC']

export const checkBoxOptions: CheckboxOptionsInterface[] = [{
  isChecked: false,
  text: 'Acepto la Política de Privacidad'
},
{
  isChecked: false,
  text: 'Acepto la Política Comunicaciones Comerciales'
}]

export const exampleUser: RimacUserInterface = {
  birthDay: '02-04-1990',
  documentNumber: '30216147',
  documentType: 'DNI',
  lastName: 'Miranda Díaz',
  name: 'Rocío',
  phoneNumber: '5130216147'
}