import React from 'react';
import Posts from '../../components/posts/Posts';
import PostForm from '../../components/posts/PostForm';
const PostsPage = () => {
    return (
        <div>
            I am the test post page  
            <PostForm/>
            <Posts/>
            
        </div>
    );
};

export default PostsPage;