import {ADD_POST, DELETE_POST, UPDATE_POST} from '../constant';

export const addPost = (postInfo) =>{
    const action = {
        type: ADD_POST,
        postInfo
    }
    
    return action;
}

export const updatePost = (postInfo) => {
    const action = {
        type: UPDATE_POST,
        postInfo
    }
    
    return action;
}
export const deletePost = (id) =>{
    const action = {
        type: DELETE_POST,
        id    
    }
    
    return action;
}