import { CREATE_EVENT, CHOISE_EVENT, DELETE_EVENT } from './types';

function addEvent(state, event) { //функция, которая эмулирует работу api
  const events = state.events;
  const { year: eventYear } = event;
  const { month: eventMonth } = event;
  const { day: eventDay } = event;
  const { time: eventTime } = event;
  const eventHours = eventTime.split(':')[0];

  if (events?.[eventYear]) {
    if (events[eventYear]?.[eventMonth]) {
      if (events[eventYear][eventMonth]?.[eventDay]) {
        const stateEventsHours = events[eventYear][eventMonth][eventDay]
        .map((time) => time.split(':')[0]);
        if (stateEventsHours.includes(eventHours)) {
          return { events: {...events} };
        } else {
          events[eventYear][eventMonth][eventDay].push(eventTime);

          return { events: {...events} };
        }
      } else {
        events[eventYear][eventMonth][eventDay] = [eventTime];
      
        return { events: {...events} }
      }
    } else {
      events[eventYear][eventMonth] = {
        [eventDay]: [eventTime]
      }
      
      return { events: {...events} }
    }
  } else {
    events[eventYear] = {
      [eventMonth]: {
        [eventDay]: [eventTime]
      }  
    };
    
    return { events: {...events} }
  }
}

function deleteEvent(state, event) { //функция, которая эмулирует работу api
  const { year: eventYear } = event;
  const { month: eventMonth } = event;
  const { day: eventDay } = event;
  const { time: eventTime } = event;
  const currentDayEvents = state.events[eventYear][eventMonth][eventDay];
  
  const currentDayEventsAfterDelete = currentDayEvents
  .filter((currentTime) => currentTime !== eventTime);

  state.events[eventYear][eventMonth][eventDay] = currentDayEventsAfterDelete;
  
  return { ...state };
}

const initialState = {
  events: {
    "2021": {
      "08": {
        "24": [ "11:30:01", "22:30:01" ],
        "27": ["22:22:01", "05:30:00"],
        "29": ["05:30:01", "03:00:08"], 
        "23": [ "23:30:01"]
      }
    }
  }
}

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EVENT:
      return addEvent(state, action.payload);
    case CHOISE_EVENT:
      return { ...state, choisenEvent: action.payload};
    case DELETE_EVENT:
      return deleteEvent(state, action.payload);
    default: return state;
  }
};
