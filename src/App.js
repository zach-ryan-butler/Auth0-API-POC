import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SplashPage from './pages/SplashPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={SplashPage} />
          <Route path='/signup' exact component={SignupPage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/landing-page' exact component={LandingPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
