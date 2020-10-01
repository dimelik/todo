import React from 'react';
import {FormModal} from "./components/FormModal";
import PostsTable from "./components/PostsTable";
import {PostCreateForm} from "./components/PostCreateForm";


function App() {
  return (
    <div className="container">
      <FormModal name='Create' component={<PostCreateForm />}/>
      <PostsTable />
    </div>
  );
}

export default App;
