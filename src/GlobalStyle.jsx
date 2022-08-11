import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #54426B;
    --sub-color: #ECE8EF;
    --white-color: #E9F1F7;
    --line-color: #494949;
    --border-radius: 20px;
    --default-padding: 10px;
    --text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    --box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
  * {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    line-height: 1.2;
    font-size: 13px;
    color: var(--line-color);
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5 {
    font-weight: 700;
  }
  ul li, ol li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  button {
    height: 30px;
    font-weight: 500;
    color: var(--white-color);
    background-color: var(--main-color);
    border: 1px solid var(--main-color);
    border-radius: 5px;
    padding: 0 15px;
    margin-left: 5px;
    cursor: pointer;
  }
  button:hover {
    text-shadow: var(--text-shadow);
    box-shadow: var(--text-shadow);
    transition: 0.5s;
  }
  label {
    font-weight: 700;
  }
  input {
    height: 30px;
    border: 1px solid var(--line-color);
    border-radius: 5px;
    padding: 0 15px;
    margin: 0 10px;
  }
  input:focus {
    outline: none;
  }
  .validationTextBox {
    color: #F05050;
    padding: 10px;
  }
`

export default GlobalStyle;