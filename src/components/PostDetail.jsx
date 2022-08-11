// components/PostDetail.jsx
// ::: 게시글 상세
import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __getContents, __deleteContent } from '../modules/Commons';
import PostRivese from './PostRevise';
import styled from 'styled-components';



const PostDetail = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const buttonUpdate = useRef();
  const updateFormWrap = useRef();

  useEffect(() => {
    dispatch(__getContents());
  }, [dispatch]);

  // ::: 뒤로가기
  const onClickBack = () => {
    navigate(-1);
  }

  // ::: 게시글 삭제하기
  const onDeletePost = (event) => {
    event.preventDefault();
    dispatch(__deleteContent({
      id: post.id
    }));
    onClickBack();
  }

  // ::: 게시글 수정하기 폼 보이기
  const onTogglUpdatePost = (event) => {
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
    <StPostDetailWrap>
      <p className='buttonBox'>
        <button type='button' onClick={onClickBack}>Go Back</button>
      </p>
      <p>ID : {post.id}</p>
      <img src={`https://picsum.photos/id/${post.id}/200/300`} alt={post.title} />
      <h3>{post.title}</h3>
      <p>{post.text}</p>
      <p className='buttonBox'>
        <button type='button' onClick={onDeletePost}>Delete</button>
        <button type='button' 
          ref={buttonUpdate} 
          onClick={onTogglUpdatePost} 
          isopen={+false}
        >
            Post Update
        </button>
      </p>
      
      <div
        className='hideBox'
        ref={updateFormWrap} 
        togglerevise={+false} 
      >
        <PostRivese 
          post={post} 
          updateFormWrap={updateFormWrap} 
          buttonUpdate={buttonUpdate}
        />
      </div>
      

    </StPostDetailWrap>
  )
}

export default PostDetail;

const StPostDetailWrap = styled.div`
  text-align: center;
  margin: 10px;
  padding: 10px;
  border-radius: 0.75rem;
  box-shadow: var(--box-shadow);

  h3 {
    margin: 10px;
    font-size: 18px;
  }
  p {
    margin: 10px;
  }

  .showBox {
    height: 100px;
    transition: .5s;
  }
  .hideBox {
    height:0;
    overflow: hidden;
    transition: 1s;
  }
`

