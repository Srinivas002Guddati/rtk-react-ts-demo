import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts, addPost } from "./postsThunk";


export const  PostsComponent = ()=> {
    const [ newTitle, setNewTitle ] = useState("");

 const dispatch = useDispatch();
 const { posts, loading, error } = useSelector((state: any)=>state.posts);
 console.log("posts", posts);

 useEffect(()=>{
    dispatch(fetchPosts());
 }, [dispatch]);

const handleAdd = () => {
  if (newTitle.trim()) {
    dispatch(addPost({ title: newTitle, body: "Placeholder body" }));
    setNewTitle("");
  }
};

 const handleUpdate = ()=>{};
 const handleDelete = () =>{};

 if(loading){
    return <p>Loading...</p>;
 }
 if(error){
    return <p>Error while loading...</p>;
 }
 
    return(
        <div>
            <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder="New Post Title"/>
            <button onClick={handleAdd}>Add Post</button>
            <ul>
                { posts.map((post)=>(
                    <li key={post.id}>{post.title}
                    <button onClick={()=>handleUpdate(post.id)}>Update</button>
                    <button onClick={()=>handleDelete(post.di)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};