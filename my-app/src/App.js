import React from 'react';
import {ModalCreatePost} from "./components/ModalCreatePost";
import {PostsTable} from "./components/PostsTable";


function App() {
  return (
    <div className="container">
      <ModalCreatePost />
      <PostsTable />
    </div>
  );
}

export default App;
