// components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {

  return (
    <StHeaderWrap>
      <Link to={`/`}>
        <h1>Project ReactJS</h1>
      </Link>
    </StHeaderWrap>
  )
}

export default Header;

const StHeaderWrap = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top:0;
  left:0;
  width: 100%;
  height: 80px;
  background-color: var(--main-color);
  padding: 0 20px;
  
  h1 {
    color: var(--sub-color);
    font-size: 20px;
  }
  button {
    background-color: var(--sub-color);
    color:var(--main-color);
    font-size: 16px;
  }
`