import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export const UpdatePostForm = (post) => {
    const [category, setCategory] = useState(post.post.category)

    function changeCategory(e){
        setCategory(e.target.value)
    }

    async function saveChange(e){
        try {
            const response = await axios.patch('http://127.0.0.1:8000/api/posts/' + post.post.id, { category: category });
            console.log('👉 Returned data:', response);
        } catch (e) {
            console.log(` Axios request failed: ${e}`);
        }
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