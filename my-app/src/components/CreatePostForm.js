import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {useDispatch} from "react-redux";
import {loadPosts} from "../redux/action";

export const CreatePostForm = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('TODO')

    async function createPost(e) {
        e.preventDefault()
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/posts', {post: {name, description, category}});
            console.log('Returned data:', response);
            dispatch(loadPosts())
        } catch (e) {
            console.log(`Axios request failed: ${e}`);
        }
        setCategory('TODO')
        setName('')
        setDescription('')
    }
    function changeName(e){
        setName(e.target.value)
    }
    function changeDescription(e){
        setDescription(e.target.value)
    }
    function changeCategory(e){
        setCategory(e.target.value)
    }
    return(
        <Form onSubmit={createPost}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="input name" value={name} onChange={changeName}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="description" value={description} onChange={changeDescription}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Example select</Form.Label>
                <Form.Control as="select" value={category} onChange={changeCategory}>
                    <option>TODO</option>
                    <option>DOING</option>
                    <option>DONE</option>
                </Form.Control>
            </Form.Group>
            <Button type="submit" className="mb-2">
                Save
            </Button>
        </Form>
    )
}