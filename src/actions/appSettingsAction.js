// NOTE : It is not used yet. Only post action is used.

import { IS_EDIT_MODE} from '../constant';

export const editMode = (isEditMode) =>{
    const action = {
        type: IS_EDIT_MODE,
        isEditMode
    }
    
    return action;
}