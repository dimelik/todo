import React, {useEffect} from "react";
import Table from "react-bootstrap/Table";
import {Post} from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {loadPosts} from "../redux/action";

export default () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)

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
        dispatch(loadPosts())
    },[dispatch])

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
