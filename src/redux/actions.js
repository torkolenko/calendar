import { GET_WEEK, CREATE_EVENT, CHOISE_EVENT, DELETE_EVENT } from "./types";

function splitEvent(event) {
  const date = event.split(" ")[0];
  const time = event.split(" ")[1];
  const year = date.split("-")[0];
  const month = date.split("-")[1];
  const day = date.split("-")[2];

  return { year, month, day, time };
}

export function createEvent(event) {
  const payload = splitEvent(event);

  return {
    type: CREATE_EVENT,
    payload
  }
}

export function getWeek(date) {
  return {
    type: GET_WEEK,
    payload: date
  }
}

export function choiseEvent(event) {
  return {
    type: CHOISE_EVENT,
    payload: event
  }
}

export function deleteEvent(event) {
  const payload = splitEvent(event);
  
  return {
    type: DELETE_EVENT,
    payload
  }

}