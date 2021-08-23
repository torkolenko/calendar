import moment from 'moment';
import { GET_WEEK } from './types';

function getDaysOfWeek(date) {  
  const arr = [];
  const firstDay = date.format('dddd') === 'Sunday' ?     
    date.subtract('d',6) : 
    date.startOf('week').add('d',1);
  
  console.log(firstDay);
  for (let i = 0; i < 7; i++) {
    arr.push(firstDay.clone().add('d', i).format('YYYY-MM-DD'));
  }
  return arr;
}

const initialState = {
  days: getDaysOfWeek(moment()),
};

export const weekDaysReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEEK:
      return { days: getDaysOfWeek(action.payload) };
    default: return state;
  }
};
