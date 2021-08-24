import moment from 'moment';
import { GET_WEEK } from './types';

function getDaysOfWeek(monday) {  
  const daysCurrentWeek = [];

  for (let i = 0; i < 7; i++) {
    daysCurrentWeek.push(monday.clone().add('d', i).format('YYYY-MM-DD-dddd'));
  }
  return daysCurrentWeek;
}

const initialState = {
  days: getDaysOfWeek(moment().startOf("isoWeek"))
};

export const weekReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEEK:
      return { days: getDaysOfWeek(action.payload) };
    default: return state;
  }
};
