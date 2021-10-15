import React, {useEffect, useState} from "react";
import { Route, Link, Switch } from 'react-router-dom'
import Homepage from './Homepage'


const App = () => {
  return (
    <div>
      <Switch>
        <Homepage />
      </Switch>
    </div>
  );
};
export default App;
