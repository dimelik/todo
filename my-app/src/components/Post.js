import React from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {UpdatePostForm} from "./UpdatePostForm";
import {useDispatch} from "react-redux";
import {loadPosts} from "../redux/action";
import {API_URL} from "../config";

export const Post = (post) => {

    const dispatch = useDispatch()

    async function deletePost(){
        try {
            const response = await axios.delete(API_URL + post.post.id);
            console.log('👉 Returned data:', response);
            dispatch(loadPosts())
        } catch (e) {
            console.log(`Axios request failed: ${e}`);
        }
    }

    return(
        <>
            <hr/>
            <h3>{post.post.name}</h3>
            <p>{post.post.description}</p>
            <UpdatePostForm post={post.post} />
            <Button variant="outline-dark" onClick={deletePost}>Delete</Button>

        </>
    )
}