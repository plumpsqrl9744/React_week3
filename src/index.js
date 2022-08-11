import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ::: 전역저장관리공간(리덕스, 스토어) 연결
import store from './modules/ConfigStore';
import { Provider } from 'react-redux';

// ::: 전역 스타일 적용
import GlobalStyle from './GlobalStyle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);

reportWebVitals();
