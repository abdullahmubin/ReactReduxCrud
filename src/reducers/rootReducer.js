import {combineReducers} from 'redux';  
import reminders from './reminderReducer';
import posts from './postReducer';
import appSettings from './AppSettingsReducer';

const rootReducer = combineReducers({  
  // short hand property names
  appSettings,
  reminders,
  posts
})

export default rootReducer;