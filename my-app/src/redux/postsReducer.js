import {LOAD_POSTS} from "./types";


const initialState = {
    posts: []
}

export const postsReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_POSTS:
            return {...state, posts: action.payload}
        default: return state
    }
}
