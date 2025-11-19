import { createAsyncThunk } from "@reduxjs/toolkit";


//GET: Fetch all posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async(_, thunkAPI)=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        return await response.json();
    }catch(err: any){
        return thunkAPI.rejectWithValue(err.message);
    }
});

//POST: Add a new post
export const addPost = createAsyncThunk('posts/addPost', async (newPost, thunkAPI)=>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newPost)
        })
        return await res.json();
    }catch(err: any){
        return thunkAPI.rejectWithValue(err.message);
    }
})