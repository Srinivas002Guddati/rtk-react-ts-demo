
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/posts/postSlice';
import { usersApi } from '../features/usersDemo/usersApi';
import { profileApi } from '../features/profileDemo/profileApi';
import profileReducer  from '../features/profileDemo/profileSlice';
import todoReducer from '../features/todo-app/todoSlice';

export const store =  configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        profileUI: profileReducer,
        todo: todoReducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [profileApi.reducerPath]: profileApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware, profileApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;




















