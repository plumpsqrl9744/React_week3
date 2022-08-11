// components/CommentsForm.jsx
// ::: 댓글 입력 부분
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { __addComment } from '../modules/Comments';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getAllByPlaceholderText } from '@testing-library/react';


const CommentsForm = () => {
  const dispatch = useDispatch();
  const postId = useParams();
  const id = Math.floor(Math.random()*1000 +1);
  const validationText = useRef();

  // ::: 폼 입력값 관리
  const [inputs, setInputs] = useState({
    id : 0,
    writer: '',
    message: '',
    postId : ""
  });
  const { writer, message } = inputs;
  const onChangeInputs = (event) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  }

  const onCreateComment = (event) => {
    event.preventDefault();
    if (inputs.writer === "" || inputs.message === "" || inputs.message.length < 5) {
      validationText.current.innerText = '성함과 5글자 이상의 내용을 입력해주세요';
     } else {
      const newComment = {
        id: id,
        postId: parseInt(postId.postId),
        writer: inputs.writer,
        message: inputs.message
      }
      dispatch(__addComment(newComment));
      
      setInputs({
        id : 0,
        writer : "",
        message: "",
        postId : ""
      })
      validationText.current.innerText = '';
     }
    
  }
  
  return (
    <StCommentsFormWrap action='' onSubmit={onCreateComment}>
      <label>Writer</label>
        <input 
          type='text' 
          name='writer' 
          value={writer} 
          onChange={onChangeInputs} 
        />

        <label>TEXT</label>
        <input 
          type='text' 
          name='message' 
          value={message} 
          onChange={onChangeInputs} 
        />
        <button>ADD</button>
        <p className='validationTextBox' ref={validationText}></p>
    </StCommentsFormWrap>
  )
}

export default CommentsForm;

const StCommentsFormWrap = styled.form`
  text-align: center;
  padding: 20px;
  .validationTextBox {
    height: 30px;
  }

`

