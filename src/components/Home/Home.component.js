import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HOME_ROUTES from './Home.routes';
import Navbar from '../Navbar/Navbar.component'
import './Home.css';

const Home = () => {
  return (
      <div className='Home Home__Container'>
        <Navbar/>
        <div className="Home__Content">
          <Switch>
            {HOME_ROUTES.map(({ component, href }) => (
              <Route key={href} path={href} component={component} />
            ))}
            <Redirect to={HOME_ROUTES[0].href} />
          </Switch>
        </div>
      </div>
  );
};

export default Home;