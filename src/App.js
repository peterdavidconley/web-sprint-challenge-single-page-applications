import React, {useEffect, useState} from "react";
import { Route, Link, Switch } from 'react-router-dom'
import Homepage from './Homepage'
import PizzaForm from './Form'
import * as yup from 'yup'
import schema from './Schema'
import axios from 'axios'

const initialFormValues = {

  size: '',
  pepperoni: false,
  'chicken-fingers': false,
  peppers: false,
  mushrooms: false,
  'name-input': '',
  'special-text': ''

}

const initialFormErrors = {

  size: '',
  'name-input': '',
  'special-text': '',
  pepperoni: '',
  'chicken-fingers': '',
  peppers: '',
  mushrooms: '',

}

const App = () => {

 const [ orders, setOrders ] = useState([]);
 const [ formValues, setFormValues ] = useState(initialFormValues);
 const [ formErrors, setFormErrors ] = useState(initialFormErrors);
 const [ disabled, setDisabled ] = useState(true);

 const postOrder = newOrder => {

  axios.post(`https://reqres.in/api/orders`, newOrder)
  .then( resp => {
    setOrders([ resp.data, ...orders])
    setFormValues(initialFormValues)
  }) 
  .catch( err => {
    console.error(err)
    setFormValues(initialFormValues)
  })

 }

 const validate = ( name, value ) => {
   yup.reach( schema, name )
   .validate(value)
   .then( () => setFormErrors({...formErrors, [name]: ''}))
   .catch( err => setFormErrors( {...formErrors, [name]: err.errors[0]}))
 }

 const inputChange = ( name , value ) => {
   validate( name, value)
   setFormValues({
     ...formValues, [name]: value
   })
 }

 const formSubmit = () => {
  
  const newOrder = {

    size: formValues.size,
    pepperoni: formValues.pepperoni,
    'chicken-fingers': formValues.['chicken-fingers'],
    peppers: formValues.peppers,
    mushrooms: formValues.mushrooms,
    'name-input': formValues['name-input'].trim(),
    'special-text': formValues["special-text"].trim(),

  }
  postOrder(newOrder)

 }

 useEffect( () => {
  schema.isValid(formValues)
  .then( valid => {
    setDisabled(!valid)
  })
}, [formValues])



  return (
    <div>
      <header>
      <nav>
          <div class="logo">
              <h2>Lambda Eats</h2>
          </div>
          <div class="links">
          <a href="/">Home</a>
          <a href="/pizza">Order</a>
          </div>
      </nav>
    </header>
      <Switch>
        <Route path='/pizza'>
          <PizzaForm 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
          />
        </Route>
        <Route path='/'>
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
