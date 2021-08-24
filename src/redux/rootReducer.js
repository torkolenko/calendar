import { combineReducers } from "redux";
import { weekReducer } from "./weekReducer"
import { eventsReducer } from "./eventsReducer"

export const rootReducer = combineReducers({
  days: weekReducer,
  events: eventsReducer
})