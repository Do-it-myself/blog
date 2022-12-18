import React from 'react'
import NavBar from './main/NavBar'
import Home from './main/Home'
import Hardware from './main/Hardware'
import Software from './main/Software'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App() {
  return (
    <Router>
        <NavBar />
        <Switch>
            <Route exact path="/blog">
                <Home />
            </Route>
            <Route exact path="/blog/hardware">
                <Hardware />
            </Route>
            <Route exact path="/blog/software">
                <Software />
            </Route>
        </Switch>
    </Router>
  )
}