import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "./postThunk";

export const CreatePostsComponent = ()=>{

    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const { loading, error } = useSelector((state)=> state.newPosts);
    const handlSubmit = ()=>{
        if(title && body){
            dispatch(createPost({title, body}));
            setTitle("");
            setBody("");
        }        
    }

    return(
        <div>
            <h2>Create Post</h2>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" />
            <textarea value={body} onChange={(e)=>setBody(e.target.value)} placeholder="Body" />
            <button onClick={handlSubmit}>Submit</button>
            {loading && <p>Submitting...</p>}
            {error && <p>Error: {error} </p>}
        </div>
    )
}