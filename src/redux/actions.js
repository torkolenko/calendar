import moment from "moment";
import { GET_WEEK, CREATE_EVENT } from "./types";

export function createEvent(event) {
  const date = event.split(" ")[0];
  const time = event.split(" ")[1];
  const year = date.split("-")[0];
  const month = date.split("-")[1];
  const day = date.split("-")[2];
  
  return {
    type: CREATE_EVENT,
    payload: { year, month, day, time }
  }
}

export function getWeek(date) {
  return {
    type: GET_WEEK,
    payload: date
  }
}