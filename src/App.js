import React, {useEffect, useState} from "react";
import { Route, Link, Switch } from 'react-router-dom'
import Homepage from './Homepage'
import PizzaForm from './Form'
import * as yup from 'yup'
import schema from './Schema'
import axios from 'axios'


const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/pizza'>
          <PizzaForm />
        </Route>
        <Route path='/'>
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
