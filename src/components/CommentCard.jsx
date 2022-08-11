// components/CommentCard.jsx
// ::: 각각의 댓글 부분
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { __deleteComment, __getComments, __updateComment } from '../modules/Comments';
import styled from 'styled-components';


const CommentCard = ({ comment }) => {
  const dispatch = useDispatch();
  const buttonUpdate = useRef();
  const updateFormWrap = useRef();

  const onDeleteComment = (event) => {
    event.preventDefault();
    dispatch(__deleteComment(comment.id));
  }

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  const [inputs, setInputs] = useState({
    writer: '',
    message: ''
  });

  const { writer, message } = inputs;

  const onChangeUpdate = (event) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  }

  const onUpdateComment = (event) => {
    event.preventDefault();
    const updateComment = {
      id: comment.id,
      writer: inputs.writer,
      message: inputs.message,
      postId: comment.postId
    }
    dispatch(__updateComment(updateComment));
    setInputs({
      writer: '',
      message: ''
    });
    updateFormWrap.current.togglerevise = false;
    updateFormWrap.current.classList.add('hideBox');
    updateFormWrap.current.classList.remove('showBox');
  }

  // ::: 댓글 수정하기 폼 보이기
  const onTogglUpdateComment = (event) => {
    event.target.isopen = !event.target.isopen;

    if(event.target.isopen === true) {
      updateFormWrap.current.togglerevise = true;
      updateFormWrap.current.classList.remove('hideBox');
      updateFormWrap.current.classList.add('showBox');

    } else {
      updateFormWrap.current.togglerevise = false;
      updateFormWrap.current.classList.add('hideBox');
      updateFormWrap.current.classList.remove('showBox');
    }
  }

  return (
    <StCommentCardWrap key={comment.id}>
      <div className='commentsWrap'>
        <div className='textWrap'>
          <h3> {comment.writer} </h3>
          <p> {comment.message} </p>
        </div>
        <div className='buttonWrap'>
          <button className='buttonDelete' onClick={onDeleteComment}>Delete</button><br />
          <button
            ref={buttonUpdate} 
            onClick={onTogglUpdateComment} 
            isopen={+false}
          >Update</button>
        </div>
      </div>
      <form 
        className='updateBox hideBox' 
        action='' 
        onSubmit={onUpdateComment}
        ref={updateFormWrap} 
        togglerevise={+false}
        >
        <label>Writer</label>
        <input type='text' name='writer' value={writer} onChange={onChangeUpdate} />
        <label>Comment</label>
        <input type='text' name='message' value={message} onChange={onChangeUpdate} />
        <button>Complete</button>
      </form>
    </StCommentCardWrap>
  )
}

export default CommentCard;

const StCommentCardWrap = styled.div`
  border-radius: 0.75rem;
  background-color: var(--sub-color);
  box-shadow: var(--box-shadow);
  margin-bottom: 10px;
  padding: 20px 30px 10px 20px;
  h3, p {
    padding: 10px;
  }
  .commentsWrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .textWrap {
    width: 60%;
    height: 80px;
  }
  .buttonWrap {
    width: 25%;
    height: 80px;
    text-align: right;
  }
  button {
    width: 100px;
  }
  .buttonDelete {
    margin-bottom: 5px;
  }
  .updateBox {
    text-align: center;
  }

  .showBox {
    height: 70px;
    transition: .5s;
  }
  .hideBox {
    height:0;
    overflow: hidden;
    transition: 1s;
  }

`

