import React from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {UpdatePostForm} from "./UpdatePostForm";

export const Post = (post) => {

    async function deletePost(e){
        try {
            const response = await axios.delete('http://127.0.0.1:8000/api/posts/' + post.post.id);
            console.log('👉 Returned data:', response);
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