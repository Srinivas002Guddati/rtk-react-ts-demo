import { posts } from './../../node_modules/@reduxjs/toolkit/src/query/tests/mocks/handlers';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/posts/postSlice';

export const store =  configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;




















