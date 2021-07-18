import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import React from 'react';
import EventDetail from './EventDetail/index'
import EventsList from './EventsList/index';

const Scholarships = () => {
  return (
    <section className="eventsContainer">
      <Switch>
        <Route exact path="/events/list">
            <EventsList />
        </Route>
        <Route
          path="/events/edit/:id"
          exact
        ><EventDetail /></Route>
      </Switch>
    </section>
  );
};

export default Scholarships;
