import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import HeyArnoldContainer from '../HeyArnoldContainer/HeyArnoldContainer';
import CharacterDetails from '../characters/CharacterDetails'


export default function App() {
  return (
    <Router>
      <NavLink to='/' >Home</NavLink>
      <Switch>
        <Route exact path='/' component={HeyArnoldContainer}/>
        <Route exact path='/details/:id' component={CharacterDetails}/>
      </Switch>
    </Router>
  )
}
