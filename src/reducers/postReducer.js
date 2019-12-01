import {ADD_POST, DELETE_POST, UPDATE_POST} from '../constant';
import initialState from './initialState';

const addPost = (action) =>{
    var { title, post } = action.postInfo;
     return{
         title: title,
         post: post,
         id: Math.random()
     }
}

const removeById = (state = [], id) => {
    var reminderList = state;
    const reminders = reminderList.filter(reminder => reminder.id !== id);
    return reminders;
}

const updateById = (state, action) => {
    return state.map((post)=>{
        if(post.id === action.postInfo.id) {
          return {
             ...post,
             title:action.postInfo.title,
             post: action.postInfo.post
             
          }
        } else return post;
      })
    
}

const posts = (state = initialState.postList, action) => {
    let postList = null;

    switch(action.type){
        case ADD_POST:
            postList = [...state, addPost(action)];
            return postList;
        case DELETE_POST:
                postList = removeById(state, action.id);
            return postList;
        case UPDATE_POST:
                postList = updateById(state, action);
                return postList;
        default:
            return postList = state;
    }

}

export default posts;