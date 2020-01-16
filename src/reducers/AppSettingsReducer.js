// NOTE : It is not used yet. Only post Reducer is used.

import { IS_EDIT_MODE } from '../constant';
import initialState from './initialState';

const ckEdit = (state, value) => {
    return {
        ...state,
        isEditMode:value,
        
     }
}

const appSettings = (state = initialState.appSettings, action) => {
    let appSettings = null;

    switch(action.type){
        case IS_EDIT_MODE:
            appSettings = ckEdit(state, action.isEditMode) ; 
            return appSettings;
        default:
            return state;
    }

}

export default appSettings;
