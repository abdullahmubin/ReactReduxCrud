// NOTE : It is not used yet. Only post action is used.

import { ADD_REMINDER, DELETE_REMINDER, UPDATE_REMINDER } from '../constant';

export const addReminder = (text) =>{
    const action = {
        type: ADD_REMINDER,
        text
    }
   
    return action;
}

export const deleteReminder = (id) =>{
    const action = {
        type: DELETE_REMINDER,
        id    
    }

    return action;
}

export const updateReminder = (id,text) => {
    const action = {
        type: UPDATE_REMINDER,
        id,
        text
    }
    return action;
}