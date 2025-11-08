import { useEffect } from "react";
import { fetchPosts } from './postSlice';
import type { AppDispatch, RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";


export default function Posts(){

    const dispatch = useDispatch<AppDispatch>();
    const { items, status } = useSelector((state: RootState) => state.posts)

    useEffect(()=>{
        dispatch(fetchPosts());
    }, [dispatch]);
    
    return(
        <div>
            <h2>Posts</h2>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'succeeded' && (
                <u>{items.map((post: any)=><li key={post.id}>
                    {post.title}
                </li>)}</u>
            )}
        </div>
    );
}