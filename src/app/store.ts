
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { usersApi } from '../features/usersDemo/usersApi';
import { profileApi } from '../features/profileDemo/profileApi';
import profileReducer  from '../features/profileDemo/profileSlice';
import  postsReducer  from '../features/crud-operations/posts/postsSlice';

export const store =  configureStore({
    reducer: {
        counter: counterReducer,
        profileUI: profileReducer,
        posts: postsReducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [profileApi.reducerPath]: profileApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware, profileApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;




















