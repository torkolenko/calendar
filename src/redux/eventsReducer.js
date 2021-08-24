import { CREATE_EVENT, CHOISE_EVENT, DELETE_EVENT } from './types';

// function addEvent(state, event) { //функция, которая симулирует работу api
//   const { year: eventYear } = event;
//   const { month: eventMonth } = event;
//   const { day: eventDay } = event;
//   const { time: eventTime } = event;
//   const eventHours = eventTime.split(':')[0];

//   if (state.events?.[eventYear]) {
//     if (state.events[eventYear]?.[eventMonth]) {
//       if (state.events[eventYear][eventMonth]?.[eventDay]) {
//         const stateEventsHours = state.events[eventYear][eventMonth][eventDay]
//         .map((time) => time.split(':')[0]);
        
//         if (stateEventsHours.includes(eventHours)) {
//           return { ...state };
//         } else {
//           state.events[eventYear][eventMonth][eventDay].push(eventTime);
//           return { ...state };
//         }
//       } else {
//         state.events[eventYear][eventMonth][eventDay] = [eventTime];
      
//         return { ...state }
//       }
//     } else {
//       state.events[eventYear][eventMonth] = {
//         [eventDay]: [eventTime]
//       }
      
//       return { ...state }
//     }
//   } else {
//     state.events[eventYear] = {
//       [eventMonth]: {
//         [eventDay]: [eventTime]
//       }  
//     };
    
//     return { ...state }
//   }
// }

// function deleteEvent(state, event) {
//   const { year: eventYear } = event;
//   const { month: eventMonth } = event;
//   const { day: eventDay } = event;
//   const { time: eventTime } = event;
//   const currentDayEvents = state.events[eventYear][eventMonth][eventDay];
  
//   const currentDayEventsAfterDelete = currentDayEvents
//   .filter((currentTime) => currentTime !== eventTime);

//   state.events[eventYear][eventMonth][eventDay] = currentDayEventsAfterDelete;
  
//   return { ...state };
// }

function addEvent(state, event) { //функция, которая симулирует работу api
  const { year: eventYear } = event;
  const { month: eventMonth } = event;
  const { day: eventDay } = event;
  const { time: eventTime } = event;
  const eventHours = eventTime.split(':')[0];

  if (state?.[eventYear]) {
    if (state[eventYear]?.[eventMonth]) {
      if (state[eventYear][eventMonth]?.[eventDay]) {
        const stateEventsHours = state[eventYear][eventMonth][eventDay]
        .map((time) => time.split(':')[0]);
        
        if (stateEventsHours.includes(eventHours)) {
          return { ...state };
        } else {
          state[eventYear][eventMonth][eventDay].push(eventTime);
          return { ...state };
        }
      } else {
        state[eventYear][eventMonth][eventDay] = [eventTime];
      
        return { ...state }
      }
    } else {
      state[eventYear][eventMonth] = {
        [eventDay]: [eventTime]
      }
      
      return { ...state }
    }
  } else {
    state[eventYear] = {
      [eventMonth]: {
        [eventDay]: [eventTime]
      }  
    };
    
    return { ...state }
  }
}

function deleteEvent(state, event) {
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
  // events: {
  //   "2021": {
  //     "08": {
  //       "24": [ "11:30:01", "22:30:01" ],
  //       "27": ["22:22:01", "05:30:00"],
  //       "29": ["05:30:01", "03:00:08"], 
  //       "23": [ "23:30:01"]
  //     }
  //   }
  // },
  // choisenEvent: ""

    "2021": {
      "08": {
        "24": [ "11:30:01", "22:30:01" ],
        "27": ["22:22:01", "05:30:00"],
        "29": ["05:30:01", "03:00:08"], 
        "23": [ "23:30:01"]
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
