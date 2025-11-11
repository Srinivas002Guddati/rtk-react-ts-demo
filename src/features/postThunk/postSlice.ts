import { errors } from './../../../node_modules/immer/src/utils/errors';
import { Loader } from './../../../node_modules/react-router/dist/development/index-react-server.d';

import { createSlice } from "@reduxjs/toolkit";
import { createPost } from './postThunk';

const initialState = {
    posts:[],
    loading: false,
    error: null
}

const postSlice = createSlice({
    name: "newPosts",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(createPost.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(createPost.fulfilled, (state, action)=>{
            state.loading = false;
            state.posts.push(action.payload);
        })
        .addCase(createPost.rejected, (state, action)=>{
            state.loading = false;
            state.error= action.payload;
        })
    },
});

export default postSlice.reducer;