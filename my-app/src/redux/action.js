import {LOAD_POSTS} from './types';
import {API_URL} from "../config";


export function loadPosts() {

    return async dispatch => {
        try {
            const response = await fetch(API_URL)
            const json = await response.json()
            dispatch({type: LOAD_POSTS, payload: json})
        } catch (e) {
            console.log('action load post down')
        }
    }
}