import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {useDispatch} from "react-redux";
import {loadPosts} from "../redux/action";
import {API_URL} from "../config";


export const PostUpdateForm = (post) => {

    const dispatch = useDispatch()
    const [category, setCategory] = useState(post.post.category)
    const [comment, setComment] = useState('')
    const post_id = post.post.id

    async function saveChange(){
        try {
            const response = await axios.patch(API_URL + post_id, { category: category, comment: {post_id, comment}});
            console.log('👉 Returned data:', response);
            setComment('')
            dispatch(loadPosts())
        } catch (e) {
            console.log(` Axios request failed: ${e}`);
        }
    }

    function changeCategory(e){
        setCategory(e.target.value)
    }

    function changeComment(e){
        setComment(e.target.value)
    }

    return (
        <div>
        <Form.Control as="select" value={category} onChange={changeCategory}>
            <option>TODO</option>
            <option>DOING</option>
            <option>DONE</option>
        </Form.Control>
            <Form.Label>Comment</Form.Label>
            <Form.Control type="text" placeholder="input name" value={comment} onChange={changeComment}/>
        <Button variant="outline-success" onClick={saveChange}>Save</Button>
            {post.post.comments.map(comment => <h5 key={comment.id}>{comment.comment}</h5>)}
        </div>
    )
}