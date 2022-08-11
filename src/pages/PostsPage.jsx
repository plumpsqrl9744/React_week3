// pages/PostsPage.jsx
import React from 'react';

// ::: 컨포넌트 연결
import Header from '../components/Header';
import Layout from '../components/Layout';
import PostsForm from '../components/PostsForm';
import PostsList from '../components/PostsList';

const PostsPage = () => {
  return (
    <Layout>
      <Header />
      <PostsForm />
      <PostsList />
    </Layout>
  );
}

export default PostsPage;