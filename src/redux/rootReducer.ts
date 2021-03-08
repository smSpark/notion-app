import { combineReducers } from "redux";
//import { appReducer } from "./app/reducer";
import { contactFilterReducer } from "./contactFilter/reducer";
import { contactsReducer } from "./contacts/reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  //app: appReducer,
  filter: contactFilterReducer,
});

export { rootReducer };