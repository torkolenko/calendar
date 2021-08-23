import { combineReducers } from "redux";
import { weekDaysReducer } from "./weekDaysReducer"
import { eventsReducer } from "./eventsReducer"

export const rootReducer = combineReducers({
  weekDays: weekDaysReducer,
  events: eventsReducer
})