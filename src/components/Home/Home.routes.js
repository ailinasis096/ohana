import EventsList from '../EventsList/index';
import EventsRegister from '../EventsRegister/index';

const HOME_ROUTES = [
  {
    label: 'EventsList',
    //icon: PromotionIcon,
    component: EventsList,
    //sidebarHref: '/promotions',
    href: '/events/list',
  },
  {
    label: 'EventsRegister',
    component: EventsRegister,
    href: '/events/create'
  }
];

export default HOME_ROUTES;
