// NOTE : It is not used yet. Only post Reducer is used.

import {ADD_REMINDER, DELETE_REMINDER, UPDATE_REMINDER} from '../constant';
import initialState from './initialState';

const reminder = (action) =>{
    return{
        text: action.text,
        id: Math.random()
    }
}

const removeById = (state = [], id) => {
    var reminderList = state;
    const reminders = reminderList.filter(reminder => reminder.id !== id);
    
    return reminders;
}

const updateById = (state, action) => {
    return state.map((reminder)=>{
        if(reminder.id === action.id) {
          return {
             ...reminder,
             text:action.text,
             
          }
        } else return reminder;
      })
    
}
const reminders = (state = initialState.reminders, action) => {
    let reminders = null;

    switch(action.type){
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            return reminders;
        case DELETE_REMINDER:
            reminders = removeById(state, action.id);
            return reminders;
        case UPDATE_REMINDER:
            reminders = updateById(state, action);
            return reminders;
        default:
            reminders = state;
            return reminders;
        
    }
    
    
}

export default reminders;