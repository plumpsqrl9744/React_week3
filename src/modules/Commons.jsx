// src/redux/modules/cards.js

// ::: axios(통신역할), Thunk(미들웨어), Reducer 연결
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// ::: Thunk 생성 및 설정, Axios를 사용해 데이터 주고 받기 위해 설정
// ::: json server 포트 설정
const port = '3003';

// ::: [Thunk, Axios] 데이터 받아오기(get)
// ::: (get) 게시글
export const __getContents = createAsyncThunk("GET_CONTENTS", async () => {
  const response = await axios.get(`http://localhost:${port}/posts/`);
  return response.data;
});

// ::: [Thunk, Axios] 데이터 추가하기(post)
// :::: (post) 게시글
export const __addContent = createAsyncThunk("ADD_CONTENT", async (newContents) => {
  const response = await axios.post(`http://localhost:${port}/posts`, {
    title: newContents.title,
    text: newContents.text,
  });
  return response.data;
});


// ::: [Thunk, Axios] 데이터 삭제하기(delete)
// :::: (delete) 게시글
export const __deleteContent = createAsyncThunk("DELETE_CONTENT", async ({ id }) => {
  // eslint-disable-next-line
  const response = await axios.delete(`http://localhost:${port}/posts/${id}`);
  return id;
});

// ::: [Thunk, Axios] 데이터 수정하기(put)
// :::: (put) 게시글
export const __updateContent = createAsyncThunk("UPDATE_CONTENT", 
  async(updateContent) => {
    // eslint-disable-next-line 
    const response = await axios.put(`http://localhost:${port}/posts/${updateContent.id}`, {
      id: updateContent.id,
      title: updateContent.title,
      text: updateContent.text
    });
    return response.data;
  }
);


// [Reducer]
// ::: 스토어 공간에서 어떤 작업을 진행해줄지
export const commonsReducer = createSlice({
  name: 'commons',
  initialState: [ ],
  reducers: { },
  extraReducers: { 

    // 게시글
    [__getContents.fulfilled]: (state, { payload }) => [...payload],
    [__addContent.fulfilled]: (state, { payload }) => [...state, payload],
    [__deleteContent.fulfilled]: (state, { payload }) => 
      state.filter((part) => part.id !== payload),
    [__updateContent.fulfilled]: (state, {payload}) => {
      return state.map((post) => {
        if(post.id === payload.id) {
          return { ...post, title: payload.title, text: payload.text };
        } else {
          return post;
        }
      });
    }

  },
});


export default commonsReducer.reducer