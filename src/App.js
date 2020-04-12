import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import SignupPathMain from './SignupPathMain/SignupPathMain';
// import HomePathSidebar from './HomePathSidebar/HomePathSidebar';
import NotFoundMain from './NotFoundMain/NotFoundMain';
import NotFoundSidebar from './NotFoundSidebar/NotFoundSidebar';



export default class App extends Component {


  render() {
    return (
      <div className='App'>
        <nav className='App__nav'>
          <Switch>
            <Route 
                exact path='/' 
                component={SignupPathMain}
            /> 
            <Route component={NotFoundSidebar} />
          </Switch>
        </nav>
        <div className='Head__main'>
          <main className='App__main'>
            <Switch>
              <Route 
                exact path='/' 
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

