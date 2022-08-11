// pages/PostsPage.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { __getContents } from '../modules/Commons';

// ::: 컨포넌트 연결
import Header from '../components/Header';
import Layout from '../components/Layout';
import PostDetail from '../components/PostDetail';
import CommentsList from '../components/CommentsList';


const PostsPage = () => {
  const dispatch = useDispatch();
  const postsList = useSelector(state => state.commonsReducer);
  const postId = useParams();

  useEffect(() => {
    dispatch(__getContents());
  }, [dispatch]);

  return (
    <Layout>
      <Header />
      
      {postsList.map((post) => (
        post.id === Number(postId.postId) &&
        <PostDetail key={post.id} post={post} />
      ))}
      <CommentsList />
    </Layout>
  );
}

export default PostsPage;