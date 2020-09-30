import {LOAD_POSTS} from './types';


export function loadPosts() {

    return async dispatch => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/posts')
            const json = await response.json()
            dispatch({type: LOAD_POSTS, payload: json})
        } catch (e) {
            console.log('action load post down')
        }
    }
}