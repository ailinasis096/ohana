import React from 'react';
import EventsList from '../EventsList/index';

const HOME_ROUTES = [
  {
    label: 'EventsList',
    //icon: PromotionIcon,
    component: EventsList,
    //sidebarHref: '/promotions',
    href: '/events/list',
  }
];

export default HOME_ROUTES;
