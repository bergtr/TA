import Homepage from './pages/homepage/homepage.component';
import Profile from './pages/profile/profile.component';
import Landing from './pages/landing/landing.component';
import Explore from './pages/explore/explore.component';
import Navbar from './component/navbar/navbar.component';

import { Switch, Route } from 'react-router';

import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentuser: null
    };
  }

  render(){
    return(
      <div className='main'>
      <Navbar/>
      <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/profile' component={Profile} />
          <Route path='/explore' component={Explore} />
          <Route path='/landing' component={Landing} />
        </Switch>
      </div>
    )
  }
}

export default App;
