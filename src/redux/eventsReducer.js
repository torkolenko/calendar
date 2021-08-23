import { CREATE_EVENT } from './types';

function addEvent(state, data) {
  const { year } = data;
  const { month } = data;
  const { day } = data;
  const { time } = data;
  const hours = time.split(':')[0];

  if (state?.[year]) {
    if (state[year]?.[month]) {
      if (state[year][month]?.[day]) {
        const choisenDayHours = state[year][month][day].map((allTime) => allTime.split(':')[0]);
        if (choisenDayHours.includes(hours)) {
          return { ...state };
        } else {
          state[year][month][day].push(time);
          return { ...state };
        }
      } else {
        state[year][month][day] = [time];
      
        return { ...state }
      }
    } else {
      state[year][month] = day
      
      return { ...state }
    }
  } else {
    state[year] = month;
    
    return { ...state }
  }
}

const initialState = {
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
      return addEvent(state, action.payload)
    default: return state;
  }
}