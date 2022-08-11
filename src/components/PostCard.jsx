// components/PostCard.jsx
// ::: 각각의 게시글 부분
import React from 'react';
import { useDispatch } from 'react-redux';
import { __deleteContent } from '../modules/Commons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const PostCard = ({post}) => {
  const dispatch = useDispatch();

  const onDeletePost = (event) => {
    event.preventDefault();
    dispatch(__deleteContent({
      id: post.id
    }))
  }

  return (
    <Link to={`/detail/${post.id}`}>
      <StPostCardWrap key={post.id}>
        <span>ID : {post.id}</span>
        <img src={`https://picsum.photos/id/${post.id}/200/300`} alt={post.title} />
        <h3>{post.title}</h3>
        <p>{post.text}</p>
        <p className='buttonBox'>
          <button onClick={onDeletePost}>DELETE</button>
        </p>
      </StPostCardWrap>
    </Link>
  )
}

export default PostCard;

const StPostCardWrap = styled.div`
  background-color: var(--sub-color);
  break-inside: avoid;
  aspect-ratio: 4 / 3;
  border-radius: 0.75rem;
  box-shadow: var(--box-shadow);
  padding-top: 20px;

  &::before {
    counter-increment: grid;
    content: counter(grid);
    padding: 10px;
    font-style: italic;
  }
  &:nth-child(3n) {
    aspect-ratio: 1;
  }
  &:nth-child(3n - 1) {
    aspect-ratio: 2 / 3;
  }

  span {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
  }
  img {
    width: 100%;
  }
  h3, p {
    padding: 10px;
    margin: 10 0;
  }
  .buttonBox {
    text-align: right;
  }
  button {
  }

`

