import React, {useEffect, useState} from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import {Post} from "./Post";

export const PostsTable = () => {
    const [posts, setPosts] = useState([])

    let todo = posts.filter(function(posts) {
        return posts.category === 'TODO';
    });
    let doing = posts.filter(function(posts) {
        return posts.category === 'DOING';
    });
    let done = posts.filter(function(posts) {
        return posts.category === 'DONE';
    });

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/posts')
            .then(function (response) {
                setPosts(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    return(
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>TODO</th>
                <th>DOING</th>
                <th>DONE</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{todo.map(post => <Post post={post} key={post.id}/>)}</td>
                <td>{doing.map(post => <Post post={post} key={post.id}/>)}</td>
                <td>{done.map(post => <Post post={post} key={post.id}/>)}</td>
            </tr>
            </tbody>
        </Table>
    )

}
