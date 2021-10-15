 import * as yup from 'yup'
 
const schema = yup.object().shape({

    'name-input': yup
    .string()

})

 export default schema