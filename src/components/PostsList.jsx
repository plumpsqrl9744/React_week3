// components/List.jsx
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { __getContents } from '../modules/Commons';
import PostCard from './PostCard';
import styled from 'styled-components';

const PostsList = () => {
  const dispatch = useDispatch();
  const postsList = useSelector((state) => state.commonsReducer );

  useEffect(() => {
    dispatch(__getContents());
  }, [dispatch]);

  return (
    <StPostsListWrap>
      {postsList.map((post) => 
        <PostCard key={post.id} post={post} />
      )}
    </StPostsListWrap>
  )
}

export default PostsList;

const StPostsListWrap = styled.div`
  width:100%;
  display: grid;
  grid-template-rows: masonry;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  column-gap: 10px;
  counter-reset: grid;
  padding: 30px 0;
`

