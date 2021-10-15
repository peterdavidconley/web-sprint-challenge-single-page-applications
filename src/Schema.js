 import * as yup from 'yup'
 
const schema = yup.object().shape({

    'name-input': yup
    .string()
    .required('name must be at least 2 characters')
    .min(2, 'name must be at least 2 characters'),

    'special-text': yup
    .string(),

    size: yup
    .string()
    .oneOf(['small', 'medium', 'large'], 'Must select a size'),

    pepperoni: yup
    .boolean()
    .oneOf([true, false], 'You must have checked or unchecked'),

    'chicken-fingers': yup
    .boolean()
    .oneOf([true, false], 'You must have checked or unchecked'),

    peppers: yup
    .boolean()
    .oneOf([true, false], 'You must have checked or unchecked'),

    mushrooms: yup
    .boolean()
    .oneOf([true, false], 'You must have checked or unchecked')

})

 export default schema