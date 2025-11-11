import { createAsyncThunk } from "@reduxjs/toolkit";

export const createPost = createAsyncThunk(
    "newPosts/createPost", async (newPost: { title: string, body: string }, thunkAPI)=>{
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: { "Content-Type": "Application/json"},
                body: JSON.stringify(newPost)
            });
            return await response.json();
        }catch(error){
            return thunkAPI.rejectWithValue("Failed to create post");
        }
    }
);