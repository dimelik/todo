import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {useDispatch} from "react-redux";
import {loadPosts} from "../redux/action";
import {API_URL} from "../config";

export const UpdatePostForm = (post) => {

    const dispatch = useDispatch()
    const [category, setCategory] = useState(post.post.category)

    async function saveChange(){
        try {
            const response = await axios.patch(API_URL + post.post.id, { category: category });
            console.log('👉 Returned data:', response);
            dispatch(loadPosts())
        } catch (e) {
            console.log(` Axios request failed: ${e}`);
        }
    }

    function changeCategory(e){
        setCategory(e.target.value)
    }

    return (
        <>
        <Form.Control as="select" value={category} onChange={changeCategory}>
            <option>TODO</option>
            <option>DOING</option>
            <option>DONE</option>
        </Form.Control>
        <Button variant="outline-success" onClick={saveChange}>Change</Button>
        </>
    )
}