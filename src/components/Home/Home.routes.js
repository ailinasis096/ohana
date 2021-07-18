import EventsList from '../EventsComp/EventsList/index';
import EventsRegister from '../EventsComp/EventsRegister/index';
import EventDetail from '../EventsComp/EventDetail/index';

const HOME_ROUTES = [
  {
    label: 'EventsList',
    //icon: PromotionIcon,
    component: EventsList,
    href: '/events/list',
  },
  {
    label: 'EventsRegister',
    component: EventsRegister,
    href: '/events/create'
  },
  {
    label: 'EventDetail',
    component: EventDetail,
    href: '/events/edit/:eventId?'
  }
];

export default HOME_ROUTES;
