// shared/Router.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// ::: 페이지 연결
import PostsPage from '../pages/PostsPage';
import DetailPage from '../pages/DetailPage';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PostsPage />} />
        <Route path='/detail/:postId' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;