// components/Layout.jsx
import React from 'react';
import styled from 'styled-components';

const Layout = ({children}) => {
  return (
    <StLayoutWrap>
      {children}
    </StLayoutWrap>
  )
}

export default Layout;

const StLayoutWrap = styled.div`
  width: 90%;
  min-width: 1200px;
  margin: 0 auto;
  padding-top: 100px;
`