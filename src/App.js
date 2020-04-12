import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import Nav from './Nav/Nav'
import SignupPathMain from './SignupPathMain/SignupPathMain';
import NotFoundMain from './NotFoundMain/NotFoundMain';


export default class App extends Component {


  render() {
    return (
      <div className='App'>
        <nav className='App__nav'>
          <Switch>
            <Route 
                exact path='/signup' 
                component={Nav}
            /> 
          </Switch>
        </nav>
        <div className='Head__main'>
          <main className='App__main'>
            <Switch>
              <Route 
                exact path='/signup' 
                component={SignupPathMain}
              />
              <Route component={NotFoundMain} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

