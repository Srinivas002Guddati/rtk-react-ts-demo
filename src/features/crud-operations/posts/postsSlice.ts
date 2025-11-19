import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, addPost } from './postsThunk';


const initialState = {
    posts: [],
    loading: false,
    error: null
}
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{

        // GET
        builder.addCase(fetchPosts.pending, (state)=>{ state.loading = true; });
        builder.addCase(fetchPosts.fulfilled, (state, action)=> {
            state.loading = false;
            state.posts = action.payload
        });
        builder.addCase(fetchPosts.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });

        // POST
        builder.addCase(addPost.fulfilled, (state, action)=> {
            state.loading = false;
            state.posts.push(action.payload);
        });
    }

});

export default postsSlice.reducer;