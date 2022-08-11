// components/CommentsList.jsx
// ::: 댓글 리스트 부분
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { __getComments } from '../modules/Comments';
import CommentsForm from './CommentsForm';
import CommentCard from './CommentCard';
import styled from 'styled-components';


const CommentsList = () => {
  const dispatch = useDispatch();
  const commentsList = useSelector((state) => state.commentsReducer );
  const postId = useParams();

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  return (
    <StCommentsListWrap>
      <CommentsForm />
      {commentsList.map((comment) => (
        Number(postId.postId) === comment.postId && 
          <CommentCard 
            key={comment.id} 
            comment={comment}
          />
      ))}
    </StCommentsListWrap>
  )
}

export default CommentsList;

const StCommentsListWrap = styled.div`

`

