import React, { useEffect, useState } from 'react'
import EventDetail from './EventDetail.component'
import './EventDetail.css'

//import API from '../../../api/Api'

const EventDetailContainer = () => {
  const [event, setEvent] = useState([])

  useEffect(() => {
    console.log('HOLA')
    /*const fetchEvent = async () => {
      try {
        const response = API.getEventById();
        console.log('response: ', response)
        setEvent(response)
      } catch(e) {
        console.error(e)
      }
    }
    fetchEvent();*/
  }, [])

  return <EventDetail event={event} />
}

export default EventDetailContainer
