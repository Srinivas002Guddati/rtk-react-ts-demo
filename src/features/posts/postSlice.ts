import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
});


const newPostsSlice = createSlice({
    name: 'posts',
    initialState: { items:[], status: 'idle' },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchPosts.pending, state => { state.status = 'loading' } )
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.items = action.payload;
        })
        .addCase(fetchPosts.rejected, state => { state.status = 'failed' });
    },
});

export default newPostsSlice.reducer;